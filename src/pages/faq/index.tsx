import { Box, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { WEBSITE_URL } from '@/constants';
import {
  advertisingAndCollaborations,
  agentProfileQuestions,
  generalQuestions,
  paymentQuestions,
  submissions,
} from '@/data';
import Page from '@/layouts/Page';
import TabTile from '@/modules/common/components/TabTile';
import { Newsletter } from '@/modules/homepage';

const FAQPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [adQuestions, setAdQuestions] = useState(
    advertisingAndCollaborations.data
  );
  const [agentQuestions, setAgentQuestions] = useState(
    agentProfileQuestions.data
  );
  const [genQuestions, setGenQuestions] = useState(generalQuestions.data);
  const [payQuestions, setPayQuestions] = useState(paymentQuestions.data);
  const [subQuestions, setSubQuestions] = useState(submissions.data);

  useEffect(() => {
    setGenQuestions(
      generalQuestions.data.filter((info) =>
        info.question.toLocaleLowerCase().includes(search)
      )
    );
    setAdQuestions(
      advertisingAndCollaborations.data.filter((info) =>
        info.question.toLocaleLowerCase().includes(search)
      )
    );
    setAgentQuestions(
      agentProfileQuestions.data.filter((info) =>
        info.question.toLocaleLowerCase().includes(search)
      )
    );
    setPayQuestions(
      paymentQuestions.data.filter((info) =>
        info.question.toLocaleLowerCase().includes(search)
      )
    );
    setSubQuestions(
      submissions.data.filter((info) =>
        info.question.toLocaleLowerCase().includes(search)
      )
    );
  }, [search]);

  return (
    <Page title="FAQ | Traded" canonical={`${WEBSITE_URL}/faq/`}>
      <Box
        display="flex"
        flexDirection="column"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          marginY={['20px', '20px', '60px']}
          width="100%"
          paddingX={['20px', '20px', '100px']}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1" marginBottom={['15px', '15px', '30px']}>
            Hi, how can we help?
          </Typography>
          <Typography
            variant="body"
            fontSize={[18, 18, 22]}
            fontWeight={[400, 400, 500]}
            marginBottom={['15px', '15px', '30px']}
          >
            Get answers on how to use Traded
          </Typography>
          <Box width="100%" paddingX="30%">
            <TextField
              id="outlined-basic"
              label="Search Questions"
              variant="outlined"
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
        </Box>
        {genQuestions.length !== 0 && (
          <Box marginBottom="50px" marginX={['10px', '10px', '20px']}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h2">General Questions</Typography>
              <Box>
                <Image
                  src="https://traded.co/wp-content/uploads/2022/04/icon_side_5.png"
                  alt="candles"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Box>
            <TabTile tileInfo={genQuestions} />
          </Box>
        )}
        {adQuestions.length !== 0 && (
          <Box marginBottom="50px" marginX={['10px', '10px', '20px']}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h2">Advertising & Collaborations</Typography>
              <Box>
                <Image
                  src="https://traded.co/wp-content/uploads/2022/04/icon_side5.png"
                  alt="candles"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Box>
            <TabTile tileInfo={adQuestions} />
          </Box>
        )}
        {subQuestions.length !== 0 && (
          <Box marginBottom="50px" marginX={['10px', '10px', '20px']}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h2">Submissions</Typography>
              <Box>
                <Image
                  src="https://traded.co/wp-content/uploads/2022/04/icon_side4.png"
                  alt="candles"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Box>
            <TabTile tileInfo={subQuestions} />
          </Box>
        )}
        {payQuestions.length !== 0 && (
          <Box marginBottom="50px" marginX={['10px', '10px', '20px']}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h2">Payment Questions</Typography>
              <Box>
                <Image
                  src="https://traded.co/wp-content/uploads/2022/04/icon_side_5.png"
                  alt="candles"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Box>
            <TabTile tileInfo={payQuestions} />
          </Box>
        )}
        {agentQuestions.length !== 0 && (
          <Box marginBottom="50px" marginX={['10px', '10px', '20px']}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h2">Agent Profiles</Typography>
              <Box>
                <Image
                  src="https://traded.co/wp-content/uploads/2022/04/icon_side4.png"
                  alt="candles"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Box>

            <TabTile tileInfo={agentQuestions} />
          </Box>
        )}
      </Box>
      <Newsletter />
    </Page>
  );
};

export default FAQPage;
