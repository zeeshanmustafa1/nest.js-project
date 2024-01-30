import { gql } from '@apollo/client';
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { parseInt } from 'lodash';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type {
  LeaderBoardGetQuery,
  TestimonialConnection,
} from '@/__generated__/types.d';
import { LeaderBoardGetDocument } from '@/__generated__/types.d';
import Page from '@/layouts/Page';
import { RenderIf } from '@/modules/common/components';
import { initializeApollo } from '@/modules/core/use-apollo';
import { BrokerRows, Newsletter } from '@/modules/homepage';
import TestimonialBox from '@/modules/profile/components/Testimonials';
import { getMiniLeaderBoardData } from '@/utils/data/leaderboard';

export const getServerSideProps: GetServerSideProps<{
  testimonials: TestimonialConnection;
  brokerRows: any[];
}> = async (ctx) => {
  const { res, query } = ctx;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=10'
  );

  const client = initializeApollo(ctx);

  const { data } = await client.query({
    query: gql`
      query Testimonials($page: Int, $limit: Int, $state: String) {
        testimonials(page: $page, limit: $limit, state: $state) {
          totalCount
          edges {
            node {
              id
              content
              clientImage
              slug
              clientCompany
              title
            }
          }
        }
      }
    `,
    variables: {
      limit: 8,
      page: parseInt(query?.page as string, 10) || 1,
      state: query?.state as string,
    },
  });

  const testimonials: TestimonialConnection = data?.testimonials;

  const {
    data: { leaderBoardResolver },
  } = await client.query<LeaderBoardGetQuery>({
    query: LeaderBoardGetDocument,
  });

  const brokerRows = getMiniLeaderBoardData(leaderBoardResolver);

  return {
    props: {
      brokerRows,
      testimonials,
    },
  };
};

