import type { SelectProps } from '@mui/material';
import { MenuItem } from '@mui/material';
import Image from 'next/image';

import { coveredLocations } from '@/constants';

import * as S from './styles';

interface SelectLocationProps extends SelectProps {
  showLocationIcon?: boolean;
  value: CoveredLocation;
  onChange: SelectProps['onChange'];
}

const defaultLocation = coveredLocations[0];

export const SelectLocation: React.FC<SelectLocationProps> = ({
  value,
  onChange,
  showLocationIcon,
  ...props
}) => {
  return (
    <S.Select
      value={value.state}
      onChange={onChange}
      defaultValue={defaultLocation?.state as string}
      color="secondary"
      {...props}
    >
      {coveredLocations.map((l) => (
        <MenuItem key={l.id} value={l.state}>
          <S.LocationWrapper>
            {showLocationIcon ? (
              <Image
                alt="Map Icon regarding the location."
                src={l.url}
                width={20}
                height={20}
                loading="lazy"
              />
            ) : null}
            {l.state}
          </S.LocationWrapper>
        </MenuItem>
      ))}
    </S.Select>
  );
};
