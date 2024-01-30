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
  CompaniesGetQuery,
  Company,
  CompanyGetQuery,
  CompanyGraphGetQuery,
  Graph,
} from '@/__generated__/types.d';
import {
  CompanyGetDocument,
  CompanyGraphGetDocument,
} from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';

const DynamicAgencyProfilePage = dynamic<AgencyProfileGetStaticProps>(() =>
  import('@/modules/profile/pages/agency').then(
    (comp) => comp.AgencyProfilePage
  )
);

type AgencyProfileGetStaticProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const AgencyProfile: React.FC<AgencyProfileGetStaticProps> = ({
  agency,
  agencyChartData,
}) => {
  const router = useRouter();
  const title = `${agency?.title || 'Agency'} | Traded`;
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
        title: agency?.title || '',
        url,
        locale: 'en_US',
        type: 'article',
        images: [
          {
            url: agency?.logoUrl || '',
            width: 450,
            height: 450,
            type: 'image/png',
          },
        ],
      }}
      title={title}
      canonical={url}
      description={agency?.description || undefined}
      additionalMetaTags={[
        {
          property: 'article:publisher',
          content: 'https://www.facebook.com/tradedny/',
        },
        {
          property: 'article:modified_time',
          content: agency?.updatedAt,
        },
      ]}
    >
      <DynamicAgencyProfilePage
        agency={agency}
        agencyChartData={agencyChartData}
      />
    </Page>
  );
};

interface StaticPropsResponse {
  agency: Company;
  agencyChartData: Graph | undefined | null;
}

interface StaticPropsParams extends ParsedUrlQuery {
  slug: string;
}

type AgencyPageGetStaticProps = GetStaticProps<
  StaticPropsResponse,
  StaticPropsParams
>;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const client = initializeApollo(ctx);

  const { data } = await client.query<CompaniesGetQuery>({
    query: gql`
      query CompaniesGet($page: Int, $limit: Int, $companyType: String!) {
        companies(page: $page, limit: $limit, companyType: $companyType) {
          nodes {
            slug
          }
        }
      }
    `,
    variables: {
      limit: 0,
      page: 0,
      companyType: 'agency',
    },
  });

  let agencies = data.companies?.nodes as Company[] | undefined;
  agencies = agencies?.filter((agency) => agency?.slug !== null);

  if (!agencies) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = agencies.map((agency) => {
    const agencySlug = agency?.slug?.split(' ').join('-').toLowerCase();

    return `/agency/${agencySlug}`;
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: AgencyPageGetStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);
  // let data;

  // try {
  const query = await client.query<CompanyGetQuery>({
    query: CompanyGetDocument,
    variables: {
      slug: params?.slug,
      companyType: 'agency',
    },
  });
  const data = query?.data;
  // } catch {
  //   return {
  //     notFound: true,
  //   };
  // }

  const { company } = data;

  const {
    data: { graphs },
  } = await client.query<CompanyGraphGetQuery>({
    query: CompanyGraphGetDocument,
    variables: {
      slug: params?.slug,
      companyType: 'Agency',
    },
  });

  if (!company) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      agency: company,
      agencyChartData: graphs,
    },
    revalidate: 60,
  };
};

export default AgencyProfile;
