import { Box, Hidden, Typography } from '@mui/material';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import type {
  Blog,
  GetBlogsPathsQuery,
  GetBlogsQuery,
} from '@/__generated__/types.d';
import {
  GetBlogDocument,
  GetBlogsDocument,
  GetBlogsPathsDocument,
} from '@/__generated__/types.d';
import Page from '@/layouts/Page';
import AgentCard from '@/modules/common/components/Blog/AgentCard';
import AuthorThumbnail from '@/modules/common/components/Blog/AuthorThumbnail';
import BlogPreview from '@/modules/common/components/Blog/BlogPreview';
import TagTray from '@/modules/common/components/Blog/TagTray';
import { MediaFrame } from '@/modules/common/components/MediaFrame';
import { initializeApollo } from '@/modules/core/use-apollo';

export const PLACEHOLDER_DATE = '2023-05-19T12:34:56Z';

const BlogPage: React.FC<{ blog: Blog; blogs: Blog[] }> = ({ blog, blogs }) => {
  if (!blog) {
    return <h1>Loading...</h1>; // or replace with your loading component
  }

  const tags = blog.tags || [];

  const createdDate = new Date(blog.createdAt);
  const createdFormattedDate = createdDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const updatedDate = new Date(blog.updatedAt);
  const updatedFormattedDate = updatedDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Page title="Blog | Traded" canonical={`/blog/${blog?.slug}/`}>
      <Box display="flex" flexDirection="column" mt={4} pb={4} px={4}>
        <Box
          display="flex"
          flexDirection="column"
          // alignItems="center"
          textAlign="left"
          width={{ xs: '100%', md: 900 }}
          mx="auto"
        >
          <Box display="flex" mt={1}>
            <Typography variant="h1" align="left" mb={2}>
              {blog.title}
            </Typography>
          </Box>
          <Box
            maxWidth={900}
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignContent={{ xs: 'center', md: 'flex-start' }}
            mx={{ xs: 'auto', md: '0' }}
          >
            <Box maxWidth={{ xs: '100%', md: 500 }}>
              <MediaFrame
                value={blog.image || '/assets/Dummy/600x600.png'}
                alt="Picture of the author"
                width={500}
                height={500}
                style={{
                  borderRadius: '1%',
                  minWidth: '500px',
                  minHeight: '500px',
                }}
              />
            </Box>
            {blog.profiles && blog.profiles.length > 0 && (
              <Box
                display="flex"
                alignItems="center"
                flexDirection={'column'}
                ml={2}
              >
                {blog.profiles.map((profile, index) => (
                  <>
                    <AgentCard key={index} agent={profile} />
                  </>
                ))}
              </Box>
            )}
          </Box>
          <Box mt={1} display="flex" alignItems="space-between">
            <Hidden smDown>
              <Typography variant="body">
                Published: {createdFormattedDate}
              </Typography>
            </Hidden>

            <Typography variant="body" ml={1}>
              Last Updated: {updatedFormattedDate}
            </Typography>
          </Box>
        </Box>
        <Box></Box>

        <Box
          display="flex"
          maxWidth={900}
          mx={'auto'}
          gap={2}
          flexDirection={{ xs: 'column', sm: 'column' }}
        >
          <Box flexGrow={1} width={{ xs: '100%', sm: '100%' }}>
            <Box
              maxWidth={900}
              fontSize={[16, 18, 20]}
              lineHeight={1.5}
              textAlign="left"
            >
              <Box
                maxWidth={900}
                fontSize={[16, 18, 20]}
                lineHeight={1.5}
                textAlign="left"
                dangerouslySetInnerHTML={{
                  __html: blog.htmlContent || '',
                }}
              />
            </Box>
          </Box>

          <Box flexGrow={1} width={{ xs: '100%', sm: '100%' }} px={1}>
            {/* <Grid item xs={12} md={4}> */}
            <Box display="flex" flexDirection="column">
              <AuthorThumbnail
                authorName={blog.author.title || 'Traded'}
                imageSrc={blog.author.image || 'assets/Dummy/150x150.png'}
              />
              <TagTray tags={tags} />
              {blogs && blogs.length > 2 && (
                <>
                  <Typography mt={4} pb={4} variant="h4">
                    Other Posts
                  </Typography>

                  {blogs.map((preview_blog, index) => {
                    if (preview_blog.slug !== blog.slug) {
                      return <BlogPreview key={index} blog={preview_blog} />;
                    }
                    return null;
                  })}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();

  const { data } = await client.query<GetBlogsPathsQuery>({
    query: GetBlogsPathsDocument,
    variables: {
      limit: 10,
    },
  });

  if (!data) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const blogs = data?.blogs || [];

  const paths = blogs.map((blog) => {
    const blogSlug = blog?.slug;

    return `/blog/${blogSlug}/`;
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);

  const { data } = await client.query({
    query: GetBlogDocument,
    variables: {
      slug: params?.slug,
    },
  });

  const blog = data.blog || {};

  if (!blog) {
    return {
      props: {},
    };
  }

  const blogsRes = await client.query<GetBlogsQuery>({
    query: GetBlogsDocument,
    variables: {
      page: 1,
      limit: 5,
      q: '{}',
    },
  });

  const blogsData = blogsRes.data || {};
  const blogs = blogsData.blogs || [];

  return {
    props: {
      blog,
      blogs,
    },
    revalidate: 60,
  };
};

export default BlogPage;
