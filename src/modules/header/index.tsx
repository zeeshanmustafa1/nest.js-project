import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { SearchInput } from '../common/components';
import { Drawer } from './Drawer';
import { HeaderLinks } from './HeaderLinks';
import * as S from './styles';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link href="/" passHref>
          {/* TODO: ASK FOR THIS GIF */}
          <a>
            <Image
              alt="Traded Co logo"
              src="https://traded.co/wp-content/uploads/2021/09/traded-logo-gif-cmp.gif"
              width={160}
              height={52}
            />
          </a>
        </Link>

        <S.DisableOnTablet>
          <HeaderLinks />
        </S.DisableOnTablet>

        <SearchInput
          inputWidth="25%"
          textInputStyles={{ borderRadius: '20px' }}
          showSearchResultType={false}
        />

        <S.HeaderMenuWrapper>
          <Button
            variant="neon-green"
            size="medium"
            aria-label="Submit a deal"
            href="https://submit.traded.co"
            sx={{ borderRadius: 3 }}
          >
            Submit a Deal
          </Button>

          <S.HeaderMenuIcon aria-label="Open menu links" onClick={openDrawer}>
            <Image
              alt="Menu icon. Click to open drawer options"
              src="/assets/Menu.svg"
              width={30}
              height={30}
              loading="lazy"
            />
          </S.HeaderMenuIcon>
        </S.HeaderMenuWrapper>
      </S.HeaderContent>
      <Drawer open={drawerOpen} onClose={closeDrawer} />
    </S.HeaderContainer>
  );
};

export { Header };
