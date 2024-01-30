import { Phone } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { routes } from '@/constants/routes';
import { RenderIf, Tag } from '@/modules/common/components';

import type { ProfileSectionProps } from '../../types';
import * as S from './styles';

export interface CompanyAndContactProps extends ProfileSectionProps {
  scrollTo?: Function;
}

export const CompanyAndContact: React.FC<CompanyAndContactProps> = ({
  agency,
  broker,
  scrollTo,
}) => {
  const companyTitle = broker?.company?.title;
  const companySlug = broker?.company?.slug;
  const phone = broker?.phone || agency?.contactPhone;
  const companyLogo = broker?.company?.logoUrl;

  return (
    <S.CompanyAndContactWrapper
      aria-label={`${broker?.name || ''}'s and agency contact`}
    >
      <RenderIf condition={broker?.title as string}>
        <Typography
          variant="bodyExtraLarge"
          component="h4"
          fontWeight={600}
          fontSize="20px"
          // margin="20px 0"
          aria-label={`${broker?.name || ''}'s position in ${
            broker?.company?.title || ''
          }`}
        >
          {broker?.title}
        </Typography>
      </RenderIf>

      <Box display="flex" flexDirection="row">
        <RenderIf
          condition={(companyTitle as string) && (companySlug as string)}
        >
          <Tag
            text={companyTitle as string}
            href={routes.agencies.getAgencyHref(companySlug as string)}
            icon={
              <Image
                alt=""
                src={companyLogo || '/assets/Agency.svg'}
                width={16}
                height={16}
              />
            }
          />
        </RenderIf>
        <RenderIf condition={phone as string}>
          <Tag
            disableOnMobile={true}
            text={phone as string}
            href={`tel:${phone as string}`}
            icon={<Phone sx={{ width: 16, height: 16 }} />}
          />
        </RenderIf>
        {scrollTo && (
          <Box>
            <Tag
              disableOnMobile={true}
              text="Email"
              onClick={() => scrollTo && scrollTo()}
              icon={
                <Image alt="" src="/assets/Email.svg" width={16} height={16} />
              }
            />
          </Box>
        )}
      </Box>
    </S.CompanyAndContactWrapper>
  );
};
