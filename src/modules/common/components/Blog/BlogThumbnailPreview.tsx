import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import type { Blog } from '@/__generated__/types.d';
import { MediaFrame } from '@/modules/common/components/MediaFrame';

export const PLACEHOLDER_DATE = '2023-05-19T12:34:56Z';

const BlogThumbnailPreview: React.FC<{
  blog: Blog;
}> = ({ blog }) => {
  return (
    <Box display="flex" mt={4} maxWidth={500}>
      <Box minWidth={200}>
        <Link href={`/blog/${blog.slug}/`} passHref>
          <a>
            <MediaFrame
              value={blog.image || '/assets/Dummy/200x200.png'}
              alt="Blog Image"
              width={200}
              height={200}
              style={{ borderRadius: '5%' }}
            />
          </a>
        </Link>
      </Box>
      <Box
        ml={2}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography variant="body">22 June 2022</Typography>
        <Typography variant="h4">{blog.title}</Typography>
        <Typography variant="body">{blog.description}</Typography>
        <Link href={`/blog/${blog.slug}`} passHref>
          <a
            style={{
              color: '#4dd78a',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none', // to remove default underline style of <a>
            }}
          >
            <Typography
              component="span"
              fontSize={[16, 18, 20]}
              fontWeight={500}
            >
              Read More
            </Typography>
            <Box ml={1} pt={1}>
              <ArrowForwardIosIcon />
            </Box>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogThumbnailPreview;
