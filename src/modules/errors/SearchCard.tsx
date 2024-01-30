/* eslint-disable no-underscore-dangle */
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import theme from '@/theme';

import * as S from './styles';
import type { SearchCardProps } from './types';

export const SearchCard: React.FC<SearchCardProps> = ({ card, row }) => {
  const getNumberFormat = (num: string) => {
    return Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(parseInt(num, 10));
  };

  const typenames: Record<string, string> = {
    Company: 'Agency',
    Broker: 'Agent',
    Deal: 'Deal',
  };

  const cardType: string =
    typenames[card?.type || card?.__typename || ''] ??
    (card?.type || card?.__typename || 'Deal');

  if (!cardType) return null;

  let url;

  let transactionType = card.transactionType?.toLowerCase();
  if (transactionType === 'sale') {
    transactionType = 'sold';
  }

  if (cardType !== 'Deal') {
    url = `/${cardType?.toLowerCase()}/${card?.slug}/`;
  } else {
    const feedValue =
      card?.feeds && card.feeds.length > 0 ? card.feeds[0] : 'feed';
    url = `/property/${feedValue}/${transactionType}/${card?.slug}/`;
  }

  return (
    <S.CompanyCardWrapper
      // flexDirection="row"
      // height="180px"
      flexDirection={row ? 'row' : 'column'}
      maxHeight={row ? '180px' : '600px'}
    >
      <a>
        <S.ImageWrapper>
          <Link href={url}>
            <Image
              src={(card.mainImage as string) || '/assets/Dummy/240x240.png'}
              alt={card.slug as string}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </S.ImageWrapper>
      </a>

      <S.InfoWrapper>
        <Box>
          <Typography
            fontWeight={900}
            fontSize={30}
            paddingLeft="15px"
            component="h2"
            style={{
              height: row ? '100px' : 'auto',
              maxHeight: cardType !== 'Deal' ? 'auto' : '100px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // Adjust the number of lines as needed
              maxWidth: '100%',
              textOverflow: 'ellipsis',
            }}
          >
            {card.address || card.title || card.name}
          </Typography>
        </Box>

        {/* Deals, Total Sold, and Total Finance for agents, agencies, and lenders */}
        {(cardType !== 'Deal' && (
          <>
            <Box display="flex" flexDirection="row" justifyContent="flex-start">
              {/* Deals */}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom="20px"
                paddingX="10px"
              >
                <Typography
                  fontWeight={900}
                  fontSize={[16, 26, 26, 26, 26]}
                  lineHeight="22px"
                >
                  {card?.dealsCount}
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize={11}
                  letterSpacing=".1em"
                  color={theme?.palette?.grey['500']}
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                >
                  Deals
                </Typography>
              </Box>
              {/* Total Sold */}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom="20px"
                paddingX="10px"
              >
                <Typography
                  fontWeight={900}
                  fontSize={[16, 26, 26, 26, 26]}
                  lineHeight="22px"
                >
                  {`$${getNumberFormat(card.totalSold || '0')}`}
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize={11}
                  letterSpacing=".1em"
                  color={theme?.palette?.grey['500']}
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                >
                  Total Sold
                </Typography>
              </Box>
              {/* Total Financed */}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom="20px"
                paddingX="10px"
              >
                <Typography
                  fontWeight={900}
                  fontSize={[16, 26, 26, 26, 26]}
                  lineHeight="22px"
                >
                  {`$${getNumberFormat(card.totalFinanced || '0')}`}
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize={11}
                  letterSpacing=".1em"
                  color={theme?.palette?.grey['500']}
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                >
                  Total Financed
                </Typography>
              </Box>
            </Box>
          </>
        )) || (
          <Typography variant="body" paddingX="10px">
            {card?.title}
          </Typography>
        )}
      </S.InfoWrapper>
      <Box
        display="flex"
        flexDirection="column"
        width={row ? '150px' : 'auto'}
        padding="20px"
      >
        <Box display="block" marginTop={row ? '30px' : '0px'}>
          <Button
            variant="white-button-black-text-hover-alter"
            sx={{ border: '1px solid black', marginBottom: '5px' }}
            fullWidth={!row}
          >
            <Box
              component="a"
              href={url}
              sx={{ color: '#000', textDecoration: 'none' }}
            >
              View {cardType}
            </Box>
          </Button>
        </Box>
      </Box>
    </S.CompanyCardWrapper>
  );
};

export default SearchCard;
