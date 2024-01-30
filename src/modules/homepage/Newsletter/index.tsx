import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { newsletter } from '@/constants/homepage';
import { NewsletterForm } from '@/modules/common/components';

import * as S from './styles';

export const Newsletter = () => {
  return (
    <S.NewsletterWrapper>
      <S.NewsLetterFormContainer>
        <Typography
          fontSize={[14, 21, 21]}
          fontWeight={600}
          letterSpacing={2.8}
          textTransform="uppercase"
          lineHeight="14px"
          color="white"
          marginBottom="20px"
          component="h4"
        >
          {newsletter.title}
        </Typography>
        <Typography
          fontSize={[21, 34, 34]}
          fontWeight={900}
          lineHeight="38px"
          color="white"
          marginBottom="28px"
        >
          {newsletter.description}
        </Typography>
        <NewsletterForm />
      </S.NewsLetterFormContainer>
      <S.NewsLetterSvgContainer>
        <Image
          src="/assets/Shapes/FilledCircle.svg"
          alt="Filled Circle"
          width={400}
          height={400}
          loading="lazy"
        />
        <Box
          component="figure"
          position="absolute"
          top="50px"
          right="-8px"
          margin="0"
        >
          <Image
            src="/assets/Shapes/Progress.svg"
            alt="Progress"
            width={300}
            height={300}
            loading="lazy"
          />
        </Box>
        <Box
          component="figure"
          position="absolute"
          bottom="-60px"
          left="-90px"
          margin="0"
        >
          <Image
            src="/assets/Shapes/Phone.svg"
            alt="Progress"
            width={300}
            height={300}
            loading="lazy"
          />
        </Box>
        <Box
          component="figure"
          position="absolute"
          top="120px"
          left="-10px"
          margin="0"
        >
          <Image
            src="/assets/Shapes/Dust.svg"
            alt="Progress"
            width={70}
            height={70}
            loading="lazy"
          />
        </Box>
      </S.NewsLetterSvgContainer>
    </S.NewsletterWrapper>
  );
};
