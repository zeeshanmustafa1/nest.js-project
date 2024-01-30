export const createSlugArr = (slug: string) =>
  slug.split('/').filter((path) => path !== '');

export const formatAmount = (value: string) => {
  const val: number = parseInt(value, 10);

  return `${Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(val)}`;
};

export const generateElipsesDescription = (description?: string): string => {
  const tempDesc = description ?? '';

  // Base Case 1: if the string ends with a space, add elipses and return
  if (tempDesc[tempDesc.length - 1] === ' ') {
    return `${tempDesc?.slice(0, tempDesc.length - 1)}...`;
  }

  // Base Case 2: if the string is empty or has one character, add elipses and return
  if (tempDesc.length <= 1) {
    return `...`;
  }

  // Recursive Function to find last letter with no space
  return generateElipsesDescription(tempDesc?.slice(0, tempDesc.length - 1));
};

export const getLeaderboardIcon = (tag: string): string => {
  if (tag?.toLowerCase().includes('junkie')) {
    return '/assets/Icon/Colored/DealJunkie.svg';
  }
  if (tag?.toLowerCase().includes('hot')) {
    return '/assets/Icon/Colored/Fire.svg';
  }
  if (tag?.toLowerCase().includes('talent')) {
    return '/assets/Icon/Colored/Leaf.svg';
  }
  if (tag?.toLowerCase().includes('unicorn')) {
    return '/assets/Icon/Colored/Unicorn.svg';
  }

  return '';
};
