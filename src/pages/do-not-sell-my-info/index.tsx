import { Box } from '@mui/material';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

const DoNotSellMyInfoPage: React.FC = () => {
  return (
    <Page
      title="Do Not Sell My Info | Traded"
      canonical={`${WEBSITE_URL}/do-not-sell-my-info/`}
    >
      <Box
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginBottom="50px"
      >
        <iframe
          width="80%"
          height="100%"
          style={{ border: 'none' }}
          src="https://app.termly.io/notify/48b864ca-a9bc-4c85-bb1b-103a9bd9e596"
        />
      </Box>
    </Page>
  );
};

export default DoNotSellMyInfoPage;
