import NextLink from 'next/link';

import type { Maybe } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';

import * as S from './styles';

interface SocialMediaLinkProps {
  href: Maybe<string> | undefined;
  children: React.ReactNode;
  'aria-label': string;
}

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = (props) => {
  const { children, href } = props;

  return (
    <RenderIf condition={href}>
      <NextLink href={href as string} rel="noreferrer noopener" passHref>
        <S.StyledLink target="_blank" aria-label={props['aria-label']}>
          {children}
        </S.StyledLink>
      </NextLink>
    </RenderIf>
  );
};
