import { Box, Typography } from '@mui/material';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

const SubscribeForm: React.FC = () => {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: `<!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
      <style type="text/css">
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:100%;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <div id="mc_embed_signup" style="font-family: Work Sans,--apple-system">
          <form action="https://Traded.us6.list-manage.com/subscribe/post?u=25211336f1da37b62eda44a4f&amp;id=b565f3e4f2&amp;f_id=008d2ae3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
      <div class="mc-field-group">
        <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
      </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
      </div>
      <div class="mc-field-group">
        <label for="mce-FNAME">First Name </label>
        <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
        <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
      </div>
      <div class="mc-field-group">
        <label for="mce-LNAME">Last Name </label>
        <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
        <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
      </div>
      <div class="mc-field-group input-group">
          <strong>City Feeds </strong>
          <ul><li>
          <input type="checkbox" value="2" name="group[54746][2]" id="mce-group[54746]-54746-0" checked>
          <label for="mce-group[54746]-54746-0">New York | @tradedny</label>
      </li>
      <li>
          <input type="checkbox" value="1" name="group[54746][1]" id="mce-group[54746]-54746-1" checked>
          <label for="mce-group[54746]-54746-1">California | @tradedla</label>
      </li>
      <li>
          <input type="checkbox" value="4" name="group[54746][4]" id="mce-group[54746]-54746-2" checked>
          <label for="mce-group[54746]-54746-2">Florida | @tradedmiami</label>
      </li>
      <li>
          <input type="checkbox" value="8" name="group[54746][8]" id="mce-group[54746]-54746-3" checked>
          <label for="mce-group[54746]-54746-3">New Jersey | @tradednewjersey</label>
      </li>
      <li>
          <input type="checkbox" value="16" name="group[54746][16]" id="mce-group[54746]-54746-4" checked>
          <label for="mce-group[54746]-54746-4">Massachusetts | @tradedboston</label>
      </li>
      <li>
          <input type="checkbox" value="32" name="group[54746][32]" id="mce-group[54746]-54746-5" checked>
          <label for="mce-group[54746]-54746-5">Chicago | @tradedchicago</label>
      </li>
      <li>
          <input type="checkbox" value="64" name="group[54746][64]" id="mce-group[54746]-54746-6" checked>
          <label for="mce-group[54746]-54746-6">Texas | @tradedtexas</label>
      </li>
      </ul>
          <span id="mce-group[54746]-HELPERTEXT" class="helper_text"></span>
      </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_25211336f1da37b62eda44a4f_b565f3e4f2" tabindex="-1" value=""></div>
          <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button"
            style="background-color: #4dd78a; font-weight: bold; color: white; font-family: Work Sans,--apple-system"
          >
          </div>
          </div>
      </form>
      </div>
      <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='phone';fnames[4]='MMERGE4';ftypes[4]='text';fnames[5]='MMERGE5';ftypes[5]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
      <!--End mc_embed_signup-->
      `,
      }}
    ></Box>
  );
};

const NewsletterPage: React.FC = () => {
  return (
    <Page
      title="Newsletters | Traded"
      canonical={`${WEBSITE_URL}/newsletters/`}
    >
      <Box
        maxWidth={1215}
        mr="auto"
        ml="auto"
        display="flex"
        textAlign="center"
        padding="50px 0px 0px 0px"
      >
        <Box flex="0 0 25%"></Box>
        <Box flex="0 0 50%">
          <Typography variant="h1" component="h1" aria-label="Activity" mb={1}>
            <i>Newsletters</i>
          </Typography>
          <Typography
            textAlign="center"
            fontSize={[16, 24, 24, 24]}
            lineHeight={['20px', '30px', '30px', '32px']}
            fontWeight={500}
            component="p"
            aria-label="Newsletter"
            mb={1}
          >
            Get the trades delivered straight to your inbox each morning.
          </Typography>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        paddingX={['5%', '5%', '20%']}
      >
        <SubscribeForm />
      </Box>
    </Page>
  );
};

export default NewsletterPage;
