import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

import type { Deal, DealGetQuery } from '@/__generated__/types.d';
import {
  DealComparablesDocument,
  DealGetDocument,
} from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';

const DynamicPropertyProfilePage = dynamic<DealProfileGetStaticProps>(() =>
  import('@/modules/profile/pages/property').then(
    (comp) => comp.DealProfilePage
  )
);

type DealProfileGetStaticProps = InferGetStaticPropsType<typeof getStaticProps>;

const PropertyPage: React.FC<DealProfileGetStaticProps> = ({
  deal,
  comparables,
}) => {
  const router = useRouter();

  const title = `${deal?.title || 'Property'} | Traded`;
  const url = `${WEBSITE_URL}${router.asPath}`;

  if (router.isFallback) {
    return (
      <Page title="Property | Traded" canonical={url}>
        <h1>Loading...</h1>
      </Page>
    );
  }

  return (
    <Page
      openGraph={{
        site_name: 'Traded',
        title: deal?.title || '',
        url,
        locale: 'en_US',
        type: 'article',
        images: [
          {
            url: deal?.mainImage || '',
            width: 1080,
            height: 1080,
            type: 'image/png',
          },
        ],
      }}
      title={title}
      canonical={url}
      description={deal?.metaDescription || undefined}
      additionalMetaTags={[
        {
          property: 'article:publisher',
          content: 'https://www.facebook.com/tradedny/',
        },
        {
          property: 'article:modified_time',
          content: deal?.createdAt,
        },
      ]}
    >
      <DynamicPropertyProfilePage deal={deal} comparables={comparables} />
    </Page>
  );
};

interface StaticPropsResponse {
  deal: Deal;
  comparables?: Deal[];
}

interface StaticPropsParams extends ParsedUrlQuery {
  slug: string;
}

type DealPageGetStaticProps = GetStaticProps<
  StaticPropsResponse,
  StaticPropsParams
>;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export const getStaticProps: DealPageGetStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);
  const comparableDeals: Deal[] = [];

  const slug = params?.path ? params.path[params.path.length - 1] : '';

  const getComparablesDeals = async (
    first: number = 10,
    after: string = ''
  ) => {
    const { data: comparableData } = await client.query({
      query: DealComparablesDocument,
      variables: {
        slug,
        first,
        after,
        page: 1,
        limit: 4,
      },
    });

    if (!comparableData) return;

    const comparables = comparableData?.deal?.comparables;
    const hasNextPage = comparables?.pageInfo?.hasNextPage;
    const endCursor = comparables?.pageInfo?.endCursor;
    const deals = comparables?.nodes;

    if (deals) comparableDeals.push(...(deals as Deal[]));
    if (hasNextPage) {
      const nextFirst = first + 5;
      await getComparablesDeals(nextFirst, endCursor as string);
    }
  };

  const query = await client.query<DealGetQuery>({
    query: DealGetDocument,
    variables: {
      slug,
    },
  });

  const data = query?.data;
  const { deal } = data;

  if (!deal) {
    return {
      notFound: true,
    };
  }

  await getComparablesDeals();
  if (params?.path?.[2] !== deal?.slug) {
    return {
      redirect: {
        destination: `/property/${params?.path?.[0]}/${params?.path?.[1]}/${deal?.slug}/`,
        permanent: true,
        satusCode: 301,
      },
    };
  }

  return {
    props: {
      deal,
      comparables: comparableDeals,
    },
    revalidate: 60,
  };
};

export default PropertyPage;
