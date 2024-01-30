import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import type { ResponsiveObject } from 'react-slick';
import Slider from 'react-slick';

import type { Company } from '@/__generated__/types.d';
import { routes } from '@/constants/routes';
import { RenderIf } from '@/modules/common/components';

import * as S from './styles';

const responsive: ResponsiveObject[] = [
  {
    breakpoint: 1024,
    settings: {
      slidesToScroll: 6,
      slidesToShow: 6,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToScroll: 4,
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 400,
    settings: {
      slidesToScroll: 3,
      slidesToShow: 3,
    },
  },
];

interface AgencySliderProps {
  partnerAgencies: Company[];
}

const AgencySlider: React.FC<AgencySliderProps> = ({ partnerAgencies }) => {
  return (
    <S.AgencySliderWrapper>
      <Slider
        autoplay
        autoplaySpeed={2600}
        cssEase="linear"
        infinite
        speed={500}
        slidesToShow={7}
        slidesToScroll={4}
        responsive={responsive}
        accessibility
      >
        {partnerAgencies.map((item) => (
          <RenderIf key={item.id} condition={item.mainImage}>
            <Link
              href={routes.agencies.getAgencyHref(item.slug as string)}
              passHref
            >
              <a>
                <Image
                  alt=""
                  src={item.mainImage as string}
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </a>
            </Link>
          </RenderIf>
        ))}
      </Slider>
      <Typography variant="h4">
        Traded works with the most prominent agents, agencies, lenders, and
        investors across the nation.
      </Typography>
    </S.AgencySliderWrapper>
  );
};

export { AgencySlider };
