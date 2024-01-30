import EastIcon from '@mui/icons-material/East';
import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import type { FormEvent } from 'react';
import React, { useEffect, useState } from 'react';

import { StyledError, StyledForm } from './styles';
import type { Interests } from './types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      overflowX: 'scroll' as const,
    },
  },
};

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);
  const [interestIds, setInterestIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchInterestCategories = async () => {
      const response = await fetch('/api/mailchimp/categories/');
      const res = await response.json();
      return res?.interests ?? [];
    };

    fetchInterestCategories()
      .then((interests: Interests[]) => {
        const tempCities: Array<string> = [];
        const tempInterestIds: Array<string> = [];
        interests?.forEach((interest: Interests) => {
          tempCities.push(interest.name);
          tempInterestIds.push(interest.id);
        });
        setInterestIds(tempInterestIds);
        setCities(tempCities);
      })
      .catch((err) => {
        if (err instanceof Error) setError(err.message);
        else setError('Unable to fetch interest categories (cities)');
      });
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof cityNames>) => {
    const {
      target: { value },
    } = event;
    setCityNames(typeof value === 'string' ? value.split(',') : value);
  };

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();

    const getIndex = (cityName: string) =>
      cities.findIndex((city: string) => city.includes(cityName));

    const indexes = cityNames?.map((city) => getIndex(city));

    // Get all interest ids to send in mailchimp subscription API
    const selectedIds: Array<string> = indexes?.map(
      (index) => interestIds[index] as string
    );

    try {
      const response = await fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          email,
          selectedIds,
        }),
      });
      const res = await response.json();

      if (!response.ok) {
        setError(
          res?.message || 'There was an error subscribing to the newsletter.'
        );
      }
    } catch (err) {
      if (err instanceof Error) setError(err?.message);
      else setError('Request not successfull');
    }
  };

  return (
    <StyledForm onSubmit={subscribe}>
      {error && <StyledError>{error}</StyledError>}
      <Box
        display="flex"
        sx={{
          justifyContent: 'space-between',
          paddingY: 2,
          flexDirection: ['column', 'row', 'row'],
        }}
      >
        <TextField
          id="outlined-basic"
          label="YOUR EMAIL"
          variant="outlined"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          focused
          aria-describedby="Newsletter Input Field"
          sx={{ width: ['100%', '48%', '48%'], pb: [2, 0, 0] }}
        />
        <FormControl sx={{ width: ['100%', '48%', '48%'] }}>
          <InputLabel id="demo-multiple-checkbox-label">City</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={cityNames}
            onChange={handleChange}
            input={<OutlinedInput label="City" />}
            renderValue={(selected) =>
              selected?.length > 1
                ? `${selected?.length} selected`
                : selected.join(', ')
            }
            MenuProps={MenuProps}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                <Checkbox
                  size="small"
                  color="info"
                  checked={cityNames.indexOf(city) > -1}
                />
                <ListItemText
                  primary={city}
                  primaryTypographyProps={{ fontSize: 12, fontWeight: 600 }}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        endIcon={<EastIcon color="primary" />}
        type="submit"
        variant="white-button-black-text"
        sx={{
          paddingY: 1.4,
          borderRadius: '12px',
          // fontSize: ['14px !important', '16px !important', '16px !important'],
        }}
      >
        Submit
      </Button>
    </StyledForm>
  );
};
