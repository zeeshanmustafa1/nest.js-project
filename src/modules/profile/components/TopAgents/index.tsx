import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { Broker } from '@/__generated__/types.d';
import { agentsSortyByOptions } from '@/constants';
import { BrokerAvatarLink } from '@/modules/common/components';
import theme from '@/theme';

import type { AgentsSortOption } from './types';

export interface TopAgentsProps {
  brokers: Broker[];
  onClick?: Function;
}

export const TopAgents: React.FC<TopAgentsProps> = ({ brokers, onClick }) => {
  const [sortBy, setSortBy] = useState<AgentsSortOption>(
    (agentsSortyByOptions[0]?.type as AgentsSortOption) || 'by-volume'
  );
  const [currentBrokers, setCurrentBrokers] = useState<Broker[] | null>(null);

  useEffect(() => {
    switch (sortBy) {
      case 'by-volume':
        setCurrentBrokers(
          [...brokers]
            .sort(
              (a: Broker, b: Broker) =>
                parseInt(b.totalVolume, 10) - parseInt(a.totalVolume, 10)
            )
            .slice(0, 10)
        );
        break;

      case 'by-sales':
        setCurrentBrokers(
          [...brokers]
            .sort(
              (a: Broker, b: Broker) =>
                parseInt(b.totalSold, 10) - parseInt(a.totalSold, 10)
            )
            .slice(0, 10)
        );
        break;

      case 'by-loans':
        setCurrentBrokers(
          [...brokers]
            .sort(
              (a: Broker, b: Broker) =>
                parseInt(b.totalFinanced, 10) - parseInt(a.totalFinanced, 10)
            )
            .slice(0, 10)
        );
        break;

      case 'by-leases':
        setCurrentBrokers(
          [...brokers]
            .sort(
              (a: Broker, b: Broker) =>
                parseInt(b.totalLeased, 10) - parseInt(a.totalLeased, 10)
            )
            .slice(0, 10)
        );
        break;

      default:
        setCurrentBrokers(null);
        break;
    }
  }, [sortBy]);

  return (
    <Box
      border="1px solid #d4d7e2"
      borderRadius="8px"
      paddingTop="10px"
      marginBottom={5}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
      >
        <Box
          display="flex"
          alignItems="center"
          flex={['0 0 70%', '0 0 50%', '0 0 40%']}
        >
          <Box minWidth="fit-content" display="flex" alignItems="center">
            <Image
              src="/assets/Icon/Colored/Star.svg"
              alt="Star"
              width={25}
              height={25}
            />
            <Typography
              fontWeight={600}
              lineHeight="16px"
              fontSize={16}
              color={theme.palette.grey['700']}
              component="h3"
              width="100%"
              marginLeft={1}
            >
              Top 10 Agents
            </Typography>
          </Box>
          <FormControl variant="standard" fullWidth sx={{ marginLeft: '30px' }}>
            <Select
              labelId="sort-by-label"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as AgentsSortOption)}
              label="Sort By"
            >
              {agentsSortyByOptions.map(({ type, label }) => (
                <MenuItem key={type} value={type}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Link href="#ranks" passHref>
          <Box
            component="a"
            onClick={() => onClick && onClick()}
            sx={{ textDecoration: 'none' }}
          >
            <Typography color={theme.palette.grey['500']} fontWeight={500}>
              View All
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box>
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: ['wrap', 'wrap', 'nowrap'],
            justifyContent: ['center', 'center', null],
          }}
        >
          {currentBrokers?.map((broker, index) => (
            <Box
              component="li"
              key={`${broker?.id}-${broker?.name}-${index + 1}`}
              flex={['0 0 20%', '0 0 12%', '0 0 10%']}
              maxWidth={['20%', '12%', '10%']}
              padding="10px 5px"
              position="relative"
            >
              <BrokerAvatarLink
                broker={broker}
                props={{
                  sx: { width: '68px !important', height: '68px !important' },
                }}
                fullWidth
              />
              <Typography
                component="span"
                position="absolute"
                top="10px"
                right="10px"
                color="white"
                fontWeight={700}
                fontSize={30}
                lineHeight="30px"
              >
                {index + 1}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
