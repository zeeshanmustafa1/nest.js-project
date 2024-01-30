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
  // CompanyGraphGetDocument,
  // CompanyGraphGetQuery,
  Graph,
} from '@/__generated__/types.d';
import {
  CompanyGetDocument,
  CompanyGraphGetDocument,
} from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';

const DynamicLenderProfilePage = dynamic<LenderProfileGetStaticProps>(() =>
  import('@/modules/profile/pages/lender').then(
    (comp) => comp.LenderProfilePage
  )
);

type LenderProfileGetStaticProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const AgencyProfile: React.FC<LenderProfileGetStaticProps> = ({
  lender,
  lenderChartData,
}) => {
  const router = useRouter();
  const title = `${lender?.title || 'Lender'} | Traded`;
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
        title: lender?.title || '',
        url,
        locale: 'en_US',
        type: 'article',
        images: [
          {
            url: lender?.logoUrl || '',
            width: 450,
            height: 450,
            type: 'image/png',
          },
        ],
      }}
      title={title}
      canonical={url}
      description={lender?.description || undefined}
      additionalMetaTags={[
        {
          property: 'article:publisher',
          content: 'https://www.facebook.com/tradedny/',
        },
        {
          property: 'article:modified_time',
          content: lender?.updatedAt,
        },
      ]}
    >
      <DynamicLenderProfilePage
        lender={lender}
        lenderChartData={lenderChartData}
      />
    </Page>
  );
};

interface StaticPropsResponse {
  lender: Company;
  lenderChartData: Graph | undefined | null;
}

interface StaticPropsParams extends ParsedUrlQuery {
  slug: string;
}

type LenderPageGetStaticProps = GetStaticProps<
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
      companyType: 'lender',
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

    return `/lender/${agencySlug}`;
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: LenderPageGetStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);
  // let data;

  // try {
  // try {
  const query = await client.query<CompanyGetQuery>({
    query: CompanyGetDocument,
    variables: {
      slug: params?.slug,
      companyType: 'lender',
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
      companyType: 'Lender',
    },
  });

  if (!company) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      lender: company,
      lenderChartData: graphs,
    },
    revalidate: 60,
  };
  // } catch (e) {
  //   return {
  //     notFound: true,
  //   };
  // }
};

export default AgencyProfile;
