import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import type { RelationshipStat } from '@/utils/data/relationships';

import * as S from './style';

export interface IBullets {
  stats: RelationshipStat[];
}

export const Bullets: React.FC<IBullets> = ({ stats }) => {
  return (
    <>
      {stats.map((stat) => {
        return (
          <Box display="flex" alignItems="center" key={stat.text}>
            <Box
              sx={{
                width: '9px',
                height: '9px',
                background: 'lightgray',
                marginRight: 2,
              }}
            />
            {stat.type === 'stat' ? (
              <Typography fontWeight={400}>{stat.text}</Typography>
            ) : (
              <Link href={stat.url as string} passHref>
                <S.StyledAnchor>
                  <Typography fontWeight={500} color="#0073cf">
                    {stat?.text}
                  </Typography>
                </S.StyledAnchor>
              </Link>
            )}
          </Box>
        );
      })}
    </>
  );
};
