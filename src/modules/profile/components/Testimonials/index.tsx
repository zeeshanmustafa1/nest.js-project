import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';

import type { Maybe, TestimonialEdge } from '@/__generated__/types.d';

export interface TestimonialsPage {
  testimonial: Maybe<TestimonialEdge>;
}

const TestimonialBox: React.FC<TestimonialsPage> = ({ testimonial }) => {
  const data = testimonial?.node;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={['100%', '100%', '100%']}
      justifyContent="flex-start"
      paddingX={['10px', '10px', '20px']}
    >
      <Box marginY={['15px', '15px', '30px']}>
        <Typography fontSize={[16]} fontWeight={[500]}>
          {data?.content}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Link href={data?.slug ? `/agent/${data?.slug}` : '/'}>
          <Box height="70px" width="70px" marginX="10px">
            <Image
              src={(data?.clientImage as string) ?? '/assets/Dummy/65x65.png'}
              alt={data?.slug as string}
              height="100%"
              width="100%"
              style={{ borderRadius: '50%' }}
            />
          </Box>
        </Link>

        <Box>
          <Typography fontSize={[18]} fontWeight={[700]}>
            {data?.title}
          </Typography>
          <Typography fontSize={[18]} fontWeight={[500]}>
            {data?.clientCompany}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialBox;
