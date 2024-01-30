import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { Newsletter } from '@/modules/homepage';

import { Seperator, Testimonial } from '../about-us';

interface FeedInfoProps {
  img: string;
  followers: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  pinterest: string;
  facebook: string;
}

const FeedInfoBlock: React.FC<FeedInfoProps> = ({
  img,
  followers,
  instagram,
  linkedin,
  twitter,
  pinterest,
  facebook,
}) => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: 2,
        display: 'flex',
        flexDirection: { sm: 'column', md: 'row' },
        alignItems: 'center',
        gap: 2,
        marginTop: 2,
        padding: { sm: 2, md: 2 },
      }}
    >
      {/* Box 1: Image */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={img} alt="Feed Icon" />
      </Box>

      {/* Box 2: Text and social links */}
      <Box sx={{ textAlign: 'center', flex: 1, justifyContent: 'center' }}>
        <Typography variant="h3" sx={{ fontSize: '2rem' }}>
          {followers}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <IconButton sx={{ color: 'black' }}>
            <Link href={instagram} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <InstagramIcon />
              </a>
            </Link>
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <Link href={linkedin} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <LinkedInIcon />
              </a>
            </Link>
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <Link href={twitter} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <TwitterIcon />
              </a>
            </Link>
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <Link href={pinterest} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <PinterestIcon />
              </a>
            </Link>
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <Link href={facebook} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <FacebookIcon />
              </a>
            </Link>
          </IconButton>
        </Box>
      </Box>

      {/* Box 3: Button with checkmark icon */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Link href={instagram} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              sx={{ borderRadius: 2, color: 'black' }}
              size="large"
              endIcon={<CheckCircleIcon />}
            >
              Check it out
            </Button>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

interface AdInfoElementProps {
  title: string;
  description: string;
  audience: string[];
  placements: string[];
  templates: string[];
  img: string;
}

const AdInfoElement: React.FC<AdInfoElementProps> = ({
  title,
  description,
  audience,
  placements,
  templates,
  img,
}) => {
  return (
    <Box
      sx={{
        padding: '1rem 4rem',
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginTop: 2,
          padding: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '2rem' }} marginTop="">
          {title}
        </Typography>
        <Typography variant="bodyLarge">{description}</Typography>

        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 2,
            display: 'flex',
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2,
            marginTop: 2,
          }}
        >
          <Box>
            <Typography variant="h4">Audience Breakdown</Typography>
            <List>
              {audience.map((item, index) => (
                <ListItem key={index}>
                  <Typography variant="bodyLarge">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h4">Placements</Typography>
            <List>
              {placements.map((item, index) => (
                <ListItem key={index}>
                  <Typography variant="bodyLarge">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h4">Templates Offered</Typography>
            <List>
              {templates.map((item, index) => (
                <ListItem key={index}>
                  <Typography variant="bodyLarge">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <img src={img} width="50%" height="auto" />
        </Box>
      </Box>
    </Box>
  );
};

const MediaKitPage: React.FC = () => {
  return (
    <Page title="Media Kit | Traded" canonical={`${WEBSITE_URL}/mediakit/`}>
      <Box
        display="flex"
        flexDirection="column"
        width="100vw"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f8f8f8"
        padding="50px 50px"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          paddingX={['20px', '20px', '100px']}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="center"
            alignItems="center"
            marginBottom="50px"
            textAlign="center"
          >
            <Typography variant="h3" color="primary" marginBottom="10px">
              2023
            </Typography>
            <Typography variant="h1" marginBottom="30px">
              Media Kit
            </Typography>
            <Typography variant="h3" marginBottom="30px">
              Traded’s community consists of the top deal-makers, brokers,
              investors. developers, CEOs, founders, entrepreneurs and
              celebrities— all in CRE.
            </Typography>
            <Link href="/media-kit">
              <Button variant="contained" color="primary" size="large">
                View Our 2023 Media Kit
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* <Seperator></Seperator> */}
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        padding="40px 50px"
        sx={{
          backgroundColor: '#404146',
          padding: { sm: '2rem 5rem', md: '2rem 10rem' },
        }}
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
            textAlign="center"
            color={'white'}
          >
            TESTIMONIALS
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
          <Box display="flex" justifyContent="center" marginTop="30px">
            <Link href="/testimonials" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" size="large">
                Our Testimonials Page
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* <Seperator></Seperator> */}
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: '#DEDAEF',
          padding: { sm: '2rem 10rem', md: '2rem 20rem' },
        }}
      >
        <Typography variant="h4" color="#6758A3">
          WHO IS FOLLOWING TRADED?
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '4rem' }} marginTop="1rem">
          500k Followers
        </Typography>
        <Typography
          variant="bodyExtraLarge"
          sx={{ fontSize: '1.5rem' }}
          marginTop="20px"
        >
          We have over 500,000 loyal & engaged followers following our feeds,
          inclusive of landlords, investors, professionals, brokers, and their
          friends & family!
        </Typography>
        <Typography
          variant="bodyExtraLarge"
          sx={{ fontSize: '2rem', lineHeight: 1 }}
          marginY="20px"
        >
          Brokers are notoriously hard to reach. We have their attention. If you
          are in CRE in a market that we cover, and you are semi active, chances
          are you follow us and engage.
        </Typography>

        <FeedInfoBlock
          img={'https://traded.co/wp-content/uploads/2022/04/ny-logo.png'}
          followers="100k"
          instagram="https://www.instagram.com/tradedny/?hl=en"
          linkedin="https://www.linkedin.com/company/tradednewyork/"
          twitter="https://twitter.com/TradedNY"
          pinterest="https://www.pinterest.com/tradedny/"
          facebook="https://www.facebook.com/TradedNY/"
        ></FeedInfoBlock>
        <FeedInfoBlock
          img={'https://traded.co/wp-content/uploads/2022/04/miami-logo.png'}
          followers="50k"
          instagram="https://www.instagram.com/tradedmiami/?hl=en"
          linkedin="https://www.linkedin.com/company/tradedmiami/"
          twitter="https://twitter.com/Tradedmiami"
          pinterest="https://www.pinterest.com/tradedMiami/"
          facebook="https://www.facebook.com/TradedMiami/"
        ></FeedInfoBlock>

        <FeedInfoBlock
          img={'https://traded.co/wp-content/uploads/2022/04/la-logo.png'}
          followers="50k"
          instagram="https://www.instagram.com/tradedla/?hl=en"
          linkedin="https://www.linkedin.com/company/traded-los-angeles/"
          twitter="https://twitter.com/tradedla"
          pinterest="https://www.pinterest.com/tradedny/"
          facebook="https://www.facebook.com/TradedLA/"
        ></FeedInfoBlock>
        <FeedInfoBlock
          img={'https://traded.co/wp-content/uploads/2022/04/nj-logo.png'}
          followers="30k"
          instagram="https://www.instagram.com/tradednewjersey/?hl=en"
          linkedin="https://www.linkedin.com/company/traded-new-jersey"
          twitter="https://twitter.com/TradedNewJersey"
          pinterest="https://www.pinterest.com/tradedny/"
          facebook="https://www.facebook.com/tradednewjersey"
        ></FeedInfoBlock>
        <FeedInfoBlock
          img={'https://traded.co/wp-content/uploads/2022/04/bos-logo.png'}
          followers="25k"
          instagram="https://www.instagram.com/tradedboston/?hl=en"
          linkedin="https://www.linkedin.com/company/traded-boston/"
          twitter="https://twitter.com/tradedboston"
          pinterest="https://www.pinterest.com/tradedny/"
          facebook="https://www.facebook.com/tradedboston/"
        ></FeedInfoBlock>
        <FeedInfoBlock
          img={'https://traded.co/wp-content/uploads/2022/04/chi-logo.png'}
          followers="20k"
          instagram="https://www.instagram.com/tradedchicago/?hl=en"
          linkedin="https://www.linkedin.com/company/tradedillinois/"
          twitter="https://twitter.com/Tradedchicago"
          pinterest="https://www.pinterest.com/tradedny/"
          facebook="https://www.facebook.com/TradedChicago/"
        ></FeedInfoBlock>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: '#CFC9E5',
          padding: { sm: '4rem 10rem', md: '4rem 20rem' },
        }}
      >
        <Typography variant="h4" color="##6758A3">
          AUDIENCE BREAKDOWN
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '4rem' }} marginTop="1rem">
          35,000,000+ Impressions
        </Typography>
        <Typography
          variant="bodyExtraLarge"
          sx={{ fontSize: '1.5rem' }}
          marginTop="20px"
        >
          We receive over 35,000,000 impressions in aggregate monthly across all
          our social outlets & our website.
          <strong>
            We are the largest CRE community on social media, by far.{' '}
          </strong>
        </Typography>
        <Seperator></Seperator>
        <Typography variant="h4" marginTop="1rem">
          Professional Breakdown
        </Typography>
        <List>
          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              75% Real Estate Professionals
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              75% VP / AVP / EVP / SVP
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              65% Investment Sales & leasing
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              25% Lenders & Finance Professionals
            </Typography>
          </ListItem>
        </List>
        <Seperator></Seperator>
        <Typography variant="h4" marginTop="1rem">
          Demographic Breakdown
        </Typography>
        <List>
          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              60% 25 to 44 years old
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              40% 44 to 65 years old
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              75% C-Suite or Mangement level
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="bodyLarge" marginTop="1rem">
              85% Living in the US
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: '#ededed',
          padding: { sm: '2rem 10rem', md: '2rem 20rem' },
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '2rem' }} color="#6758A3">
          ENTERPRISE ADVERTISING OPTIONS
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: '4rem', lineHeight: 1 }}
          marginTop="1rem"
        >
          Stories, Banners, Sponsporships.
        </Typography>
        <Typography
          variant="bodyExtraLarge"
          sx={{ fontSize: '1.5rem' }}
          marginTop="20px"
        >
          We have three ways we are able to get your word out via traded media
          assets. Social stories, banners on our websites, and newsletter
          sponsorships. If you wish to feature your transaction please visit
          Traded.co/submit.
        </Typography>
        <Seperator></Seperator>
        <AdInfoElement
          title={'Social Stories'}
          description={
            'Advertise in any of our social media stories on Instagram. Target specific markets - Want to get the word out in NYC? Post on @TradedNY!'
          }
          audience={[
            '35M monthly impressions',
            '50k followers',
            '75% CRE Professionals',
          ]}
          placements={['Instagram']}
          templates={[
            'Company Spotlight',
            'Property Listings',
            'Building Showcases',
            'Client Testimonials',
            'Give Aways',
          ]}
          img={'https://traded.co/wp-content/uploads/2022/04/image-6-1.png'}
        />
        <AdInfoElement
          title={'Web Banners'}
          description={
            'Advertise on our website. Banners & Programmatic Placements. Exmaple - You can have your banner show up on all the multifamily loans that happened in California!                    '
          }
          audience={[
            '5 Million impressions',
            '75K Monthly Uniques',
            '95% Real Estate Professionals',
            'Brokers, Investors, Developers, and more.',
          ]}
          placements={[
            'Agent Profiles',
            'Agency Profiles',
            'Transactions',
            'Leaderboards',
            'Rankings',
          ]}
          templates={['Banner Ads', 'Section Sponsors']}
          img={'https://traded.co/wp-content/uploads/2022/04/image-10.png'}
        />
        <AdInfoElement
          title={'Newsletter Sponsor'}
          description={
            'Advertise in any of our regional news letters - or all of them!'
          }
          audience={['New York', 'Los Angeles', 'Miami', 'All Feeds']}
          placements={[
            'Agent Profiles',
            'Agency Profiles',
            'Transactions',
            'Leaderboards',
            'Rankings',
          ]}
          templates={[
            'Banner Ads',
            'Sponsored Properties',
            'Event Sponsorships',
            'Market Outlooks',
          ]}
          img={'https://traded.co/wp-content/uploads/2022/04/image-11.png'}
        />
      </Box>
      <Newsletter></Newsletter>
    </Page>
  );
};

export default MediaKitPage;
