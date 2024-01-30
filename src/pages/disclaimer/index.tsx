import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useEffect } from 'react';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
`;

const DisclaimerPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const rest = {
    name: 'termly-embed',
  };

  return (
    <Page title="Disclaimer | Traded" canonical={`${WEBSITE_URL}/disclaimer/`}>
      <MainContainer>
        <Box width={1140}>
          <Box
            component="div"
            data-id="9ac64c60-48c0-4060-8c66-2fcf667dcda5"
            data-type="iframe"
            {...rest}
          />
        </Box>
      </MainContainer>
    </Page>
  );
};

export default DisclaimerPage;
