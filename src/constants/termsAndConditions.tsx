/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

const Description: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography fontSize={14} fontFamily="Arial" lineHeight={1.5} mb={2}>
    {children}
  </Typography>
);

export const tableOfContents = [
  {
    text: '1. AGREEMENT TO TERMS',
    url: 'agreement',
    content: (
      <>
        <Description>
          These Terms of Use constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity ("you") and Traded
          Media LLC (<strong>"Company</strong>," <strong>"we."</strong>,{' '}
          <strong>"us."</strong> or <strong>"our"</strong>), concerning your
          access to and use of the{' '}
          <a href="https://traded.co" style={{ color: '#3030F1' }}>
            https://traded.co
          </a>{' '}
          website as well as any other media form, media channel, mobile website
          or mobile application related, linked, or otherwise connected thereto
          (collectively, the "Site"). We are registered in New York, United
          States and have our registered office at 250 East 53rd Street, New
          York, NY 33154. You agree that by accessing the Site, you have read,
          understood, and agreed to be bound by all of these Terms of Use. IF
          YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
          EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE
          IMMEDIATELY.
        </Description>
        <Description>
          {`Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms of Use at any time and for any
          reason. We will alert you about any changes by updating the "Last
          updated" date of these Terms of Use, and you waive any right to
          receive specific notice of each such change. Please ensure that you
          check the applicable Terms every time you use our Site so that you
          understand which Terms apply. You will be subject to, and will be
          deemed to have been made aware of and to have accepted, the changes in
          any revised Terms of Use by your continued use of the Site after the
          date such revised Terms of Use are posted`}
        </Description>
        <Description>
          {`The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country. Accordingly, those persons who choose to
          access the Site from other locations do so on their own initiative and
          are solely responsible for compliance with local laws, if and to the
          extent local laws are applicable.`}
        </Description>
        <Description>
          {`The Site is not tailored to comply with industry-specific regulations
          (Health Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use this
          Site. You may not use the Site in a way that would violate the
          Gramm-Leach-Bliley Act (GLBA).`}
        </Description>
        <Description>
          The Site is intended for users who are at least 18 years old. Persons
          under the age of 18 are not permitted to use or register for the Site.
        </Description>
      </>
    ),
  },
  {
    text: '2. INTELLECTUAL PROPERTY RIGHTS',
    url: 'ip',
    content: (
      <>
        <Description>
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the "Content") and the trademarks, service marks, and
          logos contained therein (the "Marks") are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws and
          various other intellectual property rights and unfair competition laws
          of the United States, international copyright laws, and international
          conventions. The Content and the Marks are provided on the Site "AS
          IS" for your information and personal use only. Except as expressly
          provided in these Terms of Use, no part of the Site and no Content or
          Marks may be copied, reproduced, aggregated, republished, uploaded,
          posted, publicly displayed, encoded, translated, transmitted,
          distributed, sold, licensed, or otherwise exploited for any commercial
          purpose whatsoever, without our express prior written permission.
        </Description>
        <Description>
          Provided that you are eligible to use the Site, you are granted a
          limited license to access and use the Site and to download or print a
          copy of any portion of the Content to which you have properly gained
          access solely for your personal, non-commercial use. We reserve all
          rights not expressly granted to you in and to the Site, the Content
          and the Marks.
        </Description>
      </>
    ),
  },
  {
    text: '3. USER REPRESENTATIONS',
    url: 'userreps',
    content: (
      <>
        <Description>
          By using the Site, you represent and warrant that: (1) you have the
          legal capacity and you agree to comply with these Terms of Use; (2)
          you are not a minor in the jurisdiction in which you reside; (3) you
          will not access the Site through automated or non-human means, whether
          through a bot, script, or otherwise; (4) you will not use the Site for
          any illegal or unauthorized purpose; and (5) your use of the Site will
          not violate any applicable law or regulation.
        </Description>
        <Description>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Site (or
          any portion thereof).
        </Description>
      </>
    ),
  },
  {
    text: '4. PROHIBITED ACTIVITIES',
    url: 'prohibited',
    content: (
      <>
        <Description>
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </Description>
        <Description>As a user of the Site, you agree not to:</Description>
        <Description>
          <ul>
            <li>
              Systematically retrieve data or other content from the Site to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Site, including features that prevent or restrict
              the use or copying of any Content or enforce limitations on the
              use of the Site and/or the Content contained therein.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Site.
            </li>
            <li>
              Use any information obtained from the Site in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Use the Site in a manner inconsistent with any applicable laws or
              regulations.
            </li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party's uninterrupted use and
              enjoyment of the Site or modifies, impairs, disrupts, alters, or
              interferes with the use, features, functions, operation, or
              maintenance of the Site.
            </li>
            <li>
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as
              "spyware" or "passive collection mechanisms" or "pcms").
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Site or
              the networks or services connected to the Site.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Site to you.
            </li>
            <li>
              Attempt to bypass any measures of the Site designed to prevent or
              restrict access to the Site, or any portion of the Site.
            </li>
            <li>
              Copy or adapt the Site's software, including but not limited to
              Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Except as permitted by applicable law, decipher, decompile,
              disassemble, or reverse engineer any of the software comprising or
              in any way making up a part of the Site.
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the Site, or
              using or launching any unauthorized script or other software.
            </li>
            <li>
              Use a buving agent or purchasing agent to make purchases on the
              Site.
            </li>
            <li>
              Make any unauthorized use of the Site, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses.
            </li>
            <li>
              Use the Site as part of any effort to compete with us or otherwise
              use the Site and/or the Content for any revenue-generating
              endeavor or commercial enterprise.
            </li>
            <li>Sell or otherwise transfer your profile.</li>
          </ul>
        </Description>
      </>
    ),
  },
  {
    text: '5. USER GENERATED CONTRIBUTIONS',
    url: 'ugc',
  },
  {
    text: '6. CONTRIBUTION LICENSE',
    url: 'license',
  },
  {
    text: '7. SUBMISSIONS',
    url: 'submissions',
  },
  {
    text: '8. THIRD-PARTY WEBSITE AND CONTENT',
    url: 'thirdparty',
  },
  {
    text: '9. ADVERTISERS',
    url: 'advertisers',
  },
  {
    text: '10. SITE MANAGEMENT',
    url: 'sitemanage',
  },
  {
    text: '11. PRIVACY POLICY',
    url: 'privacypolicy1',
  },
  {
    text: '12. COPYRIGHT INFRINGEMENTS',
    url: 'copyright2',
  },
  {
    text: '13. TERM AND TERMINATION',
    url: 'terms',
  },
  {
    text: '14. MODIFICATIONS AND INTERRUPTIONS',
    url: 'modifications',
  },
  {
    text: '15. GOVERNING LAW',
    url: 'law',
  },
  {
    text: '16. DISPUTE RESOLUTION',
    url: 'disputes',
  },
  {
    text: '17. CORRECTIONS',
    url: 'corrections',
  },
  {
    text: '18. DISCLAIMER',
    url: 'disclaimer',
  },
  {
    text: '19. LIMITATIONS OF LIABILITY',
    url: 'liability',
  },
  {
    text: '20. INDEMNIFICATION',
    url: 'indemnification',
  },
  {
    text: '21. USER DATA',
    url: 'userdata',
  },
  {
    text: '22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    url: 'electronic',
  },
  {
    text: '23. CALIFORNIA USERS AND RESIDENTS',
    url: 'california',
  },
  {
    text: '24. MISCELLANEOUS',
    url: 'misc',
  },
  {
    text: '25. CONTACT US',
    url: 'contact',
  },
];
