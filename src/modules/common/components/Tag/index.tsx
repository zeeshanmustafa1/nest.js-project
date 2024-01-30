import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { RenderIf } from '../RenderIf';

interface TagProps {
  icon?: React.ReactNode;
  text: string;
  href?: string;
  onClick?: Function;
  isAlwaysActive?: boolean;
  isStatHighlight?: boolean;
  ariaLabel?: string;
  disableOnMobile?: boolean | undefined;
}

interface LinkProps {
  isStatHighlight: boolean;
  isAlwaysActive: boolean;
}

const StyledLink = styled(Box)<LinkProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  cursor: pointer;

  padding: 12px;
  margin: 8px 5px;

  border-radius: 5px;

  background: ${({ isAlwaysActive }) =>
    isAlwaysActive ? '#FFE4AF' : '#f9f9f9'};
  color: ${({ isAlwaysActive }) => (isAlwaysActive ? '#FF3528' : '#000')};
  border: 1px solid #f0f0f0;

  &:hover {
    color: ${({ isStatHighlight }) => (isStatHighlight ? '#FF3528' : '#000')};
    background: ${({ isStatHighlight }) =>
      isStatHighlight ? '#FFE4AF' : '#d5d5d5'};
  }
`;
export const DisableOnMobile = styled.div`
  @media (max-width: 684px) {
    display: none;
  }
`;
export const Tag: React.FC<TagProps> = (props) => {
  const {
    text,
    href,
    icon,
    onClick,
    disableOnMobile = false,
    isStatHighlight = false,
    isAlwaysActive = false,
    ariaLabel,
  } = props;

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <StyledLink
            component="a"
            isStatHighlight={isStatHighlight}
            isAlwaysActive={isAlwaysActive}
            aria-label={ariaLabel}
          >
            {icon}
            <RenderIf condition={disableOnMobile}>
              <DisableOnMobile>
                <Typography variant="text" component="p">
                  {text}
                </Typography>
              </DisableOnMobile>
            </RenderIf>
            <RenderIf condition={!disableOnMobile}>
              <Typography variant="text" component="p">
                {text}
              </Typography>
            </RenderIf>
          </StyledLink>
        </Link>
      ) : (
        <Box onClick={() => onClick && onClick()}>
          <StyledLink
            component="a"
            isStatHighlight={isStatHighlight}
            isAlwaysActive={isAlwaysActive}
            aria-label={ariaLabel}
          >
            {icon}
            <RenderIf condition={disableOnMobile}>
              <DisableOnMobile>
                <Typography variant="text" component="p">
                  {text}
                </Typography>
              </DisableOnMobile>
            </RenderIf>
            <RenderIf condition={!disableOnMobile}>
              <DisableOnMobile>
                <Typography variant="text" component="p">
                  {text}
                </Typography>
              </DisableOnMobile>
            </RenderIf>
          </StyledLink>
        </Box>
      )}
    </>
  );
};
