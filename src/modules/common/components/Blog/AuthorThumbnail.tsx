import { Avatar, Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface AuthorThumbnailProps {
  imageSrc: string;
  authorName: string;
}

const AuthorThumbnail: React.FC<AuthorThumbnailProps> = ({
  imageSrc,
  authorName,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar alt={authorName} src={imageSrc} sx={{ width: 56, height: 56 }} />
      <Link href="/author" color="inherit">
        <>
          <Typography ml={1} variant="body" sx={{ cursor: 'pointer' }} noWrap>
            by {authorName}
          </Typography>

          {/* <Typography ml={2} variant="body" component="span" sx={{ 'cursor': 'pointer' }}>
            Read More
          </Typography>
          <Box ml={1} pt={1} sx={{ 'cursor': 'pointer' }}>
            <ArrowForwardIosIcon />
          </Box> */}
        </>
      </Link>
    </Box>
  );
};

export default AuthorThumbnail;
