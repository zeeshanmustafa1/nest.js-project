/* eslint-disable no-underscore-dangle */
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { formatAmount } from '@/utils/helpers';
import { getUrlForPage } from '@/utils/urlMapper';

import { RenderIf } from '../RenderIf';
import * as S from './styles';
import type { IConfiguration, IListItem, SearchSuggestion } from './types';

interface SearchSuggestionProps extends React.HTMLAttributes<HTMLLIElement> {
  searchSuggestion: SearchSuggestion;
  showSearchResultType?: boolean;
}

export const SuggestionBox: React.FC<SearchSuggestionProps> = ({
  searchSuggestion,
  showSearchResultType = true,
  ...rest
}) => {
  const companyName =
    searchSuggestion.companyName && searchSuggestion?.companyName?.length > 20
      ? searchSuggestion.companyName.split(' ').slice(0, 2).join(' ')
      : searchSuggestion.companyName;
  const SuggestionStats: React.FC<{ suggestionType: string }> = ({
    suggestionType,
  }) => {
    const lowerCasedsuggestionType = suggestionType?.toLowerCase() || '';
    const StatItem: React.FC<IListItem> = ({ title, value }) => (
      <S.StatItem>
        <S.StatListTitle>{title}:</S.StatListTitle>
        <S.StatListValue>{value}</S.StatListValue>
      </S.StatItem>
    );

    const commonAttrib = {
      financed: searchSuggestion?.totalFinanced
        ? `$${formatAmount(searchSuggestion?.totalFinanced)}`
        : '$0',
      sold: searchSuggestion?.totalSold
        ? `$${formatAmount(searchSuggestion?.totalSold)}`
        : '',
      profilesCount: searchSuggestion?.profilesCount ?? '',
      closed: searchSuggestion?.dealsCount ?? '',
      lastClosing: searchSuggestion?.lastClosing ?? '',
    };
    const configuration: IConfiguration = {
      agency: {
        Agents: `${commonAttrib?.profilesCount}`,
        Sold: commonAttrib?.sold,
        Financed: commonAttrib?.financed,
        Closed: `${commonAttrib?.closed}`,
        'Last Closing': `${commonAttrib?.lastClosing}`,
      },
      lender: {
        Financed: commonAttrib?.financed,
        Closed: `${commonAttrib?.closed}`,
        Relationships: `${commonAttrib?.profilesCount}`,
        Squarefeet: formatAmount(searchSuggestion?.totalSquareFootage) ?? '',
      },
      agent: {
        Company: `${searchSuggestion?.companyName ? companyName : ''}`,
        Closed: `${commonAttrib?.closed}`,
        Sold: commonAttrib?.sold,
        Financed: commonAttrib?.financed,
        'Last Closing': commonAttrib?.lastClosing
          ? `${commonAttrib?.lastClosing} ago`
          : '',
      },
      transaction: {
        SquareFootage: searchSuggestion?.totalSquareFootageDeal
          ? `${parseInt(
              searchSuggestion?.totalSquareFootageDeal,
              10
            ).toLocaleString()} SF`
          : '',
        AssetType: `${searchSuggestion?.assetType ?? ''}`,
        Address: `${searchSuggestion?.address ?? ''}`,
        lastClosing: commonAttrib?.lastClosing
          ? `${commonAttrib?.lastClosing} ago`
          : '',
      },
    };
    return (
      <>
        {lowerCasedsuggestionType === 'transaction' ? (
          <>
            <Box sx={{ display: 'flex' }}>
              {configuration?.transaction?.SquareFootage && (
                <S.StatListTitle style={{ marginRight: 10 }}>
                  {configuration?.transaction?.SquareFootage}
                </S.StatListTitle>
              )}
              {configuration?.transaction?.AssetType && (
                <S.StatListValue>
                  {configuration?.transaction?.AssetType}
                </S.StatListValue>
              )}
            </Box>
            {configuration.transaction.Address && (
              <S.StatListValue>
                {configuration.transaction.Address}
              </S.StatListValue>
            )}
            {configuration.transaction.lastClosing && (
              <S.StatListValue>
                {configuration.transaction.lastClosing}
              </S.StatListValue>
            )}
          </>
        ) : (
          <>
            {Object?.entries(
              configuration[lowerCasedsuggestionType as keyof IConfiguration] ??
                {}
            )?.map(([key, value], index) => {
              return (
                <>
                  {value !== '$0' && value !== '0' && value !== '' && (
                    <StatItem
                      key={`${key}-${value}-${index + 1}`}
                      title={`${key}`}
                      value={`${value} `}
                    />
                  )}
                </>
              );
            })}
          </>
        )}
      </>
    );
  };

  const typenames: Record<string, string> = {
    Company: 'Agency',
    Broker: 'Agent',
    Deal: 'Transaction',
  };

  const suggestionName = searchSuggestion?.title || searchSuggestion?.name;
  const ellipsedSuggestionName =
    suggestionName?.length > 49
      ? `${suggestionName?.substring(0, 49)}...`
      : suggestionName;
  const image = searchSuggestion?.mainImage || searchSuggestion?.thumbnail;

  const type =
    typenames[searchSuggestion?.type || searchSuggestion.__typename || ''] ??
    (searchSuggestion?.type || searchSuggestion?.__typename);

  return (
    <Link
      href={getUrlForPage(
        type as
          | 'agent'
          | 'broker'
          | 'agency'
          | 'comapny'
          | 'lender'
          | 'transaction'
          | 'deal',
        searchSuggestion?.slug,
        searchSuggestion?.feeds && searchSuggestion?.feeds[0],
        searchSuggestion?.transactionType
        // searchSuggestion?.submission?.feedId
      )}
      passHref
    >
      <S.StyledLink>
        <S.SuggestionBoxWrapper {...rest}>
          <RenderIf condition={ellipsedSuggestionName}>
            <Image
              alt="Image about the searched item. Can be from a transaction, broker or agency."
              src={image || '/assets/Dummy/120x120.png'}
              width="90%"
              height="90%"
            />
          </RenderIf>
          <S.SuggestionContent>
            <Typography
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden',
              }}
            >
              {suggestionName}
            </Typography>
            <SuggestionStats suggestionType={type as string} />
          </S.SuggestionContent>
          {showSearchResultType && (
            <Typography variant="bodySmall" component="p">
              {type}
            </Typography>
          )}
        </S.SuggestionBoxWrapper>
      </S.StyledLink>
    </Link>
  );
};
