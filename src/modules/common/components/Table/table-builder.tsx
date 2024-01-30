import { Box, Typography } from '@mui/material';
import __ from 'lodash';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import type { Broker, Company } from '@/__generated__/types.d';
import theme from '@/theme';
import { getUrlForPage } from '@/utils/urlMapper';

import { BrokerAvatarLink } from '../BrokerAvatarLink';
import { RenderIf } from '../RenderIf';
import * as S from './styles';

type CellGeneratorFn = (
  param: any,
  url?: string,
  type?: string,
  key?: string
) => JSX.Element;
type Cell = Exclude<keyof TablePossibleEntities, 'id' | 'type' | 'entity'>;

const EmptyCell = <Typography variant="text">#</Typography>;

const slugify = (str: string) => {
  // Convert the string to lower case and replace spaces with hyphens
  const slug = str
    .toLowerCase()
    .replace(/\s+/g, '-')
    // Remove special characters and replace them with an empty string
    .replace(/[^a-z0-9-]+/g, '')
    // Remove consecutive hyphens and replace them with a single hyphen
    .replace(/-{2,}/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');

  return slug;
};

const generateDateCellValue: CellGeneratorFn = (
  dateISO: string,
  _,
  type?: string
) => {
  const dateMoment = moment(dateISO);
  let diffFromNow;
  let date;

  if (dateMoment.isValid()) {
    diffFromNow = dateMoment.clone().fromNow(true) || 'NA';
    date = dateMoment.clone().format('L');
  } else {
    diffFromNow = 'N/A';
    date = 'N/A';
  }

  return (
    <>
      {type !== 'ranking' && type !== 'agentRanking' && (
        <Typography variant="text" component="p" width="max-content">
          {diffFromNow}
        </Typography>
      )}
      <Typography
        variant={
          type === 'ranking' || type === 'agentRanking' ? 'text' : 'bodySmall'
        }
        component="p"
        width="max-content"
      >
        {date}
      </Typography>
    </>
  );
};

const generateImageCellValue: CellGeneratorFn = (
  value: string,
  url?: string
) => {
  const images = ['jpeg', 'jpg', 'gif', 'png'];
  const videos = ['mp4', '3gp', 'ogg'];
  return (
    <RenderIf condition={value}>
      <Link href={url ?? '/'} passHref>
        <a>
          <S.ImageWrapper className="agency-photo">
            <RenderIf
              condition={
                value && videos.some((el) => (value as string).includes(el))
              }
            >
              <video
                src={value as string}
                width="100%"
                height="100%"
                style={{ maxHeight: '100px' }}
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
              />
            </RenderIf>
            <RenderIf
              condition={
                value && images.some((el) => (value as string).includes(el))
              }
            >
              <Image
                src={value}
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                priority
              />
            </RenderIf>
          </S.ImageWrapper>
        </a>
      </Link>
    </RenderIf>
  );
};

const generateTextCellValue: CellGeneratorFn = (text, url, _, key) => {
  if (text) {
    return url && key && ['ppsf', 'price'].includes(key) ? (
      <Link href={url} passHref>
        <Typography variant="text" component="p">
          {text}
        </Typography>
      </Link>
    ) : (
      <Typography variant="text" component="p">
        {text}
      </Typography>
    );
  }
  return EmptyCell;
};

const generateNameCellValue: CellGeneratorFn = (
  text: string,
  url?: string,
  type?: string
) => {
  if (text) {
    return (
      <Box>
        <Typography variant="text" component="p">
          {text}
        </Typography>
        {type === 'agentRanking' && url && (
          <Link href={url} passHref>
            <Box
              component="a"
              sx={{ textDecoration: 'none', color: theme.palette.black.main }}
            >
              <Typography fontSize={14}>View Profile</Typography>
            </Box>
          </Link>
        )}
      </Box>
    );
  }

  return EmptyCell;
};

const generateAddressCellValue: CellGeneratorFn = (
  text: string,
  url?: string
) => {
  if (text) {
    return (
      <Box>
        {(url && (
          <>
            <Link href={url} passHref>
              <Typography
                variant="text"
                component="p"
                width={150}
                sx={{ cursor: 'pointer' }}
              >
                {text}
              </Typography>
            </Link>
            <Link href={url} passHref>
              <Box
                component="a"
                sx={{ textDecoration: 'none', color: theme.palette.black.main }}
              >
                <Typography fontSize={14}>View Deal</Typography>
              </Box>
            </Link>
          </>
        )) || (
          <>
            <Typography variant="text" component="p" width={150}>
              {text}
            </Typography>
          </>
        )}
      </Box>
    );
  }

  return EmptyCell;
};

const generateStateCellValue: CellGeneratorFn = (text: string) => {
  if (text) {
    return (
      <Link href={`/states/${slugify(text)}`} passHref>
        <Box>
          <Typography
            variant="text"
            component="p"
            width={150}
            sx={{ cursor: 'pointer' }}
          >
            {text}
          </Typography>
          <Box
            component="a"
            sx={{ textDecoration: 'none', color: theme.palette.black.main }}
          >
            <Typography sx={{ cursor: 'pointer' }} fontSize={14}>
              View State Feed
            </Typography>
          </Box>
        </Box>
      </Link>
    );
  }

  return EmptyCell;
};

const generateAssetCellValue: CellGeneratorFn = (text: string) => {
  if (text) {
    return (
      <Link href={`/property-type/${slugify(text)}`} passHref>
        <Box>
          <Typography
            variant="text"
            component="p"
            width={150}
            sx={{ cursor: 'pointer' }}
          >
            {text}
          </Typography>
          <Box
            component="a"
            sx={{ textDecoration: 'none', color: theme.palette.black.main }}
          >
            <Typography sx={{ cursor: 'pointer' }} fontSize={14}>
              View {text} Feed
            </Typography>
          </Box>
        </Box>
      </Link>
    );
  }

  return EmptyCell;
};

const generateRankCellValue: CellGeneratorFn = (text: string) => {
  if (text) {
    return (
      <Typography variant="h4" component="p" textAlign="center">
        {text}.
      </Typography>
    );
  }

  return EmptyCell;
};

const generateAgentsCellValue: CellGeneratorFn = (
  value: Broker[],
  url?: string
) => {
  const numberOfInvolved = value.length;

  if (!numberOfInvolved) {
    return EmptyCell;
  }

  return (
    <S.MultipleImagesCell>
      <RenderIf condition={!!value[0]}>
        <BrokerAvatarLink broker={value[0]} />
      </RenderIf>
      <RenderIf condition={!!value[1]}>
        <BrokerAvatarLink broker={value[1]} />
      </RenderIf>
      <RenderIf condition={numberOfInvolved > 2}>
        <BrokerAvatarLink text={`${numberOfInvolved - 2}+`} link={url} />
      </RenderIf>
    </S.MultipleImagesCell>
  );
};

const generateAgenciesCellValue: CellGeneratorFn = (values: Company[]) => {
  // const numberOfInvolved = values.length;

  if (!values || !values.length || !values[0]?.mainImage) {
    return EmptyCell;
  }

  return (
    <>
      <S.MultipleImagesCell>
        {/* {generateImageCellValue(value[0].mainImage)}
        <RenderIf condition={numberOfInvolved > 1}>
          <BrokerAvatarLink text={`${numberOfInvolved - 1}+`} />
        </RenderIf> */}
        {values?.map((value) =>
          generateImageCellValue(
            value.mainImage,
            getUrlForPage('agency', value.slug)
          )
        )}
      </S.MultipleImagesCell>
    </>
  );
};

export const buildRows = (
  rows: TableRows,
  columnKeys: TableColumnKeys
): Row[] => {
  const keyByValueGenerator: Record<Cell, CellGeneratorFn> = {
    imageUrl: generateImageCellValue,
    logoUrl: generateImageCellValue,

    dealDate: generateDateCellValue,
    thumbnail: generateImageCellValue,

    agents: generateAgentsCellValue,
    agencies: generateAgenciesCellValue,

    address: generateAddressCellValue,
    position: generateRankCellValue,
    asset: generateAssetCellValue,
    ppsf: generateTextCellValue,
    price: generateTextCellValue,
    sf: generateTextCellValue,
    state: generateStateCellValue,
    name: generateNameCellValue,
    volume: generateTextCellValue,
    sales: generateTextCellValue,
    loans: generateTextCellValue,
    lease: generateTextCellValue,
    closed: generateTextCellValue,
    area: generateTextCellValue,
  };

  const rowsOrderBy = columnKeys.map((colKey) => `dataKey.${colKey as string}`);

  return rows.map((row) => {
    if (!row.id) {
      return {} as Row;
    }

    const rowId = row.id;
    const rowUrl = row.url;
    const rowType: 'ranking' | 'activity' | 'agentRanking' | '' = row.type;

    const values = __.chain(row)
      .map((value, key) => {
        if (!columnKeys.includes(key as keyof TablePossibleEntities)) {
          return null;
        }

        const valueGenerator = keyByValueGenerator[
          key as Cell
        ] as CellGeneratorFn;
        return {
          dataKey: key,
          value: valueGenerator(value, rowUrl, rowType, key),
        };
      })
      .filter(Boolean)
      .orderBy(rowsOrderBy)
      .value() as Row['values'];

    const tableRow: Row = {
      id: rowId,
      values,
    };

    return tableRow;
  });
};
