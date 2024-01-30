import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import { generateElipsesDescription } from '@/utils/helpers';

import { RenderIf } from '../RenderIf';

export interface IReadMore {
  description: string;
  shortDescription?: string;
  customSlice?: number;
}

export const ReadMore: React.FC<IReadMore> = ({
  description,
  shortDescription,
  customSlice,
}) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(true);

  return (
    <Box>
      <RenderIf condition={!!description}>
        <Box>
          <Typography>
            {isReadMore
              ? shortDescription ??
                generateElipsesDescription(
                  description.slice(0, customSlice || 150)
                )
              : description}
          </Typography>
          <Typography
            component="span"
            onClick={() => setIsReadMore(!isReadMore)}
            color="#0073cf"
            sx={{ cursor: 'pointer' }}
          >
            {isReadMore ? 'Read More' : 'Read Less'}
          </Typography>
        </Box>
      </RenderIf>
    </Box>
  );
};
