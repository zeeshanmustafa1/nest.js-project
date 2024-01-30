import type { AvatarProps } from '@mui/material';
import { Typography } from '@mui/material';
import Link from 'next/link';

import type { Broker } from '@/__generated__/types.d';

import { RenderIf } from '../RenderIf';
import * as S from './styles';

interface BrokerAvatarLinkProps {
  broker?: Partial<Broker>;
  text?: React.ReactNode;
  props?: AvatarProps;
  link?: string;
  fullWidth?: boolean;
}

export const BrokerAvatarLink: React.FC<BrokerAvatarLinkProps> = ({
  broker,
  text,
  props,
  link,
  fullWidth = false,
}) => {
  const defaultProps: Partial<AvatarProps> = {
    variant: 'square',
    sx: { cursor: 'pointer' },
  };

  // TODO: remove mocked 'jim-halpert' agent slug
  // if (broker?.thumbnail || text) {
  return (
    <Link
      href={
        link ?? (text ? '/agents' : `/agent/${broker?.slug || 'jim-halpert'}`)
      }
      passHref
    >
      <S.StyledLink fullWidth={fullWidth} className="broker-avatar">
        <S.Avatar
          alt="Broker profile image. Click to access this broker's profile."
          src={broker?.thumbnail || (text ? '' : '/assets/Dummy/65x65.png')}
          {...defaultProps}
          {...props}
        >
          <RenderIf condition={text}>
            <Typography variant="h4" component="p">
              {text}
            </Typography>
          </RenderIf>
        </S.Avatar>
      </S.StyledLink>
    </Link>
  );
  // }
  // return null;
};
