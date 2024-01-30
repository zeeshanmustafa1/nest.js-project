import { Typography } from '@mui/material';
import Image from 'next/image';

import { SearchInput } from '@/modules/common/components';

import * as S from './styles';

export const StartSearching = () => {
  return (
    <S.StartSearchingWrapper>
      <Typography
        fontSize={['20px', '20px', '24px']}
        className="start-searching-title"
        component="p"
      >
        Start Searching
        <Image
          alt=""
          src="/assets/Icon/Colored/Asterisk.svg"
          width={50}
          height={50}
          loading="lazy"
        />
      </Typography>

      <S.SearchContainer>
        <S.SearchWrapper>
          <SearchInput />
        </S.SearchWrapper>
      </S.SearchContainer>

      <Typography variant="h3" component="h2" mt="30px">
        Traded has revolutionized the way brokers market <br /> themselves.
      </Typography>

      <S.ArrowUpWrapper>
        <Image
          alt=""
          src="/assets/Arrows/ArrowSpinningTwice.svg"
          width={240}
          height={240}
          loading="lazy"
        />
      </S.ArrowUpWrapper>
    </S.StartSearchingWrapper>
  );
};
