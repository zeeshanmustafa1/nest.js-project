import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useEffect } from 'react';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

const ContractPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #f8f8f8;
  `;

  const rest = {
    name: 'termly-embed',
  };

  return (
    <Page
      title="Acceptable Use | Traded"
      canonical={`${WEBSITE_URL}/acceptable-use-policy/`}
    >
      <MainContainer>
        <Box width={1140}>
          <Box
            component="div"
            data-id="c8258242-706a-4080-a4e4-bfd644ca57b4"
            data-type="iframe"
            {...rest}
          />
        </Box>
      </MainContainer>
    </Page>
  );
};

export default ContractPage;
