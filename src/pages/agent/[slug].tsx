import { gql } from '@apollo/client';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

import type {
  Broker,
  BrokerGetQuery,
  BrokersGetQuery,
} from '@/__generated__/types.d';
import { BrokerGetDocument } from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';

const DynamicAgentProfilePage = dynamic<AgentProfileGetStaticProps>(() =>
  import('@/modules/profile').then((comp) => comp.AgentProfilePage)
);

type AgentProfileGetStaticProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

// TODO: need to wrap this into a CONTEXT to avoid prop drilling

const AgentProfile: React.FC<AgentProfileGetStaticProps> = ({
  broker,
  graphStats,
  relationships,
}) => {
  const router = useRouter();

  const title = `${broker?.name || 'Agent'} | Traded`;
  const url = `${WEBSITE_URL}${router.asPath}`;

  if (router.isFallback) {
    return (
      <Page title={title} canonical={url}>
        <h1>Loading...</h1>
      </Page>
    );
  }

  return (
    <Page
      openGraph={{
        site_name: 'Traded',
        title: broker?.name,
        url,
        locale: 'en_US',
        type: 'article',
        images: [
          {
            url: broker?.thumbnail || '',
            width: 260,
            height: 260,
            type: 'image/png',
          },
        ],
      }}
      title={title}
      canonical={url}
      description={broker?.bio || broker?.bioSummary || undefined}
      additionalMetaTags={[
        {
          property: 'article:publisher',
          content: 'https://www.facebook.com/tradedny/',
        },
        {
          property: 'article:modified_time',
          content: broker?.updatedAt,
        },
      ]}
    >
      <DynamicAgentProfilePage
        broker={broker}
        graphStats={graphStats}
        relationships={relationships?.data?.brokerRelationships}
      />
    </Page>
  );
};

interface StaticPropsResponse {
  broker: Broker;
  // agentLeaderBoards?: AgentLeaderBoard | null;
  graphStats?: any;
  relationships?: any;
}

interface StaticPropsParams extends ParsedUrlQuery {
  slug: string;
}

type BrokerPageGetStaticProps = GetStaticProps<
  StaticPropsResponse,
  StaticPropsParams
>;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const client = initializeApollo(ctx);

  const { data } = await client.query<BrokersGetQuery>({
    query: gql`
      query BrokersGet($page: Int, $limit: Int) {
        brokers(page: $page, limit: $limit) {
          nodes {
            slug
          }
        }
      }
    `,
    variables: {
      limit: 0,
      page: 0,
    },
  });

  const brokers = data.brokers?.nodes as Broker[] | undefined;

  if (!brokers) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = brokers.map((broker) => {
    const brokerSlug = broker?.slug?.split(' ').join('-').toLowerCase();

    return `/agent/${brokerSlug}`;
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: BrokerPageGetStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);
  // let data;

  // try {
  const query = await client.query<BrokerGetQuery>({
    query: BrokerGetDocument,
    variables: {
      slug: params?.slug,
    },
  });
  const data = query?.data;
  if (!data) {
    return {
      notFound: true,
    };
  }
  // } catch {
  //   return {
  //     notFound: true,
  //   };
  // }

  const stats = await client.query({
    query: gql`
      query Broker($slug: ID!, $page: Int!, $limit: Int!) {
        broker(slug: $slug) {
          deals(page: $page, limit: $limit) {
            closingDate
            salePrice
            mainImage
            feeds
            transactionType
            slug
          }
        }
      }
    `,
    variables: {
      slug: params?.slug,
      page: 1,
      limit: 5000,
    },
  });

  const graphStats = stats?.data?.broker?.deals;

  const { broker } = data;

  const relationships = await client.query({
    query: gql`
      query BrokerRelationships($slug: String!, $page: Int!, $limit: Int!) {
        brokerRelationships(slug: $slug, page: $page, limit: $limit) {
          agents {
            totalCount
          }
          agencies {
            totalCount
          }
          lenders {
            totalCount
          }
        }
      }
    `,
    variables: {
      slug: params?.slug,
      page: 1,
      limit: 10,
    },
  });

  if (!broker) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      broker,
      graphStats,
      relationships,
    },
    revalidate: 60,
  };
};

export default AgentProfile;
