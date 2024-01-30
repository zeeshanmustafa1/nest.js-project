import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import type { Deal } from '@/__generated__/types.d';
import { categories, cities } from '@/constants/agents';
import theme from '@/theme';
import { getUrlForPage } from '@/utils/urlMapper';

export const AgentsAside: React.FC<{ deals?: Deal[] }> = ({ deals }) => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [agentName, setAgentName] = useState<string>('');
  const router = useRouter();

  return (
    <Box pt={0} pb="1px" position="sticky" top={0}>
      <Box component="aside">
        <Box p="30px" borderRadius="4px" sx={{ background: '#fff' }}>
          <Box mb="25px">
            <Typography component="h3" variant="bodyLarge">
              Find Agent
            </Typography>
          </Box>

          <Box
            sx={{
              '& input::placeholder': {
                fontSize: '14px',
              },
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: `#005a87 !important`,
              },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter Agent Name"
              size="small"
              fullWidth
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              InputProps={{
                type: 'search',
                startAdornment: (
                  <Image
                    alt="Search icon. Click to search for agents, agencies or lenders"
                    src="/assets/Search.svg"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                ),
              }}
            />
          </Box>

          <Box
            mt={2}
            sx={{
              '.MuiOutlinedInput-root > div': {
                fontSize: '14px !important',
              },
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: `#005a87 !important`,
              },
            }}
          >
            <FormControl fullWidth size="small">
              <InputLabel
                sx={{ fontSize: '14px' }}
                id="demo-multiple-checkbox-label"
              >
                All Categories
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                value={categoryName}
                onChange={(e: SelectChangeEvent) =>
                  setCategoryName(e.target.value)
                }
                input={<OutlinedInput label="All Categories" />}
                renderValue={(selected) => selected}
              >
                {categories?.map((category) => (
                  <MenuItem key={category} value={category}>
                    <ListItemText
                      primary={category}
                      primaryTypographyProps={{ fontSize: 14 }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            mt={2}
            sx={{
              '.MuiOutlinedInput-root > div': {
                fontSize: '14px !important',
              },
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: `#005a87 !important`,
              },
            }}
          >
            <FormControl fullWidth size="small">
              <InputLabel
                sx={{ fontSize: '14px' }}
                id="demo-multiple-checkbox-label"
              >
                All Cities
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                value={cityName}
                onChange={(e: SelectChangeEvent) => setCityName(e.target.value)}
                input={<OutlinedInput label="All Categories" />}
                renderValue={(selected) => selected}
              >
                {cities?.map((city) => (
                  <MenuItem key={city} value={city}>
                    <ListItemText
                      primary={city}
                      primaryTypographyProps={{ fontSize: 14 }}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box mt={2}>
            <Button
              sx={{
                background: '#005A87',
                borderColor: '#005A87',
                borderRadius: 1,
                width: '100%',

                '&:hover': {
                  background: '#3ec0ef',
                  borderColor: '#3ec0ef',
                },
              }}
              onClick={() =>
                router.push({
                  pathname: 'agents',
                  query: { category: categoryName, city: cityName, page: 1 },
                })
              }
            >
              Search Agent
            </Button>
          </Box>
        </Box>
        <Box mt="20px" p="30px" borderRadius="4px" sx={{ background: '#fff' }}>
          <Box mb="25px">
            <Typography component="h3" variant="bodyLarge">
              Recent Viewed
            </Typography>
          </Box>

          <Box>
            {deals?.map((deal, index) => (
              <Box key={`${deal?.id}-${index}`} mb={2}>
                <Box display="flex">
                  <Link
                    href={getUrlForPage(
                      'transaction',
                      deal?.slug,
                      deal?.feeds && deal?.feeds[0],
                      deal?.transactionType
                    )}
                    passHref
                  >
                    <a>
                      <Image
                        src={deal?.mainImage || ''}
                        alt={`${deal?.title}-image`}
                        width={80}
                        height={80}
                      />
                    </a>
                  </Link>
                  <Box ml={2}>
                    <Link
                      href={getUrlForPage(
                        'transaction',
                        deal?.slug,
                        deal?.feeds && deal?.feeds[0],
                        deal?.transactionType
                      )}
                      passHref
                    >
                      <Typography
                        variant="bodySmall"
                        component="a"
                        color={theme?.palette?.black?.main}
                        sx={{ textDecoration: 'none' }}
                      >
                        {deal?.title || 'Unavailable '}
                      </Typography>
                    </Link>
                    <Typography
                      variant="bodySmall"
                      display="block"
                      fontWeight={600}
                    >
                      {deal?.salePrice
                        ? `$${parseInt(deal?.salePrice, 10).toLocaleString()}`
                        : '$0'}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