const Testimonials: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ testimonials, brokerRows }) => {
  const [width, setWidth] = useState(6);
  const router = useRouter();
  // const [file, setFile] = useState<File>();
  // const [fileUpload, setFileUpload] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [titleAndCompany, setTitleAndCompany] = useState('');
  const [testimonialState, setState] = useState('New York');
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!firstName || !email || !content) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      await fetch('/api/createTestimonial', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          content,
          titleAndCompany,
          state: testimonialState,
        }),
      });
    }
  };

  const {
    query: { page, state },
  } = router;

  useEffect(() => {
    if (window.innerWidth < 900) {
      setWidth(12);
    }
  }, []);
  return (
    <Page title="Testimonials | Traded">
      <Box width="100vw" display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box maxWidth="1140px" paddingY="20px">
            <Box
              display={['none', 'none', 'flex']}
              position="absolute"
              right={310}
              top={130}
              zIndex={-1}
            >
              <Image
                src="/assets/Shapes/AgentAster.svg"
                alt="Dots and stars shapes"
                width={50}
                height={50}
              />
            </Box>
            <Box
              display={['none', 'none', 'flex']}
              position="absolute"
              left={300}
              top={205}
              zIndex={-1}
            >
              <Image
                src="/assets/Shapes/Star.svg"
                alt="Star Shape"
                width={50}
                height={50}
              />
            </Box>
            <Box
              position="absolute"
              left="50%"
              top="100px"
              marginLeft={-10}
              zIndex={-1}
            >
              <Image
                src="https://traded.co/wp-content/uploads/2022/04/Dots-1-1.png"
                alt="Star Shape"
                width={140}
                height={150}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              marginTop={20}
            >
              <Typography variant="h1" marginBottom={2}>
                Traded Testimonials
              </Typography>
              <Typography
                textAlign="center"
                fontSize={[12, 18, 18, 18]}
                lineHeight={['20px', '30px', '30px', '30px']}
                fontWeight={500}
                component="p"
                aria-label="Activity"
                mb={1}
                width="60%"
              >
                Traded’s community consists of the top deal-makers, CEOs,
                founders, entrepreneurs and celebrities— all with an interest in
                CRE.
              </Typography>
            </Box>
          </Box>
          <BrokerRows brokerRows={brokerRows} />
          <Box
            display="flex"
            flexDirection={['column', 'column', 'row']}
            paddingY="20px"
          >
            <Box
              width="100%"
              padding="20px"
              borderRight={['none', 'none', '1px solid']}
            >
              <Box
                display="flex"
                flexDirection="row"
                paddingY="20px"
                borderBottom="2px solid #202124"
                paddingX="20px"
                width="100%"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography fontSize={[16, 16, 22]} fontWeight={500}>
                    View Testimonials from:
                  </Typography>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      id="Location"
                      value={state}
                      onChange={(e) =>
                        router.push(
                          {
                            pathname: 'testimonials',
                            query: { state: e.target.value },
                          },
                          'testimonials'
                        )
                      }
                      placeholder="National"
                    >
                      <MenuItem value="">National</MenuItem>
                      <MenuItem value="New York">New York</MenuItem>
                      <MenuItem value="Florida">Florida</MenuItem>
                      <MenuItem value="Massachusetts">Massachusetts</MenuItem>
                      <MenuItem value="New Jersey">New Jersey</MenuItem>
                      <MenuItem value="California">California</MenuItem>
                      {/* <MenuItem value="Chicago">Chicago</MenuItem> */}
                      {/* <MenuItem value="Texas">Texas</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
                <Typography fontSize={[16, 16, 22]} fontWeight={500}>
                  Showing {testimonials?.edges?.length} of{' '}
                  {testimonials?.totalCount}
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {testimonials?.edges?.map((testimonial, index) => (
                  <Grid
                    key={index}
                    item
                    xs={width}
                    display="flex"
                    justifyContent="center"
                  >
                    <TestimonialBox testimonial={testimonial} />
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="center" my={3}>
                <Pagination
                  count={Math.ceil((testimonials?.totalCount as number) / 10)}
                  page={page ? parseInt(page as string, 10) : 1}
                  onChange={(_, p) =>
                    router.push(
                      {
                        pathname: 'testimonials',
                        query: { page: p },
                      },
                      'testimonials'
                    )
                  }
                />
              </Box>
            </Box>
            {/* This is hot fix to prevent spam until form is resolved */}
            <RenderIf condition={false}>
              <Box display="flex" flexDirection="column" padding="20px">
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>Name*</strong>
                  </Typography>
                  <FormControl>
                    <InputLabel required>First Name</InputLabel>
                    <Input
                      required
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel>Last Name</InputLabel>
                    <Input
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                  <Typography fontSize={12}>Whats your name?</Typography>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>Title, Company</strong>
                  </Typography>
                  <FormControl>
                    <InputLabel>Title</InputLabel>
                    <Input
                      placeholder="Example: VP,Cushman & Wakefield"
                      id="title"
                      onChange={(e) => setTitleAndCompany(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>Email*</strong>
                  </Typography>
                  <FormControl>
                    <InputLabel required>Email</InputLabel>
                    <Input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>State: Where you are based?</strong>
                  </Typography>
                  <FormControl>
                    <Select
                      id="state"
                      label="State"
                      defaultValue="New York"
                      onChange={(e) => setState(e.target.value)}
                    >
                      <MenuItem value="New York">New York</MenuItem>
                      <MenuItem value="California">California</MenuItem>
                      <MenuItem value="Florida">Florida</MenuItem>
                      <MenuItem value="New Jersey">New Jersey</MenuItem>
                      <MenuItem value="Chicago">Chicago</MenuItem>
                      <MenuItem value="Massachusetts">Massachusetts</MenuItem>
                      <MenuItem value="Texas">Texas</MenuItem>
                      <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>
                      Do you want us to use your existing headshot?
                    </strong>
                  </Typography>
                  <RadioGroup defaultValue="yes" name="radio-buttons-group">
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No, I would like to choose a new one"
                    />
                  </RadioGroup>
                </Box>
                {/* {fileUpload && (
                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>Upload new headshot</strong>
                  </Typography>
                  <FileUploader
                    handleChange={handleUpload}
                    name="file"
                    types={fileTypes}
                    multiple={false}
                  />
                </Box>
              )} */}

                <Box display="flex" flexDirection="column" gap="10px">
                  <Typography fontSize={18}>
                    <strong>Testimonial*</strong>
                  </Typography>
                  <TextareaAutosize
                    minRows={4}
                    required
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <Typography fontSize={12}>
                    We will be adding this to our website.
                  </Typography>
                </Box>
                {error === true && (
                  <Alert sx={{ marginBottom: '10px' }} severity="error">
                    Fields with `*` Cannot be empty
                  </Alert>
                )}
                <Button
                  variant="neon-green"
                  size="medium"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </Box>
            </RenderIf>
          </Box>
        </Box>
      </Box>
      <Newsletter />
    </Page>
  );
};

export default Testimonials;
