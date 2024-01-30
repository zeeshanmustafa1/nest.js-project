/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */

import {
  Box,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import __ from 'lodash';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { Deal } from '@/__generated__/types.d';
import Page from '@/layouts/Page';
import { RenderIf } from '@/modules/common/components';
import { MapBox } from '@/modules/profile/components';
import { getMapBoxDataForDeals } from '@/utils/data/dealsMapBox';

import SvgComponent from '../../modules/errors/image';
import { SearchCard } from '../../modules/errors/SearchCard';
import type { SearchSuggestion } from '../../modules/errors/types';

let timeout: NodeJS.Timeout | undefined;

const Custom404 = () => {
  const router = useRouter();
  const pathSegments = router.asPath
    .split('/')
    .filter((segment) => segment !== '');
  const inputTerm = decodeURIComponent(
    pathSegments[pathSegments.length - 1] || router.asPath
  );
  const properCaseInputTerm = inputTerm
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [searchText, setSearchText] = useState<string>(properCaseInputTerm);
  const [loading, setLoading] = useState<boolean>(false);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [results, setResults] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Skip execution during server-side rendering
    setSuggestions([]);

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    timeout = setTimeout(() => {
      if (searchText && searchText.length > 0) {
        setLoading(true);
        fetch(`/api/search/${searchText}`)
          .then((res) => res.json())
          .then((res) => {
            // Handle response
            const searches = res.data.search;
            const responseArr = __.chain(searches)
              .filter((s) => s && s.length > 0)
              .value();
            const suggestionsFlattened = __.flatten<SearchSuggestion>(
              responseArr as SearchSuggestion[]
            );
            setDeals(searches.deals);
            setSuggestions(suggestionsFlattened);
            setLoading(false);
            setResults(suggestionsFlattened.length > 1);
          })
          .catch(() => setLoading(false));
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  const onChangeSearchText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <Page>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '30px 20px',
        }}
      >
        <SvgComponent />
        <Box
          sx={{
            maxWidth: '600px',
          }}
        >
          <Typography variant="h3" component="h2">
            We couldn’t find what you were looking for, here are some
            suggestions
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={matches ? 'row' : 'column'}
        sx={{
          padding: matches ? '20px 60px' : '20px 30px',
          border: '1px solid #E5E5E5',
          gap: '20px',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          flexBasis="50%"
          flex="1"
          minHeight="100vh"
          overflow="hidden"
        >
          <Box
            component="header"
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              backgroundColor: 'white',
            }}
          >
            {/*  Search Input */}
            <TextField
              fullWidth
              // variant={inputVariant || 'outlined'}
              placeholder="Search Deals, Agents, Agencies, and Lenders"
              color="success"
              onChange={onChangeSearchText}
              value={searchText}
              InputProps={{
                type: 'search',
                // sx: textInputStyles,
                endAdornment: (
                  <IconButton>
                    {loading ? (
                      <CircularProgress size={24} />
                    ) : (
                      <Image
                        alt="Search icon. Click to search for agents, agencies or lenders"
                        src="/assets/Search.svg"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    )}
                  </IconButton>
                ),
              }}
            />
          </Box>
          <Box
            component="main"
            sx={{
              flex: 1,
              maxHeight: matches ? '90vh' : 'auto',
              overflowY: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                // paddingTop: '5px', // Added padding to account for the height of the sticky header
                padding: '0px 10px',
              }}
            >
              {/* Your Scrollable Content */}
              {/* Map through random strings */}
              {suggestions.map((card) => (
                <>
                  {/* eslint no-underscore-dangle: ["error", { "allow": ["__place"] }] */}
                  {card.__typename && <SearchCard card={card} row={matches} />}
                </>
              ))}
              <RenderIf condition={!results && !loading}>
                <Box paddingTop="20px">
                  <Typography variant="bodyLarge">
                    No results found. Try modifying your search.
                  </Typography>
                </Box>
              </RenderIf>
            </Box>
          </Box>
        </Box>
        <RenderIf condition={matches}>
          <Box
            display="flex"
            flexDirection="column"
            flexBasis="50%"
            flex="1"
            maxHeight={'90vh'}
          >
            {/* Your Content */}
            <MapBox data={getMapBoxDataForDeals(deals as Deal[])} />
          </Box>
        </RenderIf>
      </Box>
    </Page>
  );
};

export default Custom404;
