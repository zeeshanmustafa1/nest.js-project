import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import type { Blog } from '@/__generated__/types.d';
import { MediaFrame } from '@/modules/common/components/MediaFrame';

const BlogPreview: React.FC<{ blog: Blog }> = ({ blog }) => {
  const date = new Date(blog.createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      maxWidth={500}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        // margin: '0 auto',
        position: 'relative',
        right: 0,
        mb: 4,
      }}
    >
      <Link href={`/blog/${blog.slug}/`} passHref>
        <a>
          <MediaFrame
            value={blog.image || '/assets/Dummy/600x600.png'}
            alt="Blog Image"
            width={isMobile ? 300 : 500}
            height={isMobile ? 300 : 500}
            style={{ borderRadius: '2%' }}
          />
        </a>
      </Link>
      <Typography variant="body" mt={2}>
        {formattedDate}
      </Typography>
      <Typography
        variant="h3"
        whiteSpace={'nowrap'}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        style={{ width: '100%', lineHeight: 1.3 }}
        mt={1}
      >
        {blog.title}
      </Typography>
      <Typography mt={1}>{blog.description}</Typography>

      <Link href={`/blog/${blog.slug}/`} passHref>
        <a
          style={{
            color: '#4dd78a',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none', // to remove default underline style of <a>
          }}
        >
          <Typography component="span" fontSize={[16, 18, 20]} fontWeight={500}>
            Read More
          </Typography>
          <Box ml={1} pt={1}>
            <ArrowForwardIosIcon />
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default BlogPreview;
