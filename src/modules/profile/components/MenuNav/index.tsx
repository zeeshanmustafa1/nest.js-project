import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import {
  agencyProfileSections,
  agentProfileSections,
  agentProfileSectionsNoRelationships,
  dealProfileSections,
  dealProfileSectionsNoSocial,
} from '@/constants/profile';

import { LinkShareDialog } from '../LinkShareDialog';
import * as S from './styles';

export interface ProfileMenuNavProps {
  scrollTo?: Function;
  noSummary?: boolean;
  noRelationships?: boolean;
  link: string;
  instagramId?: string;
}

export const ProfileMenuNav: FC<ProfileMenuNavProps> = ({
  scrollTo,
  noSummary,
  noRelationships,
  link,
  instagramId,
}) => {
  const router = useRouter();

  const getContentForSections = () => {
    const pathName = router.pathname;
    if (pathName.includes('agent') && !noRelationships)
      return agentProfileSections;
    if (pathName.includes('agent') && noRelationships)
      return agentProfileSectionsNoRelationships;
    if (pathName.includes('agency')) return agencyProfileSections;
    if (pathName.includes('lender')) return agencyProfileSections;
    if (pathName.includes('property') && instagramId)
      return dealProfileSections;
    if (pathName.includes('property') && !instagramId)
      return dealProfileSectionsNoSocial;
    return [];
  };

  const sections = getContentForSections();
  const [open, setOpen] = useState(false);
  const closeDialog = () => setOpen(false);
  const openDialog = useCallback(() => setOpen(true), []);

  const scroll = (section: string, index: number) => {
    const e = document.getElementById(section);
    e?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    });
    if (scrollTo) {
      scrollTo(index);
    }
  };

  return (
    <S.ProfileMenuNavWrapper dense sx={{ top: noSummary ? 0 : 140 }}>
      {sections.map((section, index) => {
        return (
          <S.ProfileMenuSectionLink
            key={section}
            id={section}
            onClick={() => {
              scroll(section, index);
            }}
          >
            <Typography variant="text" component="p">
              {section}
            </Typography>
          </S.ProfileMenuSectionLink>
        );
      })}
      <Typography
        onClick={openDialog}
        padding="12px"
        variant="text"
        style={{ cursor: 'pointer' }}
        component="p"
      >
        Share
      </Typography>
      <LinkShareDialog open={open} onClose={closeDialog} link={link} />
    </S.ProfileMenuNavWrapper>
  );
};
