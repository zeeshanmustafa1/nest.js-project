type Statistics = {
  label: string;
  value: string | null;
};

type Axis = {
  x: string | Date;
  y: string;
  mainImage?: string;
  feed?: string;
  transactionType?: string;
  slug?: string;
};

interface ChartData {
  name: string;
  charData: Array<Axis>;
}

type ColorConfig = {
  color: string;
};

interface ChartColors {
  deals?: ColorConfig;
  sale?: ColorConfig;
  agents?: ColorConfig;
  lease?: ColorConfig;
  loan?: ColorConfig;
  volume?: ColorConfig;
}
