import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, IconButton, Pagination, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import type { Broker } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';

import { ProfileSectionTitle } from '../SectionTitle';
import { ImageSection } from './ImageSection';
import { InfoSection } from './InfoSection';
import { SocialSection } from './SocialSection';

export interface AgentsProps {
  brokers: Broker[];
}

export const Agents: React.FC<AgentsProps> = ({ brokers }) => {
  const [currentBrokers, setCurrentBrokers] = useState(brokers?.slice(0, 5));
  const [page, setPage] = useState<number>(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const offset = page * 5;
    const start = offset - 5;
    setCurrentBrokers(brokers?.slice(start, offset));
  }, [page]);

  return (
    <Box marginBottom={5}>
      <ProfileSectionTitle sectionName="Agents" />
      <Box>
        {currentBrokers?.map((broker, index) => (
          <RenderIf
            condition={!!broker}
            key={`${broker?.id}-${broker?.name}-${index + 1}`}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              border="1px solid #d5d7e2"
              borderRadius="8px"
              margin="20px 0"
            >
              {/* Image Section */}
              <ImageSection
                broker={broker as Broker}
                sx={{
                  flex: ['0 0 45%', '0 0 25%', '0 0 25%', '0 0 25%', '0 0 25%'],
                  background: theme?.palette?.secondary?.dark,
                  position: 'relative',
                }}
              />

              {/* Info Section */}
              <InfoSection
                broker={broker as Broker}
                isMobile={isMobile}
                sx={{
                  flex: ['0 0 60%', '0 0 45%', '0 0 45%', '0 0 45%', '0 0 45%'],
                  maxWidth: ['60%', '45%', '45%', '45%', '45%'],
                  paddingX: '20px',
                  paddingTop: [1, '30px', '30px', '30px', '30px'],
                }}
              />

              {/* Agents Socials and link */}
              <SocialSection
                broker={broker as Broker}
                sx={{
                  flex: '0 0 30%',
                  maxWidth: '30%',
                  paddingTop: '30px',
                  paddingLeft: '20px',
                  borderLeft: '1px solid #F0F0F0',
                  position: 'relative',
                  display: ['none', 'block', 'block', 'block', 'block'],
                }}
              />
            </Box>
          </RenderIf>
        ))}
      </Box>

      <Box
        paddingTop="10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginTop={3}
      >
        <IconButton
          disabled={page === 1}
          onClick={() => page >= 1 && setPage(page - 1)}
        >
          <NavigateBefore />
        </IconButton>
        <Pagination
          count={
            brokers?.length ? Math.ceil((brokers?.length as number) / 5) : 0
          }
          hidePrevButton
          hideNextButton
          siblingCount={2}
          page={page}
          onChange={(_, p) => setPage(p)}
        />
        <IconButton
          disabled={
            page ===
            (brokers?.length ? Math.ceil((brokers?.length as number) / 5) : 0)
          }
          onClick={() =>
            page <= (Math.ceil(brokers?.length as number) || 0) &&
            setPage(page + 1)
          }
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Box>
  );
};
