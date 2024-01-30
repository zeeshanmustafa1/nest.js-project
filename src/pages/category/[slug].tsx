import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Hidden,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import type { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef, useState } from 'react';

import type {
  Blog,
  GetBlogsQuery,
  GetTagsQuery,
  Tag,
} from '@/__generated__/types.d';
import { GetBlogsDocument, GetTagsDocument } from '@/__generated__/types.d';
import Page from '@/layouts/Page';
import { slugToTitle } from '@/lib/regex';
import BlogPreview from '@/modules/common/components/Blog/BlogPreview';
import BlogThumbnailPreview from '@/modules/common/components/Blog/BlogThumbnailPreview';
import TagTray from '@/modules/common/components/Blog/TagTray';
import { initializeApollo } from '@/modules/core/use-apollo';

const GrayBox = styled(Box)({
  backgroundColor: '#F5F5F5',
  padding: '30px',
  textAlign: 'center',
  marginBottom: '20px',
  height: '205px',
});

const SearchBlogs = async (searchTerm: string) => {
  const res = await fetch(`/api/searchBlogs/${searchTerm}/`);
  const { data } = await res.json();
  return data;
};

const BlogPage: React.FC<{
  initialBlogs: Blog[];
  tags: Tag[];
  title: string;
}> = ({ initialBlogs, tags, title }) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchTimeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (searchTimeoutId.current) {
      clearTimeout(searchTimeoutId.current); // Clear the previous timeout
    }

    const loadBlogs = async () => {
      if (searchTerm) {
        const data = await SearchBlogs(searchTerm);
        setBlogs(data.blogs);
      } else {
        setBlogs(initialBlogs);
      }
    };

    searchTimeoutId.current = setTimeout(loadBlogs, 500); // 500ms delay
  }, [searchTerm]);

  if (!initialBlogs || !tags) {
    return <h1>Loading...</h1>; // or replace with your loading component
  }

  return (
    <Page title="Blog | Traded" canonical={`/blog/`}>
      <GrayBox>
        <Typography variant="h1" p={2} fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="h2" fontSize={[24, 24, 24, 28]} fontWeight={400}>
          Breaking deals and product updates, straight from the Traded team.
        </Typography>
      </GrayBox>

      <Box display="flex" flexWrap="wrap" mt={6}>
        <Box flexGrow={1} width={{ xs: '100%', sm: '60%' }}>
          <Box maxWidth={800} ml={'auto'}>
            {blogs && blogs.length > 0 ? (
              blogs.map((blog, index) => {
                return <BlogPreview key={index} blog={blog} />;
              })
            ) : (
              <Typography variant="body">No blogs found.</Typography>
            )}
          </Box>
        </Box>
        <Hidden smDown>
          <Box flexGrow={1} width={{ xs: '100%', sm: '40%' }} p={2}>
            <Box display="flex" flexDirection="column">
              <TextField
                variant="outlined"
                size="medium"
                placeholder="Search"
                sx={{ maxWidth: 500 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              {initialBlogs && initialBlogs.length > 2 && (
                <>
                  <Typography variant="h5" mt={4}>
                    Recent Posts
                  </Typography>
                  {initialBlogs.map((blog, index) => {
                    return <BlogThumbnailPreview key={index} blog={blog} />;
                  })}
                </>
              )}

              <TagTray tags={tags} />
            </Box>
          </Box>
        </Hidden>
      </Box>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();

  const { data: tagData } = await client.query<GetTagsQuery>({
    query: GetTagsDocument,
    variables: {
      page: 1,
      limit: 10,
    },
  });

  const tags = tagData.tags || [];

  if (!tags) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = tags.map((tag) => {
    return `/category/${tag?.slug}/`;
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);

  const { data } = await client.query<GetBlogsQuery>({
    query: GetBlogsDocument,
    variables: {
      page: 1,
      limit: 5,
      // tagSlugs: [params?.slug]
      tagSlugs: [params?.slug],
    },
  });

  const blogs = data.blogs || [];

  if (!blogs) {
    return {
      notFound: true,
    };
  }

  const { data: tagData } = await client.query<GetTagsQuery>({
    query: GetTagsDocument,
    variables: {
      page: 1,
      limit: 10,
    },
  });

  const title = slugToTitle(params?.slug as string, 'Blog');

  const tags = tagData.tags || [];

  return {
    props: {
      initialBlogs: blogs,
      tags,
      title,
    },
    revalidate: 60,
  };
};

export default BlogPage;
