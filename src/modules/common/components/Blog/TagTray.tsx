import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import type { Tag } from '@/__generated__/types.d';

const TagTray: React.FC<{ tags: Tag[] }> = ({ tags }) => {
  return (
    <>
      <Typography variant="h5" mt={4}>
        Categories
      </Typography>

      <Grid container spacing={2} mt={1} p={1} gap={2}>
        {tags.map((tag, index) => (
          <Link key={index} href={`/category/${tag.slug}/`} passHref>
            <Button variant="contained" size="large">
              {tag.name}
            </Button>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default TagTray;
