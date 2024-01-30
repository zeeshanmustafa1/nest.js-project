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

const PrivacyPage: React.FC = () => {
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
    <Page
      title="Privacy Policy | Traded"
      canonical={`${WEBSITE_URL}/privacy-policy/`}
    >
      <MainContainer>
        <Box width={1140}>
          <Box
            component="div"
            data-id="48b864ca-a9bc-4c85-bb1b-103a9bd9e596"
            data-type="iframe"
            {...rest}
          />
        </Box>
      </MainContainer>
    </Page>
  );
};

export default PrivacyPage;
