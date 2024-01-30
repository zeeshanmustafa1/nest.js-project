import type { LeaderBoard } from '@/__generated__/types.d';

export const getMiniLeaderBoardData = (
  leaderBoardResolver: LeaderBoard | undefined | null
): IBrokerRow[] => [
  {
    title: 'Hot',
    description: 'View top 50 most active brokers this quarter by deal volume.',
    brokers: leaderBoardResolver?.hotDeals,
  },
  {
    title: 'Unicorns',
    description: 'View top 50 brokers with the highest volume of all time.',
    brokers: leaderBoardResolver?.unicorn,
  },
  {
    title: 'Rising Star',
    description:
      'View the top 50 new brokers with the highest volume this quarter.',
    brokers: leaderBoardResolver?.risingTalent,
  },
];

export const getLeaderBoardSlidesData = (
  leaderBoardResolver: LeaderBoard | undefined | null
): ILeaderBoardSlide[] => [
  {
    title: 'The Hot List',
    subtitle: 'Top traders this quarter by USD.',
    icon: '/assets/Icon/Colored/Fire.svg',
    brokers: leaderBoardResolver?.hotDeals?.slice(0, 15),
  },
  {
    title: 'Rising Talent',
    subtitle: 'Greatest % increase in USD / Quarter.',
    icon: '/assets/Icon/Colored/Leaf.svg',
    brokers: leaderBoardResolver?.risingTalent?.slice(0, 15),
  },
  {
    title: 'The Unicorns',
    subtitle: 'All time highest volume recorded',
    icon: '/assets/Icon/Colored/Unicorn.svg',
    brokers: leaderBoardResolver?.unicorn?.slice(0, 15),
  },
  {
    title: 'Deal Junkies',
    subtitle: 'All time most transactions closed',
    icon: '/assets/Icon/Colored/DealJunkie.svg',
    brokers: leaderBoardResolver?.dealJunkie?.slice(0, 15),
  },
  {
    title: 'Whales',
    subtitle: 'All time most Square Feet closed',
    icon: '/assets/Icon/Colored/Whale.svg',
    brokers: leaderBoardResolver?.whales?.slice(0, 15),
  },
  {
    title: 'The Loan Sharks',
    subtitle: 'All time most loans closed',
    icon: '/assets/Icon/Colored/Shark.svg',
    brokers: leaderBoardResolver?.loanShark?.slice(0, 15),
  },
  {
    title: 'Lease Beasts',
    subtitle: 'All time most leases closed',
    icon: '/assets/Icon/Colored/LeaseBeast.svg',
    brokers: leaderBoardResolver?.leaseShark?.slice(0, 15),
  },
];
