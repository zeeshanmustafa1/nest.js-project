import { Add } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

interface CounterProps {
  value: number;
  labelText: string;
}

const Counter: React.FC<CounterProps> = ({ value, labelText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginX="10px"
    >
      <CountUp
        end={value}
        duration={3}
        style={{ fontSize: 36, fontWeight: 700, fontFamily: 'Work Sans' }}
      />
      <Typography fontSize={16} fontWeight={500}>
        {labelText}
      </Typography>
    </Box>
  );
};

interface TestimonialProps {
  content: string;
  image: string;
  name: string;
  company: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  content,
  image,
  name,
  company,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={['100%', '100%', '100%']}
      height="fit-content"
      justifyContent="flex-start"
      paddingX={['10px', '10px', '20px']}
      sx={{ background: 'black' }}
      padding={['15px', '15px', '30px']}
    >
      <Box marginY={['15px', '15px', '30px']}>
        <Typography
          fontSize={[12, 12, 14]}
          fontWeight={[400, 400, 500]}
          color="white"
        >
          {content}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box height="70px" width="70px" marginX="10px">
          <Image
            src={image}
            alt="derek"
            height="100%"
            width="100%"
            style={{ borderRadius: '50%' }}
          />
        </Box>

        <Box>
          <Typography fontSize={[14, 14, 16]} color="white">
            by <strong>{name}</strong>
          </Typography>
          <Typography fontSize={[14, 14, 16]} color="white" fontStyle="italic">
            {company}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const Seperator: React.FC = () => {
  return (
    <Box width="100%" marginY="20px">
      <Divider style={{ borderColor: 'black' }} />
    </Box>
  );
};

const AboutUsPage: React.FC = () => {
  return (
    <Page title="About Us | Traded" canonical={`${WEBSITE_URL}/about-us/`}>
      <Box display="flex" paddingX="10%">
        <Box width="100%" display="flex" flexDirection="column">
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            marginY="30px"
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-start"
              marginBottom="10px"
            >
              <Typography
                fontSize={[30, 30, 40]}
                fontWeight={[700, 700, 900]}
                component="h1"
              >
                OUR STATS 🧨
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Counter value={9} labelText="Cities Covered" />
              <Counter value={900} labelText="Agencies on Platform" />
              <Counter value={100000} labelText="Dealmakers on Platform" />
              <Counter value={500000} labelText="Total Followers" />
              <Counter value={35000000} labelText="Monthly Impressions" />
            </Box>
          </Box>
          <Seperator />
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            marginY="30px"
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              marginBottom="10px"
            >
              <Typography
                fontSize={[30, 30, 40]}
                fontWeight={[700, 700, 900]}
                marginBottom="10px"
              >
                WHATS OUR DEAL? YOUR DEALS. 🧱
              </Typography>
              <Typography marginBottom="20px">
                <strong>Traded is the leading digital CRE platform</strong> for
                making and breaking deals in the commercial real estate
                community. A media outlet, digital database, and self-serve
                advertising tool for anyone in CRE who wants their deals to get
                noticed.
              </Typography>
              <Typography marginBottom="20px">
                Traded is where{' '}
                <strong>today’s news sparks tomorrow’s deals.</strong>
                Where the industry comes to celebrate, connect, and discover
                deals and talent. It’s where everyone in the industry – brokers,
                owners, and lenders – can publish their own deals,{' '}
                <strong>democratizing the industry intel 🤘.</strong>
              </Typography>
              <Typography marginBottom="20px">
                An innovative platform that features proprietary profiles, stat
                sheets, and leaderboards that show{' '}
                <strong>who’s who right now 🚀.</strong>
                Traded’s advertising tools make it easy to get noticed by the
                growing community of active users. With almost 1 million deals
                posted since 2015, traded is the industry’s{' '}
                <strong>most trusted source of deal data.</strong>
              </Typography>
            </Box>
            <Seperator />
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              marginY="30px"
            >
              <Box
                width="100%"
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                marginBottom="10px"
              >
                <Typography
                  fontSize={[30, 30, 40]}
                  fontWeight={[700, 700, 900]}
                  marginBottom="10px"
                >
                  FACT SHEET ✅
                </Typography>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      What&apos;s Traded?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography fontSize={[14, 14, 16]} marginBottom="20px">
                      <strong>A celebration engine 🎉</strong>
                    </Typography>
                    <Typography>
                      Traded is the leading digital platform making and breaking
                      deals in the commercial real estate community, posting
                      almost 1 million deals to date. Part media outlet, part
                      digital database, and part self service advertising tool.
                      Traded empowers everyone to make, and become, the next big
                      deal.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      How It Works:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography>
                      Traded covers transactions in CRE and all transactions are
                      created equal. We post any sale, lease or loan in CRE,
                      with the occasional celebrity residential deal because…why
                      not?! To get a deal posted, dealmakers submit via our
                      submission form. We also curate must-know deals from city
                      databases, traditional media. Then our CRE curators queue
                      the deal up for social, while the deal posts automatically
                      on the traded platform
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      Who We Cover:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography>
                      Traded posts deals all over the US with dedicated coverage
                      of NY, LA, Miami, New Jersey, Boston , Chicago and Texas.
                      Just like deals are created equal, we cover all
                      dealmakers–from lenders, investors and landlords to
                      brokers and tenants.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
            <Seperator />
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              marginY="30px"
            >
              <Box
                width="100%"
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                marginBottom="10px"
              >
                <Typography
                  fontSize={[30, 30, 40]}
                  fontWeight={[700, 700, 900]}
                  marginBottom="10px"
                >
                  HOW TO WORK WITH TRADED ⚙️
                </Typography>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      SUBMIT A DEAL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography>
                      If you’ve made a deal, share it! This makes it public
                      knowledge and puts you in the queue to get on traded. Here
                      is the link to submit.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      SUBSCRIBE, FOLLOW, ENGAGE
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography>
                      Join our newsletter to stay on top of the hottest deals on
                      traded, and you can follow us on Instagram, Facebook,
                      LinkedIn, Twitter, Reddit, Pinterest, Tumblr, and Discord.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      ENTERPRISE ADVERTISERS, ADVERTISE WITH US
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography marginBottom="20px">
                      Looking to create custom content on traded for yourself or
                      your firm that reaches every dealmaker in the industry?
                    </Typography>
                    <Typography>We can do that, too.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    border: '1px solid',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Add />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      fontSize={[18, 18, 24]}
                      fontWeight={[600, 600, 600]}
                    >
                      CLAIM YOUR PROFILE, COMING SOON ⏳
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
                    <Typography>
                      Control your public brand visible to millions of traded
                      users, plus boost your deals if you want them to be seen
                      by more. This is your “home base” in our traded database
                    </Typography>
                    <Typography>We can do that, too.</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
            <Seperator />
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              marginY="30px"
            >
              <Box
                width="100%"
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                marginBottom="10px"
              >
                <Typography
                  fontSize={[30, 30, 40]}
                  fontWeight={[700, 700, 900]}
                  marginBottom="10px"
                >
                  CORE VALUES ✊
                </Typography>
                <Typography fontSize={[14, 14, 18]}>
                  HONESTY & TRANSPARENCY
                </Typography>
                <Typography fontSize={[14, 14, 18]}>
                  EVERYONE DESERVES AN OPPORTUNITY
                </Typography>
                <Typography fontSize={[14, 14, 18]}>
                  IT’S OK TO SHARE YOUR SUCCESS
                </Typography>
                <Typography fontSize={[14, 14, 18]}>
                  CELEBRATE AND RECOGNIZE HARD WORK!
                </Typography>
                <Typography fontSize={[14, 14, 18]}>
                  KICK ASS & HAVE FUN
                </Typography>
              </Box>
            </Box>
            <Seperator />
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              marginY="30px"
            >
              <Box
                width="100%"
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                marginBottom="10px"
              >
                <Typography
                  fontSize={[30, 30, 40]}
                  fontWeight={[700, 700, 900]}
                  marginBottom="10px"
                >
                  TESTIMONIALS 😍
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6} display="flex" justifyContent="center">
                    <Testimonial
                      content={`"Traded has upended the formerly opaque NYC commercial real estate
          market by providing real time clarity on who the active players are
          and where transactions are getting done. As a boutique real estate
          investment sales brokerage firm that handles over 60 NYC property
          sales per year, Traded has given us exposure to market participants
          who may not have otherwise realized how active we are. But now they
          keep seeing us on their phones on Instagram over and over again every
          week. And New Yorker’s do not ignore results. For the exposure and
          reach you’ve provided, we are appreciative. Thank you Traded."`}
                      image="https://traded.co/wp-content/uploads/2020/11/Screen-Shot-2020-12-03-at-12.08.41-AM-150x150.png"
                      name="Derek Bestreich"
                      company="Founder & Principal, BRG Real Estate Group"
                    />
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent="center">
                    <Testimonial
                      content={`“Traded is the go-to source for the latest breaking sales. When our closings are posted, our phones and emails light up. Thank you for sharing with your incredibly powerful network.”`}
                      image="https://traded.co/wp-content/uploads/2020/08/Screen-Shot-2020-08-13-at-11.12.46-PM-150x150.png"
                      name="James Nelson"
                      company="Principal, Avison Young"
                    />
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent="center">
                    <Testimonial
                      content={`"Traded carries more weight in the NYC CRE industry than a mention in the NY Times."`}
                      image="https://traded.co/wp-content/uploads/2020/11/Screen-Shot-2020-11-30-at-2.00.18-PM-150x150.png"
                      name="Michael Rudder"
                      company="Founder &. President, Rudder Property Group"
                    />
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent="center">
                    <Testimonial
                      content={`“Traded has successfully tapped into one of the most active audiences in real estate social media. The opportunity to share our Team Preuss product flow in their platform has helped us spread our high volume activity across a broad spectrum of our trade markets.”`}
                      image="https://traded.co/wp-content/uploads/2020/08/Screen-Shot-2020-08-13-at-11.46.06-PM-150x150.png"
                      name="Stephen Preuss"
                      company="Vice Chairman, Cushman & Wakefield: Team Preuss"
                    />
                  </Grid>
                </Grid>
                <Typography fontSize={[16, 16, 18]} marginTop="40px">
                  To view 70 more testimonials from top CRE professionals across
                  the country visit{' '}
                  <Link href="/testimonials" style={{ textDecoration: 'none' }}>
                    Traded.co/Testimonials.
                  </Link>{' '}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default AboutUsPage;
