import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
`;

const CookiePage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const rest = {
    name: 'termly-embed',
  };

  return (
    <Page
      title="Cookie Policy | Traded"
      canonical={`${WEBSITE_URL}/cookie-policy/`}
    >
      <MainContainer>
        <Box width={1140}>
          <Box
            component="div"
            data-id="e2f5632e-7e49-462c-9d72-28dc5103640d"
            data-type="iframe"
            {...rest}
          />
        </Box>
      </MainContainer>
    </Page>
  );
};

export default CookiePage;
