import type { SxProps } from '@mui/material';
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  TextField,
} from '@mui/material';
import __ from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SuggestionBox } from './SuggestionBox';
import type { SearchSuggestion } from './types';

export interface SearchInputProps {
  inputVariant?: 'outlined' | 'standard' | 'filled';
  inputWidth?: string | null;
  textInputStyles?: SxProps;
  showSearchResultType?: boolean;
}

let timeout: NodeJS.Timeout | undefined;

export const SearchInput: React.FC<SearchInputProps> = ({
  inputVariant,
  inputWidth,
  textInputStyles,
  showSearchResultType,
}) => {
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!searchText && loading) setSuggestions([]);
    setSuggestions([]);

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    timeout = setTimeout(() => {
      if (searchText.length > 0) {
        setLoading(true);
        fetch(`/api/search/${searchText}`)
          .then((res) => res.json())
          .then((res) => {
            const searches = res.data.search;
            const responseArr = __.chain(searches)
              .filter((s) => s.length > 0)
              .value();
            const suggestionsFlattened = __.flatten<SearchSuggestion>(
              responseArr as SearchSuggestion[]
            );
            if (suggestionsFlattened.length === 1) {
              setSuggestions([]);
            } else {
              setSuggestions(suggestionsFlattened);
            }
            setLoading(false);
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
  ) => setSearchText(e.target.value);
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      fullWidth={!inputWidth}
      options={suggestions}
      filterOptions={(options) => options}
      sx={{ width: inputWidth || null }}
      getOptionLabel={(opt) =>
        typeof opt === 'string' ? opt : opt?.name || opt?.title || opt?.id
      }
      renderOption={(props, suggestion) => {
        return (
          <SuggestionBox
            {...props}
            key={`${suggestion.id}-${suggestion?.name || suggestion?.title}`}
            showSearchResultType={showSearchResultType}
            searchSuggestion={suggestion}
          />
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant={inputVariant || 'outlined'}
          placeholder="Search Deals, Agents, Agencies, and Lenders"
          color="success"
          onChange={onChangeSearchText}
          InputProps={{
            ...params.InputProps,
            type: 'search',
            sx: textInputStyles,
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
      )}
    />
  );
};
