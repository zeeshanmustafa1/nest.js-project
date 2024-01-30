import { Typography } from '@mui/material';

import { ClientOnly, SearchInput } from '@/modules/common/components';
import useWindowSize from '@/modules/common/hooks/useWindowSize';

import * as S from './styles';

const SearchTransactions = () => {
  const { width } = useWindowSize();
  return (
    <S.SearchTransationsWrapper>
      <S.BoldHeadingWrapper>
        <Typography variant="h1" component="h1">
          We track CRE transactions and the players involved
        </Typography>
      </S.BoldHeadingWrapper>

      <S.SearchInputParagraphContainer>
        <Typography variant="h4" component="h2">
          The #1 source for breaking commercial real estate transactions and
          insights.
        </Typography>
      </S.SearchInputParagraphContainer>

      <S.SearchInputContainer>
        {/* <Typography variant="h3" component="h3">
          Search Comps, Agents, Agencies, and Lenders
        </Typography> */}
        <ClientOnly>
          <SearchInput showSearchResultType={width > 500} />
        </ClientOnly>
      </S.SearchInputContainer>
      {/* <Stack
          width="100%"
          height="60%"
          padding="30px 40px"
          alignItems="flex-start"
          sx={{
            backgroundColor: '#0F4027',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            border: '2px solid #092818',
            borderTop: 'none',
            boxShadow: '4px 4px 32px rgba(0, 0, 0, 0.1);',
          }}
        >
          <Typography
            variant="text"
            color={(theme) => theme.palette.secondary.light}
            sx={{
              fontWeight: 500,
            }}
          >
            Traded has the richest database of Real Estate transactions! Updated
            Hourly.
          </Typography>
        </Stack> */}
    </S.SearchTransationsWrapper>
  );
};

export { SearchTransactions };
