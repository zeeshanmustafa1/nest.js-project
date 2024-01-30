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

const TermsPage: React.FC = () => {
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
      title="Terms and Conditions | Traded"
      canonical={`${WEBSITE_URL}/terms-and-conditions/`}
    >
      <MainContainer>
        <Box width={1140}>
          <Box
            component="div"
            data-id="d6e67bff-a25d-4df7-91ee-49c5012b6cc1"
            data-type="iframe"
            {...rest}
          />
          {/* <Box margin="0 auto" padding="50px 10px 100px">
          <Box padding="20px">
            <Box mb="44px">
              <Box mb="22px">
                <Typography
                  component="span"
                  variant="h3"
                  fontSize={26}
                  fontWeight={600}
                  fontFamily="Arial"
                >
                  TERMS AND CONDITIONS
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontFamily="Arial"
                  fontSize={14}
                  color="#595959"
                  fontWeight={600}
                >
                  Last updated December 09, 2022
                </Typography>
              </Box>
            </Box>

            <Box mb={7}>
              <TitleSection text="Table of Contents" id="#" />
              {tableOfContents?.map((content) => (
                <Box key={content?.text}>
                  <Link href={`#${content.url}`} passHref>
                    <StyledLink>
                      <Typography
                        fontFamily="Arial"
                        fontSize={14}
                        sx={{ wordBreak: 'break-word' }}
                      >
                        {content?.text}
                      </Typography>
                    </StyledLink>
                  </Link>
                </Box>
              ))}
            </Box>

            <Box>
              {tableOfContents?.map((content) => (
                <Box key={content?.text} mb={7}>
                  <TitleSection text={content.text} id={content.url} />
                  {content?.content}
                </Box>
              ))}
            </Box>
          </Box>
        </Box> */}
        </Box>
      </MainContainer>
    </Page>
  );
};

export default TermsPage;
