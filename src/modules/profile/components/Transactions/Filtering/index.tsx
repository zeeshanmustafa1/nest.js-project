import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import { useEffect } from 'react';

import type { Deal } from '@/__generated__/types.d';

import { Label } from '../styles';
import type { TransactionsFilterProps } from '../types';
import * as S from './styles';

export const TransactionsFilter: React.FC<TransactionsFilterProps> = ({
  filterValues,
  assetTypesValues,
  stateTypesValues,
  transactionTypesValues,
  onChangeSelect,
  setDeals,
  allDeals,
}) => {
  const renderValue = (selected: string | Array<string>) => {
    if (typeof selected === 'string') {
      return [selected];
    }

    return selected.join(', ');
  };

  const assets = [{ type: 'all', label: 'All' }];
  assetTypesValues?.forEach((value) => {
    assets.push({
      type: value,
      label: value
        .toUpperCase()
        .replace('_', ' ')
        ?.toLowerCase()
        .replace(/\b[a-z]/g, (txtVal) => {
          return txtVal.toUpperCase();
        }),
    });
  });

  const states = [{ type: 'national', state: 'National' }];
  stateTypesValues?.forEach((value) => {
    states.push({
      type: value,
      state: value
        .toUpperCase()
        .replace('_', ' ')
        ?.toLowerCase()
        .replace(/\b[a-z]/g, (txtVal) => {
          return txtVal.toUpperCase();
        }),
    });
  });

  const transactions = [{ type: 'all', label: 'Select Type' }];
  transactionTypesValues?.forEach((value) => {
    transactions.push({ type: value, label: value });
  });

  useEffect(() => {
    const assetClass = assets.filter((assetType) =>
      filterValues['asset-class']?.includes(assetType.label)
    );

    const assetClassLabels = assetClass.map((asset) => asset.label);

    const loc: string | undefined = states?.find(
      (coveredLocation) => coveredLocation.state === filterValues.location
    )?.type;
    const type = transactions.find(
      (transactionType) => transactionType.label === filterValues.type
    )?.type;

    const location = loc?.toLowerCase().replace(/\b[a-z]/g, (txtVal) => {
      return txtVal.toUpperCase();
    });
    let tempDeal: Deal[] | null = allDeals ? [...allDeals] : null;

    if (type !== 'all')
      tempDeal = allDeals?.filter((deal) => deal.transactionType === type);
    if (location !== 'national')
      tempDeal = allDeals?.filter(
        (deal) =>
          deal?.properties &&
          deal.properties[0]?.state
            ?.toLowerCase()
            ?.replaceAll(' ', '-')
            ?.includes(location as string)
      );
    if (!assetClassLabels.includes('All'))
      tempDeal = allDeals?.filter(
        (deal) => deal?.assetType && assetClassLabels.includes(deal?.assetType)
      );

    setDeals(tempDeal);
  }, [filterValues]);

  return (
    <S.FiltersContainer>
      <FormControl variant="standard" fullWidth>
        <Label id="asset-class-label">Asset Class</Label>
        <Select
          multiple
          labelId="asset-class-label"
          name="asset-class"
          value={filterValues['asset-class']}
          onChange={onChangeSelect}
          renderValue={renderValue}
        >
          {assets.map(({ type, label }) => (
            <MenuItem key={type} value={label}>
              <Checkbox
                checked={
                  filterValues['asset-class'] !== null &&
                  filterValues['asset-class'].indexOf(label) >= 0
                }
              />
              <ListItemText primary={label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <Label id="location">Area</Label>
        <Select
          labelId="location"
          value={filterValues?.location}
          onChange={onChangeSelect}
          name="location"
          label="Area"
        >
          {states.map(({ type, state }) => (
            <MenuItem key={type} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" fullWidth>
        <Label id="transaction-type-label">Type</Label>
        <Select
          labelId="transaction-type-label"
          value={filterValues.type}
          onChange={onChangeSelect}
          name="type"
          label="Type"
        >
          {transactions.map(({ type, label }) => (
            <MenuItem key={type} value={label}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.FiltersContainer>
  );
};
