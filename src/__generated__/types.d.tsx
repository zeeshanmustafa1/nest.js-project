import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  ISO8601DateTime: any;
  Scalar: any;
};

export type AgentLeaderBoard = {
  __typename?: "AgentLeaderBoard";
  dealJunkie?: Maybe<Array<Broker>>;
  hotDeals?: Maybe<Array<Broker>>;
  leaseShark?: Maybe<Array<Broker>>;
  loanShark?: Maybe<Array<Broker>>;
  risingTalent?: Maybe<Array<Broker>>;
  unicorn?: Maybe<Array<Broker>>;
  whales?: Maybe<Array<Broker>>;
};

export type AgentSearch = {
  __typename?: "AgentSearch";
  allAgents?: Maybe<BrokerConnection>;
  allCities?: Maybe<Array<Scalars["String"]>>;
  allStates?: Maybe<Array<Scalars["String"]>>;
};

export type AgentSearchAllAgentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Article = {
  __typename?: "Article";
  address?: Maybe<Scalars["String"]>;
  amountSuggested?: Maybe<Scalars["String"]>;
  approvalTime: Scalars["ISO8601DateTime"];
  articleDescription?: Maybe<Scalars["String"]>;
  articleLink?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  citySuggested?: Maybe<Scalars["String"]>;
  hide?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  imageLink?: Maybe<Scalars["String"]>;
  isPotentialDuplicate?: Maybe<Scalars["Boolean"]>;
  outlet?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["String"]>;
  researchStatus?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Author = {
  __typename?: "Author";
  createdAt: Scalars["ISO8601DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
};

export type Blog = {
  __typename?: "Blog";
  author: Author;
  createdAt: Scalars["ISO8601DateTime"];
  deals?: Maybe<Array<Deal>>;
  description?: Maybe<Scalars["String"]>;
  htmlContent?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  profiles?: Maybe<Array<Broker>>;
  slug?: Maybe<Scalars["String"]>;
  status: Scalars["String"];
  tags?: Maybe<Array<Tag>>;
  title: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
};

export type Broker = {
  __typename?: "Broker";
  agencyDealsTogetherSentence?: Maybe<Scalars["String"]>;
  agencyFirstDealSentence?: Maybe<Scalars["String"]>;
  agencyFirstDealTogether?: Maybe<Scalars["String"]>;
  agencyLargestDealSaleTogether?: Maybe<Scalars["BigInt"]>;
  agencyLargestDealSentence?: Maybe<Scalars["String"]>;
  agencyLastDealSentence?: Maybe<Scalars["String"]>;
  agencyLastDealTogether?: Maybe<Scalars["String"]>;
  agencyNumberOfDealsTogether?: Maybe<Scalars["Int"]>;
  assetClasses?: Maybe<Array<Scalars["String"]>>;
  assetTypeWithMostDeals?: Maybe<Scalars["String"]>;
  assetTypesDropdown?: Maybe<Array<Scalars["String"]>>;
  bio?: Maybe<Scalars["String"]>;
  bioSummary?: Maybe<Scalars["String"]>;
  className?: Maybe<Scalars["String"]>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars["Int"]>;
  companyName?: Maybe<Scalars["String"]>;
  createdAt: Scalars["ISO8601DateTime"];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars["Int"]>;
  dealRanking?: Maybe<Array<Deal>>;
  deals?: Maybe<Array<Deal>>;
  dealsCount?: Maybe<Scalars["Int"]>;
  dealsTogetherSentence?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  facebookHandle?: Maybe<Scalars["String"]>;
  fellowWithMostDeals?: Maybe<Scalars["String"]>;
  firstDealSentence?: Maybe<Scalars["String"]>;
  firstDealTogether?: Maybe<Scalars["String"]>;
  googleplusHandle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  instagramHandle?: Maybe<Scalars["String"]>;
  joiningDate?: Maybe<Scalars["ISO8601DateTime"]>;
  largestDeal?: Maybe<Scalars["BigInt"]>;
  largestDealSaleTogether?: Maybe<Scalars["BigInt"]>;
  largestDealSentence?: Maybe<Scalars["String"]>;
  lastClosing?: Maybe<Scalars["String"]>;
  lastDeal?: Maybe<Deal>;
  lastDealSentence?: Maybe<Scalars["String"]>;
  lastDealTogether?: Maybe<Scalars["String"]>;
  lastQuarterDealsCount?: Maybe<Scalars["Int"]>;
  leaderBoardTags?: Maybe<Array<Scalars["String"]>>;
  linkedinHandle?: Maybe<Scalars["String"]>;
  mainImage?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  numberOfDealsTogether?: Maybe<Scalars["Int"]>;
  phone?: Maybe<Scalars["String"]>;
  pinterestHandle?: Maybe<Scalars["String"]>;
  relationships?: Maybe<Array<Broker>>;
  slug?: Maybe<Scalars["String"]>;
  stateTypesDropdown?: Maybe<Array<Scalars["String"]>>;
  stateWithMostDeals?: Maybe<Scalars["String"]>;
  states?: Maybe<Array<Scalars["String"]>>;
  status?: Maybe<Scalars["Int"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  totalFinanced?: Maybe<Scalars["BigInt"]>;
  totalLeaseDeals?: Maybe<Scalars["Int"]>;
  totalLeased?: Maybe<Scalars["BigInt"]>;
  totalLoanAmount?: Maybe<Scalars["BigInt"]>;
  totalLoanDeals?: Maybe<Scalars["Int"]>;
  totalRelationships?: Maybe<Scalars["Int"]>;
  totalSaleDeals?: Maybe<Scalars["Int"]>;
  totalSold?: Maybe<Scalars["BigInt"]>;
  totalSquareFootage?: Maybe<Scalars["BigInt"]>;
  totalVolume?: Maybe<Scalars["BigInt"]>;
  transactionTypes?: Maybe<Array<Scalars["String"]>>;
  transactionTypesDropdown?: Maybe<Array<Scalars["String"]>>;
  twitterHandle?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["ISO8601DateTime"];
  vimeoHandle?: Maybe<Scalars["String"]>;
  websiteUrl?: Maybe<Scalars["String"]>;
  wpId?: Maybe<Scalars["String"]>;
  youtubeHandle?: Maybe<Scalars["String"]>;
};

export type BrokerDealsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
};

/** The connection type for Broker. */
export type BrokerConnection = {
  __typename?: "BrokerConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BrokerEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Broker>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type BrokerEdge = {
  __typename?: "BrokerEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Broker>;
};

export type BrokerRelationship = {
  __typename?: "BrokerRelationship";
  agencies?: Maybe<CompanyConnection>;
  agents?: Maybe<BrokerConnection>;
  lenders?: Maybe<CompanyConnection>;
};

export type BrokerRelationshipAgenciesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BrokerRelationshipAgentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BrokerRelationshipLendersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Company = {
  __typename?: "Company";
  address?: Maybe<Scalars["String"]>;
  agentRanking?: Maybe<Array<Broker>>;
  agents?: Maybe<Array<Broker>>;
  assetTypeWithMostDeals?: Maybe<Scalars["String"]>;
  assetTypesDropdown?: Maybe<Array<Scalars["String"]>>;
  contactEmail?: Maybe<Scalars["String"]>;
  contactPhone?: Maybe<Scalars["String"]>;
  createdAt: Scalars["ISO8601DateTime"];
  dealRanking?: Maybe<Array<Deal>>;
  deals?: Maybe<Array<Deal>>;
  dealsCount?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  facebookUrl?: Maybe<Scalars["String"]>;
  fellowWithMostDeals?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  instagramUrl?: Maybe<Scalars["String"]>;
  lastClosing?: Maybe<Scalars["String"]>;
  lastDeal?: Maybe<Deal>;
  leaseDealsCount?: Maybe<Scalars["BigInt"]>;
  linkedinUrl?: Maybe<Scalars["String"]>;
  logoUrl?: Maybe<Scalars["String"]>;
  mainImage?: Maybe<Scalars["String"]>;
  profiles?: Maybe<Array<Broker>>;
  profilesCount?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["String"]>;
  stateTypesDropdown?: Maybe<Array<Scalars["String"]>>;
  stateWithMostDeals?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  totalFinanced?: Maybe<Scalars["BigInt"]>;
  totalLeased?: Maybe<Scalars["BigInt"]>;
  totalSold?: Maybe<Scalars["BigInt"]>;
  totalSquareFootage?: Maybe<Scalars["BigInt"]>;
  totalVolume?: Maybe<Scalars["BigInt"]>;
  transactionTypesDropdown?: Maybe<Array<Scalars["String"]>>;
  twitterUrl?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["ISO8601DateTime"];
  websiteUrl?: Maybe<Scalars["String"]>;
  wpId?: Maybe<Scalars["String"]>;
  youtubeUrl?: Maybe<Scalars["String"]>;
};

export type CompanyAgentRankingArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
};

export type CompanyAgentsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
  sortBy?: InputMaybe<Scalars["String"]>;
};

export type CompanyDealsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
};

/** The connection type for Company. */
export type CompanyConnection = {
  __typename?: "CompanyConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CompanyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Company>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type CompanyEdge = {
  __typename?: "CompanyEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Company>;
};

export type CompanyStatistic = {
  __typename?: "CompanyStatistic";
  assetClassPercentage: Array<Array<Scalars["Scalar"]>>;
  locationPercentage: Array<Array<Scalars["Scalar"]>>;
};

export type ContactSupport = {
  __typename?: "ContactSupport";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
};

/** Autogenerated input type of CreateContactSupport */
export type CreateContactSupportInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  message: Scalars["String"];
  name: Scalars["String"];
  status?: InputMaybe<Scalars["Int"]>;
};

/** Autogenerated input type of CreateDealSession */
export type CreateDealSessionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
};

/** Autogenerated input type of CreateSuggestion */
export type CreateSuggestionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  message: Scalars["String"];
  name: Scalars["String"];
};

/** Autogenerated return type of CreateSuggestion. */
export type CreateSuggestionPayload = {
  __typename?: "CreateSuggestionPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<Scalars["String"]>>;
  suggestion?: Maybe<Suggestion>;
};

/** Autogenerated input type of CreateTestimonial */
export type CreateTestimonialInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  content: Scalars["String"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  imageUrl?: InputMaybe<Scalars["String"]>;
  lastName: Scalars["String"];
  state: Scalars["String"];
  titleAndCompany?: InputMaybe<Scalars["String"]>;
};

/** Autogenerated return type of CreateTestimonial. */
export type CreateTestimonialPayload = {
  __typename?: "CreateTestimonialPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  errors?: Maybe<Array<Scalars["String"]>>;
  testimonial?: Maybe<Testimonial>;
};

export type Customer = {
  __typename?: "Customer";
  authId?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  signUpToOurNewsletter?: Maybe<Scalars["Boolean"]>;
  stripeCustomerId?: Maybe<Scalars["String"]>;
  submissionsCount?: Maybe<Scalars["Int"]>;
  totalAmountSpent?: Maybe<Scalars["Float"]>;
};

export type Deal = {
  __typename?: "Deal";
  acquisitionAmount?: Maybe<Scalars["Int"]>;
  address?: Maybe<Scalars["String"]>;
  agencyCount?: Maybe<Scalars["Int"]>;
  amountRaised?: Maybe<Scalars["BigInt"]>;
  article?: Maybe<Article>;
  askingPrice?: Maybe<Scalars["Float"]>;
  askingRentPsf?: Maybe<Scalars["String"]>;
  assetType?: Maybe<Scalars["String"]>;
  brokerName?: Maybe<Scalars["String"]>;
  brokersCount?: Maybe<Scalars["Int"]>;
  caption?: Maybe<Scalars["String"]>;
  closingDate?: Maybe<Scalars["ISO8601DateTime"]>;
  companies?: Maybe<Array<Company>>;
  comparables?: Maybe<DealConnection>;
  createdAt: Scalars["ISO8601DateTime"];
  customer?: Maybe<Customer>;
  dealType?: Maybe<Scalars["String"]>;
  dealsInfo?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  entryDate?: Maybe<Scalars["String"]>;
  exchange?: Maybe<Scalars["String"]>;
  feeds?: Maybe<Array<Scalars["String"]>>;
  hotelKeys?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  instagramId?: Maybe<Scalars["String"]>;
  lastClosing?: Maybe<Scalars["String"]>;
  leaseTerms?: Maybe<Scalars["String"]>;
  leaseType?: Maybe<Scalars["String"]>;
  lenders?: Maybe<Array<Company>>;
  loanAmount?: Maybe<Scalars["Float"]>;
  loanTerms?: Maybe<Scalars["String"]>;
  loanType?: Maybe<Scalars["String"]>;
  mainImage?: Maybe<Scalars["String"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  parties?: Maybe<Scalars["String"]>;
  post?: Maybe<Post>;
  pricePerSquareFoot?: Maybe<Scalars["BigInt"]>;
  profiles?: Maybe<Array<Broker>>;
  properties?: Maybe<Array<Property>>;
  recentPress?: Maybe<Scalars["String"]>;
  salePrice?: Maybe<Scalars["BigInt"]>;
  slug?: Maybe<Scalars["String"]>;
  submission?: Maybe<Submission>;
  ticker?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  totalDeals?: Maybe<Scalars["BigInt"]>;
  totalRaised?: Maybe<Scalars["BigInt"]>;
  totalSquareFootageDeal?: Maybe<Scalars["BigInt"]>;
  transactionType?: Maybe<Scalars["String"]>;
  valuation?: Maybe<Scalars["BigInt"]>;
};

export type DealComparablesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** The connection type for Deal. */
export type DealConnection = {
  __typename?: "DealConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DealEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Deal>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type DealEdge = {
  __typename?: "DealEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Deal>;
};

export type DealVolume = {
  __typename?: "DealVolume";
  assetClassPercentage: Array<Array<Scalars["Scalar"]>>;
  loanVolume: Array<Deal>;
  locationPercentage: Array<Array<Scalars["Scalar"]>>;
  salesVolume: Array<Deal>;
};

export type Graph = {
  __typename?: "Graph";
  deals?: Maybe<Array<Array<Maybe<Scalars["Scalar"]>>>>;
  lease?: Maybe<Array<Array<Maybe<Scalars["Scalar"]>>>>;
  loan?: Maybe<Array<Array<Maybe<Scalars["Scalar"]>>>>;
  sale?: Maybe<Array<Array<Maybe<Scalars["Scalar"]>>>>;
  volume?: Maybe<Array<Array<Maybe<Scalars["Scalar"]>>>>;
};

export type LeaderBoard = {
  __typename?: "LeaderBoard";
  dealJunkie?: Maybe<Array<Broker>>;
  hotDeals?: Maybe<Array<Broker>>;
  leaseShark?: Maybe<Array<Broker>>;
  loanShark?: Maybe<Array<Broker>>;
  risingTalent?: Maybe<Array<Broker>>;
  unicorn?: Maybe<Array<Broker>>;
  whales?: Maybe<Array<Broker>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createContactSupport?: Maybe<ContactSupport>;
  createDealSession?: Maybe<DealConnection>;
  createSuggestion?: Maybe<CreateSuggestionPayload>;
  createTestimonial?: Maybe<CreateTestimonialPayload>;
  sendEmail?: Maybe<SendEmailMutationPayload>;
};

export type MutationCreateContactSupportArgs = {
  input: CreateContactSupportInput;
};

export type MutationCreateDealSessionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  input: CreateDealSessionInput;
  last?: InputMaybe<Scalars["Int"]>;
};

export type MutationCreateSuggestionArgs = {
  input: CreateSuggestionInput;
};

export type MutationCreateTestimonialArgs = {
  input: CreateTestimonialInput;
};

export type MutationSendEmailArgs = {
  input: SendEmailMutationInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  article?: Maybe<Article>;
  caption?: Maybe<Scalars["String"]>;
  customer?: Maybe<Customer>;
  deal?: Maybe<Deal>;
  status?: Maybe<Scalars["Int"]>;
  submission?: Maybe<Submission>;
};

export type Property = {
  __typename?: "Property";
  assetType?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  displayAddress?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  squareFootage?: Maybe<Scalars["BigInt"]>;
  state?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  agentLeaderBoards?: Maybe<AgentLeaderBoard>;
  agentsSearch?: Maybe<AgentSearch>;
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Blog>>;
  broker?: Maybe<Broker>;
  brokerRelationships?: Maybe<BrokerRelationship>;
  brokerStatisticsGraph: DealVolume;
  brokerTransactions?: Maybe<Array<Deal>>;
  brokers: BrokerConnection;
  companies: CompanyConnection;
  company?: Maybe<Company>;
  companyMarket?: Maybe<Array<Company>>;
  companyStatisticsGraph: CompanyStatistic;
  companyTransactions: Array<Deal>;
  contactSupports: Array<ContactSupport>;
  deal?: Maybe<Deal>;
  dealComparables?: Maybe<Array<Deal>>;
  deals?: Maybe<Array<Deal>>;
  graphs?: Maybe<Graph>;
  leaderBoardResolver?: Maybe<LeaderBoard>;
  recentDeal?: Maybe<RecentDeal>;
  recentViewedDeals?: Maybe<DealConnection>;
  search: SearchResult;
  tags?: Maybe<Array<Tag>>;
  testimonial?: Maybe<Testimonial>;
  testimonials?: Maybe<TestimonialConnection>;
  topTenCompanyAgents: Array<Broker>;
  transfers?: Maybe<DealConnection>;
};

export type QueryAgentLeaderBoardsArgs = {
  slug: Scalars["String"];
};

export type QueryAgentsSearchArgs = {
  category?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  term?: InputMaybe<Scalars["String"]>;
};

export type QueryBlogArgs = {
  slug: Scalars["ID"];
};

export type QueryBlogsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  tagSlugs?: InputMaybe<Array<Scalars["String"]>>;
};

export type QueryBrokerArgs = {
  slug: Scalars["ID"];
};

export type QueryBrokerRelationshipsArgs = {
  limit: Scalars["Int"];
  page: Scalars["Int"];
  slug: Scalars["String"];
};

export type QueryBrokerStatisticsGraphArgs = {
  slug: Scalars["String"];
};

export type QueryBrokerTransactionsArgs = {
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Array<Scalars["String"]>>;
  limit: Scalars["Int"];
  page: Scalars["Int"];
  slug: Scalars["ID"];
  sortBy?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryBrokersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  companyType: Scalars["String"];
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  loanAmount?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["Int"]>;
  priceRange?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryCompanyArgs = {
  companyType: Scalars["String"];
  slug: Scalars["String"];
};

export type QueryCompanyMarketArgs = {
  companyType: Scalars["String"];
  sortBy?: InputMaybe<Scalars["String"]>;
};

export type QueryCompanyStatisticsGraphArgs = {
  companyType: Scalars["String"];
  slug: Scalars["String"];
};

export type QueryCompanyTransactionsArgs = {
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Array<Scalars["String"]>>;
  companyType: Scalars["String"];
  limit: Scalars["Int"];
  page: Scalars["Int"];
  slug: Scalars["ID"];
  sortBy?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryContactSupportsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryDealArgs = {
  slug: Scalars["ID"];
};

export type QueryDealComparablesArgs = {
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Array<Scalars["String"]>>;
  limit: Scalars["Int"];
  page: Scalars["Int"];
  slug: Scalars["ID"];
  sortBy?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryDealsArgs = {
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Scalars["String"]>;
  dateRange?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  priceRange?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type QueryGraphsArgs = {
  companyType: Scalars["String"];
  slug: Scalars["String"];
};

export type QueryLeaderBoardResolverArgs = {
  state?: InputMaybe<Scalars["String"]>;
};

export type QueryRecentDealArgs = {
  limit: Scalars["Int"];
  state?: InputMaybe<Scalars["String"]>;
};

export type QueryRecentViewedDealsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QuerySearchArgs = {
  term?: InputMaybe<Scalars["String"]>;
};

export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryTestimonialArgs = {
  slug: Scalars["ID"];
};

export type QueryTestimonialsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  state?: InputMaybe<Scalars["String"]>;
};

export type QueryTopTenCompanyAgentsArgs = {
  companyType: Scalars["String"];
  slug: Scalars["ID"];
  sortBy?: InputMaybe<Scalars["String"]>;
};

export type QueryTransfersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  state: Scalars["String"];
};

export type RecentDeal = {
  __typename?: "RecentDeal";
  recentLeases?: Maybe<Array<Deal>>;
  recentLoans?: Maybe<Array<Deal>>;
  recentSales?: Maybe<Array<Deal>>;
  states?: Maybe<Array<Scalars["String"]>>;
};

/** The result searching on the main homepage */
export type SearchResult = {
  __typename?: "SearchResult";
  agencies: Array<Company>;
  agents: Array<Broker>;
  deals: Array<Deal>;
  lenders: Array<Company>;
};

/** Autogenerated input type of SendEmailMutation */
export type SendEmailMutationInput = {
  about: Scalars["String"];
  brokerSlugs: Array<Scalars["String"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]>;
  dealSlug?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  message: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
};

/** Autogenerated return type of SendEmailMutation. */
export type SendEmailMutationPayload = {
  __typename?: "SendEmailMutationPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  errorMessage?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type Submission = {
  __typename?: "Submission";
  amountSpent?: Maybe<Scalars["Float"]>;
  approvalTime?: Maybe<Scalars["ISO8601DateTime"]>;
  buyerName?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  collabUsername?: Maybe<Scalars["String"]>;
  customer?: Maybe<Customer>;
  displayAddress?: Maybe<Scalars["String"]>;
  dispute?: Maybe<Scalars["String"]>;
  featuresCount?: Maybe<Scalars["Int"]>;
  feedId?: Maybe<Scalars["Int"]>;
  firstEmailStatus?: Maybe<Scalars["Boolean"]>;
  founders?: Maybe<Scalars["String"]>;
  funFact?: Maybe<Scalars["String"]>;
  fundingStage?: Maybe<Scalars["String"]>;
  generatedCaption?: Maybe<Scalars["String"]>;
  hiddenInvoiceId?: Maybe<Scalars["String"]>;
  hiddenPaymentStatus?: Maybe<Scalars["Int"]>;
  hide?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  image?: Maybe<Scalars["String"]>;
  landlord?: Maybe<Scalars["String"]>;
  lenderName?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  logoUrl?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  peopleList?: Maybe<Scalars["String"]>;
  refundStatus?: Maybe<Scalars["Int"]>;
  sellerName?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  tenant?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Float"]>;
  ventureBuyer?: Maybe<Scalars["String"]>;
  ventureCompanyHq?: Maybe<Scalars["String"]>;
  ventureCompanyName?: Maybe<Scalars["String"]>;
  ventureSeller?: Maybe<Scalars["String"]>;
};

export type Suggestion = {
  __typename?: "Suggestion";
  customer?: Maybe<Customer>;
  email?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Tag = {
  __typename?: "Tag";
  ancestry?: Maybe<Scalars["String"]>;
  createdAt: Scalars["ISO8601DateTime"];
  id: Scalars["ID"];
  name: Scalars["String"];
  slug: Scalars["String"];
  updatedAt: Scalars["ISO8601DateTime"];
};

export type Testimonial = {
  __typename?: "Testimonial";
  clientCompany?: Maybe<Scalars["String"]>;
  clientDesignation?: Maybe<Scalars["String"]>;
  clientEmail?: Maybe<Scalars["String"]>;
  clientImage?: Maybe<Scalars["String"]>;
  clientSlug?: Maybe<Scalars["String"]>;
  companySlug?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  postingDate?: Maybe<Scalars["ISO8601DateTime"]>;
  slug?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** The connection type for Testimonial. */
export type TestimonialConnection = {
  __typename?: "TestimonialConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TestimonialEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Testimonial>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type TestimonialEdge = {
  __typename?: "TestimonialEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Testimonial>;
};

export type BrokerStatisticsGraphQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type BrokerStatisticsGraphQuery = {
  __typename?: "Query";
  brokerStatisticsGraph: {
    __typename?: "DealVolume";
    assetClassPercentage: Array<Array<any>>;
    locationPercentage: Array<Array<any>>;
  };
};

export type GetBlogQueryVariables = Exact<{
  slug: Scalars["ID"];
}>;

export type GetBlogQuery = {
  __typename?: "Query";
  blog?: {
    __typename?: "Blog";
    id: string;
    title: string;
    description?: string | null;
    htmlContent?: string | null;
    status: string;
    createdAt: any;
    updatedAt: any;
    slug?: string | null;
    image?: string | null;
    author: { __typename?: "Author"; title: string; image?: string | null };
    profiles?: Array<{
      __typename?: "Broker";
      slug?: string | null;
      title?: string | null;
      thumbnail?: string | null;
      totalSold?: any | null;
      totalLeased?: any | null;
      totalFinanced?: any | null;
      dealsCount?: number | null;
      company?: { __typename?: "Company"; title?: string | null } | null;
    }> | null;
    tags?: Array<{ __typename?: "Tag"; name: string; slug: string }> | null;
  } | null;
};

export type GetBlogsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  q?: InputMaybe<Scalars["String"]>;
  tagSlugs?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetBlogsQuery = {
  __typename?: "Query";
  blogs?: Array<{
    __typename?: "Blog";
    id: string;
    title: string;
    description?: string | null;
    status: string;
    createdAt: any;
    updatedAt: any;
    slug?: string | null;
    image?: string | null;
  }> | null;
};

export type GetBlogsPathsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type GetBlogsPathsQuery = {
  __typename?: "Query";
  blogs?: Array<{ __typename?: "Blog"; slug?: string | null }> | null;
};

export type GetTagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTagsQuery = {
  __typename?: "Query";
  tags?: Array<{ __typename?: "Tag"; name: string; slug: string }> | null;
};

export type BrokerGetQueryVariables = Exact<{
  slug: Scalars["ID"];
}>;

export type BrokerGetQuery = {
  __typename?: "Query";
  broker?: {
    __typename?: "Broker";
    id: string;
    slug?: string | null;
    name: string;
    title?: string | null;
    email?: string | null;
    phone?: string | null;
    instagramHandle?: string | null;
    facebookHandle?: string | null;
    vimeoHandle?: string | null;
    youtubeHandle?: string | null;
    linkedinHandle?: string | null;
    websiteUrl?: string | null;
    googleplusHandle?: string | null;
    pinterestHandle?: string | null;
    twitterHandle?: string | null;
    bio?: string | null;
    bioSummary?: string | null;
    type?: string | null;
    thumbnail?: string | null;
    totalSold?: any | null;
    totalFinanced?: any | null;
    lastClosing?: string | null;
    totalSquareFootage?: any | null;
    totalVolume?: any | null;
    createdAt: any;
    updatedAt: any;
    className?: string | null;
    dealsCount?: number | null;
    stateWithMostDeals?: string | null;
    fellowWithMostDeals?: string | null;
    assetTypeWithMostDeals?: string | null;
    leaderBoardTags?: Array<string> | null;
    agencyFirstDealTogether?: string | null;
    agencyNumberOfDealsTogether?: number | null;
    agencyLargestDealSaleTogether?: any | null;
    agencyLastDealTogether?: string | null;
    assetTypesDropdown?: Array<string> | null;
    transactionTypesDropdown?: Array<string> | null;
    totalLeaseDeals?: number | null;
    stateTypesDropdown?: Array<string> | null;
    deals?: Array<{
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      title?: string | null;
      mainImage?: string | null;
      closingDate?: any | null;
      transactionType?: string | null;
      address?: string | null;
      salePrice?: any | null;
      pricePerSquareFoot?: any | null;
      assetType?: string | null;
      dealType?: string | null;
      createdAt: any;
      feeds?: Array<string> | null;
      totalSquareFootageDeal?: any | null;
      profiles?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        thumbnail?: string | null;
        createdAt: any;
        updatedAt: any;
      }> | null;
      properties?: Array<{
        __typename?: "Property";
        id: string;
        state?: string | null;
        longitude?: number | null;
        latitude?: number | null;
      }> | null;
    }> | null;
    dealRanking?: Array<{
      __typename?: "Deal";
      feeds?: Array<string> | null;
      transactionType?: string | null;
      slug?: string | null;
      id: string;
      mainImage?: string | null;
      address?: string | null;
      salePrice?: any | null;
      totalSquareFootageDeal?: any | null;
      assetType?: string | null;
      closingDate?: any | null;
      createdAt: any;
    }> | null;
    lastDeal?: {
      __typename?: "Deal";
      salePrice?: any | null;
      transactionType?: string | null;
      feeds?: Array<string> | null;
      slug?: string | null;
      lastClosing?: string | null;
      id: string;
      createdAt: any;
    } | null;
    company?: {
      __typename?: "Company";
      id: string;
      slug?: string | null;
      title?: string | null;
      createdAt: any;
      updatedAt: any;
    } | null;
  } | null;
};

export type BrokerLeaderBoardQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type BrokerLeaderBoardQuery = {
  __typename?: "Query";
  agentLeaderBoards?: {
    __typename?: "AgentLeaderBoard";
    dealJunkie?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    hotDeals?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    leaseShark?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    loanShark?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    risingTalent?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    unicorn?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    whales?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      totalVolume?: any | null;
      dealsCount?: number | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
  } | null;
};

export type BrokersGetQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type BrokersGetQuery = {
  __typename?: "Query";
  brokers: {
    __typename?: "BrokerConnection";
    nodes?: Array<{
      __typename?: "Broker";
      id: string;
      bio?: string | null;
      name: string;
      phone?: string | null;
      type?: string | null;
      thumbnail?: string | null;
      className?: string | null;
      companyId?: number | null;
      company?: {
        __typename?: "Company";
        id: string;
        title?: string | null;
        slug?: string | null;
      } | null;
    } | null> | null;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      endCursor?: string | null;
      startCursor?: string | null;
    };
  };
};

export type BrokerRelationshipsQueryVariables = Exact<{
  slug: Scalars["String"];
  page: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type BrokerRelationshipsQuery = {
  __typename?: "Query";
  brokerRelationships?: {
    __typename?: "BrokerRelationship";
    agents?: {
      __typename?: "BrokerConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        email?: string | null;
        thumbnail?: string | null;
        totalVolume?: any | null;
        dealsCount?: number | null;
        firstDealTogether?: string | null;
        numberOfDealsTogether?: number | null;
        largestDealSaleTogether?: any | null;
        lastDealTogether?: string | null;
        agencyFirstDealTogether?: string | null;
        agencyNumberOfDealsTogether?: number | null;
        agencyLargestDealSaleTogether?: any | null;
        agencyLastDealTogether?: string | null;
        createdAt: any;
        updatedAt: any;
      } | null> | null;
    } | null;
    agencies?: {
      __typename?: "CompanyConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "Company";
        type?: string | null;
        slug?: string | null;
        mainImage?: string | null;
        title?: string | null;
      } | null> | null;
    } | null;
    lenders?: {
      __typename?: "CompanyConnection";
      totalCount: number;
      nodes?: Array<{
        __typename?: "Company";
        type?: string | null;
        slug?: string | null;
        mainImage?: string | null;
        title?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type BrokerTransactionsQueryVariables = Exact<{
  slug: Scalars["ID"];
  page: Scalars["Int"];
  limit: Scalars["Int"];
  type?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type BrokerTransactionsQuery = {
  __typename?: "Query";
  brokerTransactions?: Array<{
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    title?: string | null;
    mainImage?: string | null;
    closingDate?: any | null;
    transactionType?: string | null;
    totalDeals?: any | null;
    address?: string | null;
    salePrice?: any | null;
    pricePerSquareFoot?: any | null;
    assetType?: string | null;
    dealType?: string | null;
    createdAt: any;
    feeds?: Array<string> | null;
    totalSquareFootageDeal?: any | null;
    profiles?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    properties?: Array<{
      __typename?: "Property";
      id: string;
      state?: string | null;
      longitude?: number | null;
      latitude?: number | null;
    }> | null;
  }> | null;
};

export type CompaniesQueryVariables = Exact<{
  companyType: Scalars["String"];
  page?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  agentsSortBy?: InputMaybe<Scalars["String"]>;
  agentsLimit: Scalars["Int"];
  agentsPage: Scalars["Int"];
  area?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  priceRange?: InputMaybe<Scalars["String"]>;
  loanAmount?: InputMaybe<Scalars["String"]>;
}>;

export type CompaniesQuery = {
  __typename?: "Query";
  companies: {
    __typename?: "CompanyConnection";
    totalCount: number;
    nodes?: Array<{
      __typename?: "Company";
      address?: string | null;
      title?: string | null;
      mainImage?: string | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
      dealsCount?: number | null;
      totalFinanced?: any | null;
      lastClosing?: string | null;
      description?: string | null;
      slug?: string | null;
      stateTypesDropdown?: Array<string> | null;
      profilesCount?: number | null;
      linkedinUrl?: string | null;
      facebookUrl?: string | null;
      twitterUrl?: string | null;
      instagramUrl?: string | null;
      agents?: Array<{
        __typename?: "Broker";
        mainImage?: string | null;
        thumbnail?: string | null;
        slug?: string | null;
      }> | null;
    } | null> | null;
  };
};

export type CompanyStatisticsGraphQueryVariables = Exact<{
  slug: Scalars["String"];
  companyType: Scalars["String"];
}>;

export type CompanyStatisticsGraphQuery = {
  __typename?: "Query";
  companyStatisticsGraph: {
    __typename?: "CompanyStatistic";
    assetClassPercentage: Array<Array<any>>;
    locationPercentage: Array<Array<any>>;
  };
};

export type CompanyPartsFragment = {
  __typename?: "Company";
  id: string;
  slug?: string | null;
  title?: string | null;
  mainImage?: string | null;
  logoUrl?: string | null;
  description?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  status?: number | null;
  websiteUrl?: string | null;
  wpId?: string | null;
  totalVolume?: any | null;
  totalSold?: any | null;
  totalFinanced?: any | null;
  totalLeased?: any | null;
  dealsCount?: number | null;
  assetTypesDropdown?: Array<string> | null;
  stateTypesDropdown?: Array<string> | null;
  transactionTypesDropdown?: Array<string> | null;
  leaseDealsCount?: any | null;
  totalSquareFootage?: any | null;
  createdAt: any;
  updatedAt: any;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
  twitterUrl?: string | null;
  youtubeUrl?: string | null;
  stateWithMostDeals?: string | null;
  assetTypeWithMostDeals?: string | null;
  fellowWithMostDeals?: string | null;
  lastDeal?: {
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    feeds?: Array<string> | null;
    transactionType?: string | null;
    salePrice?: any | null;
    createdAt: any;
    lastClosing?: string | null;
  } | null;
  dealRanking?: Array<{
    __typename?: "Deal";
    id: string;
    mainImage?: string | null;
    address?: string | null;
    salePrice?: any | null;
    totalSquareFootageDeal?: any | null;
    assetType?: string | null;
    closingDate?: any | null;
    createdAt: any;
  }> | null;
  agents?: Array<{
    __typename?: "Broker";
    id: string;
    slug?: string | null;
    name: string;
    title?: string | null;
    totalVolume?: any | null;
    totalSold?: any | null;
    totalFinanced?: any | null;
    totalLeased?: any | null;
    thumbnail?: string | null;
    createdAt: any;
    updatedAt: any;
    totalSquareFootage?: any | null;
    dealsCount?: number | null;
    instagramHandle?: string | null;
    facebookHandle?: string | null;
    vimeoHandle?: string | null;
    youtubeHandle?: string | null;
    linkedinHandle?: string | null;
    websiteUrl?: string | null;
    googleplusHandle?: string | null;
    pinterestHandle?: string | null;
    twitterHandle?: string | null;
    company?: {
      __typename?: "Company";
      id: string;
      title?: string | null;
      slug?: string | null;
      createdAt: any;
      updatedAt: any;
    } | null;
  }> | null;
  agentRanking?: Array<{
    __typename?: "Broker";
    createdAt: any;
    updatedAt: any;
    id: string;
    name: string;
    thumbnail?: string | null;
    slug?: string | null;
    totalVolume?: any | null;
    dealsCount?: number | null;
    totalLoanDeals?: number | null;
    totalLeaseDeals?: number | null;
    totalSquareFootage?: any | null;
    lastDeal?: {
      __typename?: "Deal";
      id: string;
      createdAt: any;
      closingDate?: any | null;
    } | null;
  }> | null;
  deals?: Array<{
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    title?: string | null;
    mainImage?: string | null;
    closingDate?: any | null;
    transactionType?: string | null;
    address?: string | null;
    salePrice?: any | null;
    loanAmount?: number | null;
    pricePerSquareFoot?: any | null;
    assetType?: string | null;
    dealType?: string | null;
    createdAt: any;
    feeds?: Array<string> | null;
    totalSquareFootageDeal?: any | null;
    profiles?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    properties?: Array<{
      __typename?: "Property";
      id: string;
      state?: string | null;
      longitude?: number | null;
      latitude?: number | null;
    }> | null;
  }> | null;
};

export type CompaniesGetQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  companyType: Scalars["String"];
}>;

export type CompaniesGetQuery = {
  __typename?: "Query";
  companies: {
    __typename?: "CompanyConnection";
    nodes?: Array<{
      __typename?: "Company";
      id: string;
      slug?: string | null;
      title?: string | null;
      mainImage?: string | null;
      logoUrl?: string | null;
      description?: string | null;
      contactEmail?: string | null;
      contactPhone?: string | null;
      status?: number | null;
      websiteUrl?: string | null;
      wpId?: string | null;
      totalVolume?: any | null;
      totalSold?: any | null;
      totalFinanced?: any | null;
      totalLeased?: any | null;
      dealsCount?: number | null;
      assetTypesDropdown?: Array<string> | null;
      stateTypesDropdown?: Array<string> | null;
      transactionTypesDropdown?: Array<string> | null;
      leaseDealsCount?: any | null;
      totalSquareFootage?: any | null;
      createdAt: any;
      updatedAt: any;
      facebookUrl?: string | null;
      instagramUrl?: string | null;
      linkedinUrl?: string | null;
      twitterUrl?: string | null;
      youtubeUrl?: string | null;
      stateWithMostDeals?: string | null;
      assetTypeWithMostDeals?: string | null;
      fellowWithMostDeals?: string | null;
      lastDeal?: {
        __typename?: "Deal";
        id: string;
        slug?: string | null;
        feeds?: Array<string> | null;
        transactionType?: string | null;
        salePrice?: any | null;
        createdAt: any;
        lastClosing?: string | null;
      } | null;
      dealRanking?: Array<{
        __typename?: "Deal";
        id: string;
        mainImage?: string | null;
        address?: string | null;
        salePrice?: any | null;
        totalSquareFootageDeal?: any | null;
        assetType?: string | null;
        closingDate?: any | null;
        createdAt: any;
      }> | null;
      agents?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        title?: string | null;
        totalVolume?: any | null;
        totalSold?: any | null;
        totalFinanced?: any | null;
        totalLeased?: any | null;
        thumbnail?: string | null;
        createdAt: any;
        updatedAt: any;
        totalSquareFootage?: any | null;
        dealsCount?: number | null;
        instagramHandle?: string | null;
        facebookHandle?: string | null;
        vimeoHandle?: string | null;
        youtubeHandle?: string | null;
        linkedinHandle?: string | null;
        websiteUrl?: string | null;
        googleplusHandle?: string | null;
        pinterestHandle?: string | null;
        twitterHandle?: string | null;
        company?: {
          __typename?: "Company";
          id: string;
          title?: string | null;
          slug?: string | null;
          createdAt: any;
          updatedAt: any;
        } | null;
      }> | null;
      agentRanking?: Array<{
        __typename?: "Broker";
        createdAt: any;
        updatedAt: any;
        id: string;
        name: string;
        thumbnail?: string | null;
        slug?: string | null;
        totalVolume?: any | null;
        dealsCount?: number | null;
        totalLoanDeals?: number | null;
        totalLeaseDeals?: number | null;
        totalSquareFootage?: any | null;
        lastDeal?: {
          __typename?: "Deal";
          id: string;
          createdAt: any;
          closingDate?: any | null;
        } | null;
      }> | null;
      deals?: Array<{
        __typename?: "Deal";
        id: string;
        slug?: string | null;
        title?: string | null;
        mainImage?: string | null;
        closingDate?: any | null;
        transactionType?: string | null;
        address?: string | null;
        salePrice?: any | null;
        loanAmount?: number | null;
        pricePerSquareFoot?: any | null;
        assetType?: string | null;
        dealType?: string | null;
        createdAt: any;
        feeds?: Array<string> | null;
        totalSquareFootageDeal?: any | null;
        profiles?: Array<{
          __typename?: "Broker";
          id: string;
          slug?: string | null;
          name: string;
          thumbnail?: string | null;
          createdAt: any;
          updatedAt: any;
        }> | null;
        properties?: Array<{
          __typename?: "Property";
          id: string;
          state?: string | null;
          longitude?: number | null;
          latitude?: number | null;
        }> | null;
      }> | null;
    } | null> | null;
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      endCursor?: string | null;
      startCursor?: string | null;
    };
  };
};

export type CompanyGetQueryVariables = Exact<{
  slug: Scalars["String"];
  companyType: Scalars["String"];
}>;

export type CompanyGetQuery = {
  __typename?: "Query";
  company?: {
    __typename?: "Company";
    id: string;
    slug?: string | null;
    title?: string | null;
    mainImage?: string | null;
    logoUrl?: string | null;
    description?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    status?: number | null;
    websiteUrl?: string | null;
    wpId?: string | null;
    totalVolume?: any | null;
    totalSold?: any | null;
    totalFinanced?: any | null;
    totalLeased?: any | null;
    dealsCount?: number | null;
    assetTypesDropdown?: Array<string> | null;
    stateTypesDropdown?: Array<string> | null;
    transactionTypesDropdown?: Array<string> | null;
    leaseDealsCount?: any | null;
    totalSquareFootage?: any | null;
    createdAt: any;
    updatedAt: any;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    linkedinUrl?: string | null;
    twitterUrl?: string | null;
    youtubeUrl?: string | null;
    stateWithMostDeals?: string | null;
    assetTypeWithMostDeals?: string | null;
    fellowWithMostDeals?: string | null;
    lastDeal?: {
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      feeds?: Array<string> | null;
      transactionType?: string | null;
      salePrice?: any | null;
      createdAt: any;
      lastClosing?: string | null;
    } | null;
    dealRanking?: Array<{
      __typename?: "Deal";
      id: string;
      mainImage?: string | null;
      address?: string | null;
      salePrice?: any | null;
      totalSquareFootageDeal?: any | null;
      assetType?: string | null;
      closingDate?: any | null;
      createdAt: any;
    }> | null;
    agents?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      title?: string | null;
      totalVolume?: any | null;
      totalSold?: any | null;
      totalFinanced?: any | null;
      totalLeased?: any | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      totalSquareFootage?: any | null;
      dealsCount?: number | null;
      instagramHandle?: string | null;
      facebookHandle?: string | null;
      vimeoHandle?: string | null;
      youtubeHandle?: string | null;
      linkedinHandle?: string | null;
      websiteUrl?: string | null;
      googleplusHandle?: string | null;
      pinterestHandle?: string | null;
      twitterHandle?: string | null;
      company?: {
        __typename?: "Company";
        id: string;
        title?: string | null;
        slug?: string | null;
        createdAt: any;
        updatedAt: any;
      } | null;
    }> | null;
    agentRanking?: Array<{
      __typename?: "Broker";
      createdAt: any;
      updatedAt: any;
      id: string;
      name: string;
      thumbnail?: string | null;
      slug?: string | null;
      totalVolume?: any | null;
      dealsCount?: number | null;
      totalLoanDeals?: number | null;
      totalLeaseDeals?: number | null;
      totalSquareFootage?: any | null;
      lastDeal?: {
        __typename?: "Deal";
        id: string;
        createdAt: any;
        closingDate?: any | null;
      } | null;
    }> | null;
    deals?: Array<{
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      title?: string | null;
      mainImage?: string | null;
      closingDate?: any | null;
      transactionType?: string | null;
      address?: string | null;
      salePrice?: any | null;
      loanAmount?: number | null;
      pricePerSquareFoot?: any | null;
      assetType?: string | null;
      dealType?: string | null;
      createdAt: any;
      feeds?: Array<string> | null;
      totalSquareFootageDeal?: any | null;
      profiles?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        thumbnail?: string | null;
        createdAt: any;
        updatedAt: any;
      }> | null;
      properties?: Array<{
        __typename?: "Property";
        id: string;
        state?: string | null;
        longitude?: number | null;
        latitude?: number | null;
      }> | null;
    }> | null;
  } | null;
};

export type CompanyMarketShareFragment = {
  __typename?: "Company";
  id: string;
  slug?: string | null;
  title?: string | null;
  createdAt: any;
  updatedAt: any;
  mainImage?: string | null;
  totalVolume?: any | null;
  dealsCount?: number | null;
  profilesCount?: number | null;
  totalSold?: any | null;
  totalLeased?: any | null;
  totalSquareFootage?: any | null;
};

export type CompanyMarketResolverQueryVariables = Exact<{
  companyType: Scalars["String"];
  sortBy: Scalars["String"];
}>;

export type CompanyMarketResolverQuery = {
  __typename?: "Query";
  companyMarket?: Array<{
    __typename?: "Company";
    id: string;
    slug?: string | null;
    title?: string | null;
    createdAt: any;
    updatedAt: any;
    mainImage?: string | null;
    totalVolume?: any | null;
    dealsCount?: number | null;
    profilesCount?: number | null;
    totalSold?: any | null;
    totalLeased?: any | null;
    totalSquareFootage?: any | null;
  }> | null;
};

export type CompanyTransactionsQueryVariables = Exact<{
  slug: Scalars["ID"];
  page: Scalars["Int"];
  limit: Scalars["Int"];
  companyType: Scalars["String"];
  type?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  area?: InputMaybe<Scalars["String"]>;
  assetClass?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type CompanyTransactionsQuery = {
  __typename?: "Query";
  companyTransactions: Array<{
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    title?: string | null;
    mainImage?: string | null;
    closingDate?: any | null;
    transactionType?: string | null;
    totalDeals?: any | null;
    address?: string | null;
    salePrice?: any | null;
    loanAmount?: number | null;
    pricePerSquareFoot?: any | null;
    assetType?: string | null;
    dealType?: string | null;
    createdAt: any;
    feeds?: Array<string> | null;
    totalSquareFootageDeal?: any | null;
    profiles?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    properties?: Array<{
      __typename?: "Property";
      id: string;
      state?: string | null;
      longitude?: number | null;
      latitude?: number | null;
    }> | null;
  }>;
};

export type DealComparablesQueryVariables = Exact<{
  slug: Scalars["ID"];
  page: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type DealComparablesQuery = {
  __typename?: "Query";
  dealComparables?: Array<{
    __typename?: "Deal";
    totalDeals?: any | null;
    id: string;
    slug?: string | null;
    title?: string | null;
    mainImage?: string | null;
    closingDate?: any | null;
    transactionType?: string | null;
    address?: string | null;
    salePrice?: any | null;
    pricePerSquareFoot?: any | null;
    assetType?: string | null;
    dealType?: string | null;
    createdAt: any;
    feeds?: Array<string> | null;
    totalSquareFootageDeal?: any | null;
    profiles?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    properties?: Array<{
      __typename?: "Property";
      id: string;
      state?: string | null;
      longitude?: number | null;
      latitude?: number | null;
    }> | null;
  }> | null;
};

export type CreateTestimonialMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  state: Scalars["String"];
  content: Scalars["String"];
  titleAndCompany: Scalars["String"];
  imageUrl?: InputMaybe<Scalars["String"]>;
}>;

export type CreateTestimonialMutation = {
  __typename?: "Mutation";
  createTestimonial?: {
    __typename?: "CreateTestimonialPayload";
    testimonial?: {
      __typename?: "Testimonial";
      clientSlug?: string | null;
      clientEmail?: string | null;
      state?: string | null;
      clientImage?: string | null;
      companySlug?: string | null;
      clientCompany?: string | null;
      clientDesignation?: string | null;
      title?: string | null;
      content?: string | null;
    } | null;
  } | null;
};

export type DealsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  assetClass?: InputMaybe<Scalars["String"]>;
  area?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  priceRange?: InputMaybe<Scalars["String"]>;
  dateRange?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
}>;

export type DealsQuery = {
  __typename?: "Query";
  deals?: Array<{
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    title?: string | null;
    mainImage?: string | null;
    closingDate?: any | null;
    transactionType?: string | null;
    totalDeals?: any | null;
    address?: string | null;
    salePrice?: any | null;
    pricePerSquareFoot?: any | null;
    assetType?: string | null;
    dealType?: string | null;
    createdAt: any;
    feeds?: Array<string> | null;
    totalSquareFootageDeal?: any | null;
    profiles?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
    }> | null;
    properties?: Array<{
      __typename?: "Property";
      id: string;
      state?: string | null;
      longitude?: number | null;
      latitude?: number | null;
    }> | null;
  }> | null;
};

export type CompanyGraphGetQueryVariables = Exact<{
  slug: Scalars["String"];
  companyType: Scalars["String"];
}>;

export type CompanyGraphGetQuery = {
  __typename?: "Query";
  graphs?: {
    __typename?: "Graph";
    deals?: Array<Array<any | null>> | null;
    lease?: Array<Array<any | null>> | null;
    loan?: Array<Array<any | null>> | null;
    sale?: Array<Array<any | null>> | null;
    volume?: Array<Array<any | null>> | null;
  } | null;
};

export type LeaderBoardItemFieldsFragment = {
  __typename?: "Broker";
  id: string;
  name: string;
  slug?: string | null;
  thumbnail?: string | null;
  createdAt: any;
  updatedAt: any;
  dealsCount?: number | null;
  totalVolume?: any | null;
  totalSquareFootage?: any | null;
};

export type LeaderBoardGetQueryVariables = Exact<{
  state?: InputMaybe<Scalars["String"]>;
}>;

export type LeaderBoardGetQuery = {
  __typename?: "Query";
  leaderBoardResolver?: {
    __typename?: "LeaderBoard";
    dealJunkie?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
    hotDeals?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
    leaseShark?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
    loanShark?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
    risingTalent?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
    unicorn?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
    whales?: Array<{
      __typename?: "Broker";
      id: string;
      name: string;
      slug?: string | null;
      thumbnail?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
      totalSquareFootage?: any | null;
    }> | null;
  } | null;
};

export type RecentDealGetQueryVariables = Exact<{
  limit: Scalars["Int"];
  state?: InputMaybe<Scalars["String"]>;
}>;

export type RecentDealGetQuery = {
  __typename?: "Query";
  recentDeal?: {
    __typename?: "RecentDeal";
    recentSales?: Array<{
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      mainImage?: string | null;
      closingDate?: any | null;
      lastClosing?: string | null;
      salePrice?: any | null;
      pricePerSquareFoot?: any | null;
      totalSquareFootageDeal?: any | null;
      assetType?: string | null;
      feeds?: Array<string> | null;
      transactionType?: string | null;
      createdAt: any;
      profiles?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        thumbnail?: string | null;
        updatedAt: any;
        createdAt: any;
      }> | null;
      companies?: Array<{
        __typename?: "Company";
        id: string;
        slug?: string | null;
        mainImage?: string | null;
        updatedAt: any;
        createdAt: any;
      }> | null;
      properties?: Array<{
        __typename?: "Property";
        id: string;
        displayAddress?: string | null;
        state?: string | null;
      }> | null;
    }> | null;
    recentLoans?: Array<{
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      mainImage?: string | null;
      closingDate?: any | null;
      lastClosing?: string | null;
      salePrice?: any | null;
      pricePerSquareFoot?: any | null;
      totalSquareFootageDeal?: any | null;
      assetType?: string | null;
      feeds?: Array<string> | null;
      transactionType?: string | null;
      createdAt: any;
      profiles?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        thumbnail?: string | null;
        updatedAt: any;
        createdAt: any;
      }> | null;
      companies?: Array<{
        __typename?: "Company";
        id: string;
        slug?: string | null;
        mainImage?: string | null;
        updatedAt: any;
        createdAt: any;
      }> | null;
      properties?: Array<{
        __typename?: "Property";
        id: string;
        displayAddress?: string | null;
        state?: string | null;
      }> | null;
    }> | null;
    recentLeases?: Array<{
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      mainImage?: string | null;
      closingDate?: any | null;
      lastClosing?: string | null;
      salePrice?: any | null;
      pricePerSquareFoot?: any | null;
      totalSquareFootageDeal?: any | null;
      assetType?: string | null;
      feeds?: Array<string> | null;
      transactionType?: string | null;
      createdAt: any;
      profiles?: Array<{
        __typename?: "Broker";
        id: string;
        slug?: string | null;
        name: string;
        thumbnail?: string | null;
        updatedAt: any;
        createdAt: any;
      }> | null;
      companies?: Array<{
        __typename?: "Company";
        id: string;
        slug?: string | null;
        mainImage?: string | null;
        updatedAt: any;
        createdAt: any;
      }> | null;
      properties?: Array<{
        __typename?: "Property";
        id: string;
        displayAddress?: string | null;
        state?: string | null;
      }> | null;
    }> | null;
  } | null;
};

export type SearchGetQueryVariables = Exact<{
  term?: InputMaybe<Scalars["String"]>;
}>;

export type SearchGetQuery = {
  __typename?: "Query";
  search: {
    __typename?: "SearchResult";
    agents: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      createdAt: any;
      updatedAt: any;
      email?: string | null;
      type?: string | null;
      mainImage?: string | null;
      thumbnail?: string | null;
      companyName?: string | null;
      dealsCount?: number | null;
      totalSold?: any | null;
      totalFinanced?: any | null;
      lastClosing?: string | null;
    }>;
    agencies: Array<{
      __typename?: "Company";
      id: string;
      slug?: string | null;
      title?: string | null;
      createdAt: any;
      updatedAt: any;
      mainImage?: string | null;
      type?: string | null;
      profilesCount?: number | null;
      totalSold?: any | null;
      totalFinanced?: any | null;
      dealsCount?: number | null;
    }>;
    lenders: Array<{
      __typename?: "Company";
      id: string;
      slug?: string | null;
      title?: string | null;
      createdAt: any;
      updatedAt: any;
      mainImage?: string | null;
      type?: string | null;
      totalFinanced?: any | null;
      dealsCount?: number | null;
      totalSquareFootage?: any | null;
      profilesCount?: number | null;
    }>;
    deals: Array<{
      __typename?: "Deal";
      id: string;
      slug?: string | null;
      title?: string | null;
      address?: string | null;
      mainImage?: string | null;
      lastClosing?: string | null;
      assetType?: string | null;
      totalSquareFootageDeal?: any | null;
      feeds?: Array<string> | null;
      transactionType?: string | null;
      properties?: Array<{
        __typename?: "Property";
        latitude?: number | null;
        longitude?: number | null;
      }> | null;
    }>;
  };
};

export type DealGetQueryVariables = Exact<{
  slug: Scalars["ID"];
}>;

export type DealGetQuery = {
  __typename?: "Query";
  deal?: {
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    feeds?: Array<string> | null;
    transactionType?: string | null;
    createdAt: any;
    title?: string | null;
    mainImage?: string | null;
    dealType?: string | null;
    dealsInfo?: string | null;
    instagramId?: string | null;
    description?: string | null;
    metaDescription?: string | null;
    pricePerSquareFoot?: any | null;
    totalSquareFootageDeal?: any | null;
    salePrice?: any | null;
    assetType?: string | null;
    parties?: string | null;
    caption?: string | null;
    properties?: Array<{
      __typename?: "Property";
      id: string;
      displayAddress?: string | null;
      latitude?: number | null;
      longitude?: number | null;
    }> | null;
    profiles?: Array<{
      __typename?: "Broker";
      id: string;
      slug?: string | null;
      name: string;
      thumbnail?: string | null;
      dealsCount?: number | null;
      totalSold?: any | null;
      totalLeaseDeals?: number | null;
      totalFinanced?: any | null;
      createdAt: any;
      updatedAt: any;
      company?: {
        __typename?: "Company";
        id: string;
        title?: string | null;
        slug?: string | null;
        type?: string | null;
        createdAt: any;
        updatedAt: any;
      } | null;
    }> | null;
    companies?: Array<{
      __typename?: "Company";
      id: string;
      slug?: string | null;
      mainImage?: string | null;
      title?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
    }> | null;
    lenders?: Array<{
      __typename?: "Company";
      id: string;
      slug?: string | null;
      mainImage?: string | null;
      title?: string | null;
      createdAt: any;
      updatedAt: any;
      dealsCount?: number | null;
      totalVolume?: any | null;
    }> | null;
  } | null;
};

export type DealsComparablesGetQueryVariables = Exact<{
  slug: Scalars["ID"];
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
}>;

export type DealsComparablesGetQuery = {
  __typename?: "Query";
  deal?: {
    __typename?: "Deal";
    comparables?: {
      __typename?: "DealConnection";
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        endCursor?: string | null;
      };
      nodes?: Array<{
        __typename?: "Deal";
        id: string;
        slug?: string | null;
        title?: string | null;
        mainImage?: string | null;
        closingDate?: any | null;
        transactionType?: string | null;
        address?: string | null;
        salePrice?: any | null;
        pricePerSquareFoot?: any | null;
        assetType?: string | null;
        dealType?: string | null;
        createdAt: any;
        feeds?: Array<string> | null;
        totalSquareFootageDeal?: any | null;
        profiles?: Array<{
          __typename?: "Broker";
          id: string;
          slug?: string | null;
          name: string;
          thumbnail?: string | null;
          createdAt: any;
          updatedAt: any;
        }> | null;
        properties?: Array<{
          __typename?: "Property";
          id: string;
          state?: string | null;
          longitude?: number | null;
          latitude?: number | null;
        }> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type DealsGetQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type DealsGetQuery = {
  __typename?: "Query";
  deals?: Array<{
    __typename?: "Deal";
    id: string;
    slug?: string | null;
    feeds?: Array<string> | null;
    transactionType?: string | null;
    createdAt: any;
    mainImage?: string | null;
    title?: string | null;
    salePrice?: any | null;
  }> | null;
};

export const CompanyPartsFragmentDoc = gql`
  fragment CompanyParts on Company {
    id
    slug
    title
    mainImage
    logoUrl
    description
    contactEmail
    contactPhone
    status
    websiteUrl
    wpId
    totalVolume
    totalSold
    totalFinanced
    totalLeased
    dealsCount
    assetTypesDropdown
    stateTypesDropdown
    transactionTypesDropdown
    leaseDealsCount
    lastDeal {
      id
      slug
      feeds
      transactionType
      salePrice
      createdAt
      lastClosing
    }
    totalSquareFootage
    createdAt
    updatedAt
    facebookUrl
    instagramUrl
    linkedinUrl
    twitterUrl
    youtubeUrl
    stateWithMostDeals
    assetTypeWithMostDeals
    fellowWithMostDeals
    dealRanking {
      id
      mainImage
      address
      salePrice
      totalSquareFootageDeal
      assetType
      closingDate
      createdAt
    }
    agents(page: 1, limit: 20) {
      id
      slug
      name
      title
      totalVolume
      totalSold
      totalFinanced
      totalLeased
      thumbnail
      createdAt
      updatedAt
      totalVolume
      totalSquareFootage
      dealsCount
      instagramHandle
      facebookHandle
      vimeoHandle
      youtubeHandle
      linkedinHandle
      websiteUrl
      googleplusHandle
      pinterestHandle
      twitterHandle
      company {
        id
        title
        slug
        createdAt
        updatedAt
      }
    }
    agentRanking(page: 1, limit: 10) {
      createdAt
      updatedAt
      id
      name
      thumbnail
      slug
      totalVolume
      dealsCount
      totalLoanDeals
      totalLeaseDeals
      totalSquareFootage
      lastDeal {
        id
        createdAt
        closingDate
      }
    }
    deals(page: 1, limit: 4) {
      id
      slug
      title
      mainImage
      closingDate
      transactionType
      profiles {
        id
        slug
        name
        thumbnail
        createdAt
        updatedAt
      }
      address
      properties {
        id
        state
        longitude
        latitude
      }
      salePrice
      loanAmount
      pricePerSquareFoot
      assetType
      dealType
      createdAt
      feeds
      totalSquareFootageDeal
    }
  }
`;
export const CompanyMarketShareFragmentDoc = gql`
  fragment CompanyMarketShare on Company {
    id
    slug
    title
    createdAt
    updatedAt
    mainImage
    totalVolume
    dealsCount
    profilesCount
    totalSold
    totalLeased
    dealsCount
    totalSquareFootage
  }
`;
export const LeaderBoardItemFieldsFragmentDoc = gql`
  fragment LeaderBoardItemFields on Broker {
    id
    name
    slug
    thumbnail
    createdAt
    updatedAt
    dealsCount
    totalVolume
    totalSquareFootage
  }
`;
export const BrokerStatisticsGraphDocument = gql`
  query BrokerStatisticsGraph($slug: String!) {
    brokerStatisticsGraph(slug: $slug) {
      assetClassPercentage
      locationPercentage
    }
  }
`;

/**
 * __useBrokerStatisticsGraphQuery__
 *
 * To run a query within a React component, call `useBrokerStatisticsGraphQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrokerStatisticsGraphQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrokerStatisticsGraphQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBrokerStatisticsGraphQuery(
  baseOptions: Apollo.QueryHookOptions<
    BrokerStatisticsGraphQuery,
    BrokerStatisticsGraphQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BrokerStatisticsGraphQuery,
    BrokerStatisticsGraphQueryVariables
  >(BrokerStatisticsGraphDocument, options);
}
export function useBrokerStatisticsGraphLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BrokerStatisticsGraphQuery,
    BrokerStatisticsGraphQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BrokerStatisticsGraphQuery,
    BrokerStatisticsGraphQueryVariables
  >(BrokerStatisticsGraphDocument, options);
}
export type BrokerStatisticsGraphQueryHookResult = ReturnType<
  typeof useBrokerStatisticsGraphQuery
>;
export type BrokerStatisticsGraphLazyQueryHookResult = ReturnType<
  typeof useBrokerStatisticsGraphLazyQuery
>;
export type BrokerStatisticsGraphQueryResult = Apollo.QueryResult<
  BrokerStatisticsGraphQuery,
  BrokerStatisticsGraphQueryVariables
>;
export const GetBlogDocument = gql`
  query GetBlog($slug: ID!) {
    blog(slug: $slug) {
      id
      title
      description
      htmlContent
      status
      createdAt
      updatedAt
      slug
      author {
        title
        image
      }
      image
      profiles {
        slug
        title
        thumbnail
        totalSold
        totalLeased
        totalFinanced
        dealsCount
        company {
          title
        }
      }
      tags {
        name
        slug
      }
    }
  }
`;

/**
 * __useGetBlogQuery__
 *
 * To run a query within a React component, call `useGetBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogQuery(
  baseOptions: Apollo.QueryHookOptions<GetBlogQuery, GetBlogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBlogQuery, GetBlogQueryVariables>(
    GetBlogDocument,
    options
  );
}
export function useGetBlogLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBlogQuery, GetBlogQueryVariables>(
    GetBlogDocument,
    options
  );
}
export type GetBlogQueryHookResult = ReturnType<typeof useGetBlogQuery>;
export type GetBlogLazyQueryHookResult = ReturnType<typeof useGetBlogLazyQuery>;
export type GetBlogQueryResult = Apollo.QueryResult<
  GetBlogQuery,
  GetBlogQueryVariables
>;
export const GetBlogsDocument = gql`
  query GetBlogs($limit: Int, $page: Int, $q: String, $tagSlugs: [String!]) {
    blogs(limit: $limit, page: $page, q: $q, tagSlugs: $tagSlugs) {
      id
      title
      description
      status
      createdAt
      updatedAt
      slug
      image
    }
  }
`;

/**
 * __useGetBlogsQuery__
 *
 * To run a query within a React component, call `useGetBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      q: // value for 'q'
 *      tagSlugs: // value for 'tagSlugs'
 *   },
 * });
 */
export function useGetBlogsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(
    GetBlogsDocument,
    options
  );
}
export function useGetBlogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBlogsQuery,
    GetBlogsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(
    GetBlogsDocument,
    options
  );
}
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>;
export type GetBlogsLazyQueryHookResult = ReturnType<
  typeof useGetBlogsLazyQuery
>;
export type GetBlogsQueryResult = Apollo.QueryResult<
  GetBlogsQuery,
  GetBlogsQueryVariables
>;
export const GetBlogsPathsDocument = gql`
  query GetBlogsPaths($limit: Int) {
    blogs(limit: $limit) {
      slug
    }
  }
`;

/**
 * __useGetBlogsPathsQuery__
 *
 * To run a query within a React component, call `useGetBlogsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsPathsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetBlogsPathsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBlogsPathsQuery,
    GetBlogsPathsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBlogsPathsQuery, GetBlogsPathsQueryVariables>(
    GetBlogsPathsDocument,
    options
  );
}
export function useGetBlogsPathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBlogsPathsQuery,
    GetBlogsPathsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBlogsPathsQuery, GetBlogsPathsQueryVariables>(
    GetBlogsPathsDocument,
    options
  );
}
export type GetBlogsPathsQueryHookResult = ReturnType<
  typeof useGetBlogsPathsQuery
>;
export type GetBlogsPathsLazyQueryHookResult = ReturnType<
  typeof useGetBlogsPathsLazyQuery
>;
export type GetBlogsPathsQueryResult = Apollo.QueryResult<
  GetBlogsPathsQuery,
  GetBlogsPathsQueryVariables
>;
export const GetTagsDocument = gql`
  query GetTags {
    tags {
      name
      slug
    }
  }
`;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(
    GetTagsDocument,
    options
  );
}
export function useGetTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(
    GetTagsDocument,
    options
  );
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<
  GetTagsQuery,
  GetTagsQueryVariables
>;
export const BrokerGetDocument = gql`
  query BrokerGet($slug: ID!) {
    broker(slug: $slug) {
      id
      slug
      name
      title
      email
      phone
      instagramHandle
      facebookHandle
      vimeoHandle
      youtubeHandle
      linkedinHandle
      websiteUrl
      googleplusHandle
      pinterestHandle
      twitterHandle
      bio
      bioSummary
      type
      thumbnail
      totalSold
      totalFinanced
      lastClosing
      totalSquareFootage
      totalVolume
      createdAt
      updatedAt
      className
      dealsCount
      stateWithMostDeals
      fellowWithMostDeals
      assetTypeWithMostDeals
      leaderBoardTags
      agencyFirstDealTogether
      agencyNumberOfDealsTogether
      agencyLargestDealSaleTogether
      agencyLastDealTogether
      assetTypesDropdown
      transactionTypesDropdown
      totalLeaseDeals
      stateTypesDropdown
      deals(page: 1, limit: 5) {
        id
        slug
        title
        mainImage
        closingDate
        transactionType
        profiles {
          id
          slug
          name
          thumbnail
          createdAt
          updatedAt
        }
        address
        properties {
          id
          state
          longitude
          latitude
        }
        salePrice
        pricePerSquareFoot
        assetType
        dealType
        createdAt
        feeds
        totalSquareFootageDeal
      }
      dealRanking {
        feeds
        transactionType
        slug
        id
        mainImage
        address
        salePrice
        totalSquareFootageDeal
        assetType
        closingDate
        createdAt
      }
      lastDeal {
        salePrice
        transactionType
        feeds
        slug
        lastClosing
        id
        createdAt
      }
      company {
        id
        slug
        title
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useBrokerGetQuery__
 *
 * To run a query within a React component, call `useBrokerGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrokerGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrokerGetQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBrokerGetQuery(
  baseOptions: Apollo.QueryHookOptions<BrokerGetQuery, BrokerGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BrokerGetQuery, BrokerGetQueryVariables>(
    BrokerGetDocument,
    options
  );
}
export function useBrokerGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BrokerGetQuery,
    BrokerGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BrokerGetQuery, BrokerGetQueryVariables>(
    BrokerGetDocument,
    options
  );
}
export type BrokerGetQueryHookResult = ReturnType<typeof useBrokerGetQuery>;
export type BrokerGetLazyQueryHookResult = ReturnType<
  typeof useBrokerGetLazyQuery
>;
export type BrokerGetQueryResult = Apollo.QueryResult<
  BrokerGetQuery,
  BrokerGetQueryVariables
>;
export const BrokerLeaderBoardDocument = gql`
  query BrokerLeaderBoard($slug: String!) {
    agentLeaderBoards(slug: $slug) {
      dealJunkie {
        id
        slug
        name
        totalVolume
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
      hotDeals {
        id
        slug
        name
        totalVolume
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
      leaseShark {
        id
        slug
        name
        totalVolume
        totalSquareFootage
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
      loanShark {
        id
        slug
        name
        totalVolume
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
      risingTalent {
        id
        slug
        name
        totalVolume
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
      unicorn {
        id
        slug
        name
        totalVolume
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
      whales {
        id
        slug
        name
        totalVolume
        dealsCount
        thumbnail
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useBrokerLeaderBoardQuery__
 *
 * To run a query within a React component, call `useBrokerLeaderBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrokerLeaderBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrokerLeaderBoardQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBrokerLeaderBoardQuery(
  baseOptions: Apollo.QueryHookOptions<
    BrokerLeaderBoardQuery,
    BrokerLeaderBoardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BrokerLeaderBoardQuery,
    BrokerLeaderBoardQueryVariables
  >(BrokerLeaderBoardDocument, options);
}
export function useBrokerLeaderBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BrokerLeaderBoardQuery,
    BrokerLeaderBoardQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BrokerLeaderBoardQuery,
    BrokerLeaderBoardQueryVariables
  >(BrokerLeaderBoardDocument, options);
}
export type BrokerLeaderBoardQueryHookResult = ReturnType<
  typeof useBrokerLeaderBoardQuery
>;
export type BrokerLeaderBoardLazyQueryHookResult = ReturnType<
  typeof useBrokerLeaderBoardLazyQuery
>;
export type BrokerLeaderBoardQueryResult = Apollo.QueryResult<
  BrokerLeaderBoardQuery,
  BrokerLeaderBoardQueryVariables
>;
export const BrokersGetDocument = gql`
  query BrokersGet($page: Int, $limit: Int) {
    brokers(page: $page, limit: $limit) {
      nodes {
        id
        bio
        name
        phone
        bio
        type
        thumbnail
        className
        companyId
        company {
          id
          title
          slug
        }
        type
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

/**
 * __useBrokersGetQuery__
 *
 * To run a query within a React component, call `useBrokersGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrokersGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrokersGetQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBrokersGetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BrokersGetQuery,
    BrokersGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BrokersGetQuery, BrokersGetQueryVariables>(
    BrokersGetDocument,
    options
  );
}
export function useBrokersGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BrokersGetQuery,
    BrokersGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BrokersGetQuery, BrokersGetQueryVariables>(
    BrokersGetDocument,
    options
  );
}
export type BrokersGetQueryHookResult = ReturnType<typeof useBrokersGetQuery>;
export type BrokersGetLazyQueryHookResult = ReturnType<
  typeof useBrokersGetLazyQuery
>;
export type BrokersGetQueryResult = Apollo.QueryResult<
  BrokersGetQuery,
  BrokersGetQueryVariables
>;
export const BrokerRelationshipsDocument = gql`
  query BrokerRelationships($slug: String!, $page: Int!, $limit: Int!) {
    brokerRelationships(slug: $slug, page: $page, limit: $limit) {
      agents {
        totalCount
        nodes {
          id
          slug
          name
          email
          thumbnail
          totalVolume
          dealsCount
          firstDealTogether
          numberOfDealsTogether
          largestDealSaleTogether
          lastDealTogether
          agencyFirstDealTogether
          agencyNumberOfDealsTogether
          agencyLargestDealSaleTogether
          agencyLastDealTogether
          createdAt
          updatedAt
        }
      }
      agencies {
        totalCount
        nodes {
          type
          slug
          mainImage
          title
        }
      }
      lenders {
        totalCount
        nodes {
          type
          slug
          mainImage
          title
        }
      }
    }
  }
`;

/**
 * __useBrokerRelationshipsQuery__
 *
 * To run a query within a React component, call `useBrokerRelationshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrokerRelationshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrokerRelationshipsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBrokerRelationshipsQuery(
  baseOptions: Apollo.QueryHookOptions<
    BrokerRelationshipsQuery,
    BrokerRelationshipsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BrokerRelationshipsQuery,
    BrokerRelationshipsQueryVariables
  >(BrokerRelationshipsDocument, options);
}
export function useBrokerRelationshipsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BrokerRelationshipsQuery,
    BrokerRelationshipsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BrokerRelationshipsQuery,
    BrokerRelationshipsQueryVariables
  >(BrokerRelationshipsDocument, options);
}
export type BrokerRelationshipsQueryHookResult = ReturnType<
  typeof useBrokerRelationshipsQuery
>;
export type BrokerRelationshipsLazyQueryHookResult = ReturnType<
  typeof useBrokerRelationshipsLazyQuery
>;
export type BrokerRelationshipsQueryResult = Apollo.QueryResult<
  BrokerRelationshipsQuery,
  BrokerRelationshipsQueryVariables
>;
export const BrokerTransactionsDocument = gql`
  query BrokerTransactions(
    $slug: ID!
    $page: Int!
    $limit: Int!
    $type: String
    $sortBy: String
    $area: String
    $assetClass: [String!]
  ) {
    brokerTransactions(
      slug: $slug
      page: $page
      limit: $limit
      type: $type
      sortBy: $sortBy
      area: $area
      assetClass: $assetClass
    ) {
      id
      slug
      title
      mainImage
      closingDate
      transactionType
      totalDeals
      profiles {
        id
        slug
        name
        thumbnail
        createdAt
        updatedAt
      }
      address
      properties {
        id
        state
        longitude
        latitude
      }
      salePrice
      pricePerSquareFoot
      assetType
      dealType
      createdAt
      feeds
      totalSquareFootageDeal
    }
  }
`;

/**
 * __useBrokerTransactionsQuery__
 *
 * To run a query within a React component, call `useBrokerTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrokerTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrokerTransactionsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      type: // value for 'type'
 *      sortBy: // value for 'sortBy'
 *      area: // value for 'area'
 *      assetClass: // value for 'assetClass'
 *   },
 * });
 */
export function useBrokerTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    BrokerTransactionsQuery,
    BrokerTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BrokerTransactionsQuery,
    BrokerTransactionsQueryVariables
  >(BrokerTransactionsDocument, options);
}
export function useBrokerTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BrokerTransactionsQuery,
    BrokerTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BrokerTransactionsQuery,
    BrokerTransactionsQueryVariables
  >(BrokerTransactionsDocument, options);
}
export type BrokerTransactionsQueryHookResult = ReturnType<
  typeof useBrokerTransactionsQuery
>;
export type BrokerTransactionsLazyQueryHookResult = ReturnType<
  typeof useBrokerTransactionsLazyQuery
>;
export type BrokerTransactionsQueryResult = Apollo.QueryResult<
  BrokerTransactionsQuery,
  BrokerTransactionsQueryVariables
>;
export const CompaniesDocument = gql`
  query Companies(
    $companyType: String!
    $page: Int
    $limit: Int
    $sortBy: String
    $agentsSortBy: String
    $agentsLimit: Int!
    $agentsPage: Int!
    $area: String
    $type: String
    $priceRange: String
    $loanAmount: String
  ) {
    companies(
      companyType: $companyType
      page: $page
      limit: $limit
      sortBy: $sortBy
      area: $area
      type: $type
      priceRange: $priceRange
      loanAmount: $loanAmount
    ) {
      totalCount
      nodes {
        address
        title
        mainImage
        totalVolume
        totalSquareFootage
        dealsCount
        totalFinanced
        lastClosing
        description
        slug
        stateTypesDropdown
        profilesCount
        linkedinUrl
        facebookUrl
        twitterUrl
        instagramUrl
        agents(sortBy: $agentsSortBy, limit: $agentsLimit, page: $agentsPage) {
          mainImage
          thumbnail
          slug
        }
      }
    }
  }
`;

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *      companyType: // value for 'companyType'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortBy: // value for 'sortBy'
 *      agentsSortBy: // value for 'agentsSortBy'
 *      agentsLimit: // value for 'agentsLimit'
 *      agentsPage: // value for 'agentsPage'
 *      area: // value for 'area'
 *      type: // value for 'type'
 *      priceRange: // value for 'priceRange'
 *      loanAmount: // value for 'loanAmount'
 *   },
 * });
 */
export function useCompaniesQuery(
  baseOptions: Apollo.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompaniesQuery, CompaniesQueryVariables>(
    CompaniesDocument,
    options
  );
}
export function useCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompaniesQuery,
    CompaniesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(
    CompaniesDocument,
    options
  );
}
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<
  typeof useCompaniesLazyQuery
>;
export type CompaniesQueryResult = Apollo.QueryResult<
  CompaniesQuery,
  CompaniesQueryVariables
>;
export const CompanyStatisticsGraphDocument = gql`
  query CompanyStatisticsGraph($slug: String!, $companyType: String!) {
    companyStatisticsGraph(slug: $slug, companyType: $companyType) {
      assetClassPercentage
      locationPercentage
    }
  }
`;

/**
 * __useCompanyStatisticsGraphQuery__
 *
 * To run a query within a React component, call `useCompanyStatisticsGraphQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyStatisticsGraphQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyStatisticsGraphQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      companyType: // value for 'companyType'
 *   },
 * });
 */
export function useCompanyStatisticsGraphQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyStatisticsGraphQuery,
    CompanyStatisticsGraphQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CompanyStatisticsGraphQuery,
    CompanyStatisticsGraphQueryVariables
  >(CompanyStatisticsGraphDocument, options);
}
export function useCompanyStatisticsGraphLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyStatisticsGraphQuery,
    CompanyStatisticsGraphQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanyStatisticsGraphQuery,
    CompanyStatisticsGraphQueryVariables
  >(CompanyStatisticsGraphDocument, options);
}
export type CompanyStatisticsGraphQueryHookResult = ReturnType<
  typeof useCompanyStatisticsGraphQuery
>;
export type CompanyStatisticsGraphLazyQueryHookResult = ReturnType<
  typeof useCompanyStatisticsGraphLazyQuery
>;
export type CompanyStatisticsGraphQueryResult = Apollo.QueryResult<
  CompanyStatisticsGraphQuery,
  CompanyStatisticsGraphQueryVariables
>;
export const CompaniesGetDocument = gql`
  query CompaniesGet($page: Int, $limit: Int, $companyType: String!) {
    companies(page: $page, limit: $limit, companyType: $companyType) {
      nodes {
        ...CompanyParts
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
  ${CompanyPartsFragmentDoc}
`;

/**
 * __useCompaniesGetQuery__
 *
 * To run a query within a React component, call `useCompaniesGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesGetQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      companyType: // value for 'companyType'
 *   },
 * });
 */
export function useCompaniesGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompaniesGetQuery,
    CompaniesGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompaniesGetQuery, CompaniesGetQueryVariables>(
    CompaniesGetDocument,
    options
  );
}
export function useCompaniesGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompaniesGetQuery,
    CompaniesGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompaniesGetQuery, CompaniesGetQueryVariables>(
    CompaniesGetDocument,
    options
  );
}
export type CompaniesGetQueryHookResult = ReturnType<
  typeof useCompaniesGetQuery
>;
export type CompaniesGetLazyQueryHookResult = ReturnType<
  typeof useCompaniesGetLazyQuery
>;
export type CompaniesGetQueryResult = Apollo.QueryResult<
  CompaniesGetQuery,
  CompaniesGetQueryVariables
>;
export const CompanyGetDocument = gql`
  query CompanyGet($slug: String!, $companyType: String!) {
    company(slug: $slug, companyType: $companyType) {
      ...CompanyParts
    }
  }
  ${CompanyPartsFragmentDoc}
`;

/**
 * __useCompanyGetQuery__
 *
 * To run a query within a React component, call `useCompanyGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyGetQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      companyType: // value for 'companyType'
 *   },
 * });
 */
export function useCompanyGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyGetQuery,
    CompanyGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompanyGetQuery, CompanyGetQueryVariables>(
    CompanyGetDocument,
    options
  );
}
export function useCompanyGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyGetQuery,
    CompanyGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompanyGetQuery, CompanyGetQueryVariables>(
    CompanyGetDocument,
    options
  );
}
export type CompanyGetQueryHookResult = ReturnType<typeof useCompanyGetQuery>;
export type CompanyGetLazyQueryHookResult = ReturnType<
  typeof useCompanyGetLazyQuery
>;
export type CompanyGetQueryResult = Apollo.QueryResult<
  CompanyGetQuery,
  CompanyGetQueryVariables
>;
export const CompanyMarketResolverDocument = gql`
  query CompanyMarketResolver($companyType: String!, $sortBy: String!) {
    companyMarket(companyType: $companyType, sortBy: $sortBy) {
      ...CompanyMarketShare
    }
  }
  ${CompanyMarketShareFragmentDoc}
`;

/**
 * __useCompanyMarketResolverQuery__
 *
 * To run a query within a React component, call `useCompanyMarketResolverQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyMarketResolverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyMarketResolverQuery({
 *   variables: {
 *      companyType: // value for 'companyType'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useCompanyMarketResolverQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyMarketResolverQuery,
    CompanyMarketResolverQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CompanyMarketResolverQuery,
    CompanyMarketResolverQueryVariables
  >(CompanyMarketResolverDocument, options);
}
export function useCompanyMarketResolverLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyMarketResolverQuery,
    CompanyMarketResolverQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanyMarketResolverQuery,
    CompanyMarketResolverQueryVariables
  >(CompanyMarketResolverDocument, options);
}
export type CompanyMarketResolverQueryHookResult = ReturnType<
  typeof useCompanyMarketResolverQuery
>;
export type CompanyMarketResolverLazyQueryHookResult = ReturnType<
  typeof useCompanyMarketResolverLazyQuery
>;
export type CompanyMarketResolverQueryResult = Apollo.QueryResult<
  CompanyMarketResolverQuery,
  CompanyMarketResolverQueryVariables
>;
export const CompanyTransactionsDocument = gql`
  query CompanyTransactions(
    $slug: ID!
    $page: Int!
    $limit: Int!
    $companyType: String!
    $type: String
    $sortBy: String
    $area: String
    $assetClass: [String!]
  ) {
    companyTransactions(
      slug: $slug
      page: $page
      limit: $limit
      companyType: $companyType
      type: $type
      sortBy: $sortBy
      area: $area
      assetClass: $assetClass
    ) {
      id
      slug
      title
      mainImage
      closingDate
      transactionType
      totalDeals
      profiles {
        id
        slug
        name
        thumbnail
        createdAt
        updatedAt
      }
      address
      properties {
        id
        state
        longitude
        latitude
      }
      salePrice
      loanAmount
      pricePerSquareFoot
      assetType
      dealType
      createdAt
      feeds
      totalSquareFootageDeal
    }
  }
`;

/**
 * __useCompanyTransactionsQuery__
 *
 * To run a query within a React component, call `useCompanyTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyTransactionsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      companyType: // value for 'companyType'
 *      type: // value for 'type'
 *      sortBy: // value for 'sortBy'
 *      area: // value for 'area'
 *      assetClass: // value for 'assetClass'
 *   },
 * });
 */
export function useCompanyTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyTransactionsQuery,
    CompanyTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CompanyTransactionsQuery,
    CompanyTransactionsQueryVariables
  >(CompanyTransactionsDocument, options);
}
export function useCompanyTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyTransactionsQuery,
    CompanyTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanyTransactionsQuery,
    CompanyTransactionsQueryVariables
  >(CompanyTransactionsDocument, options);
}
export type CompanyTransactionsQueryHookResult = ReturnType<
  typeof useCompanyTransactionsQuery
>;
export type CompanyTransactionsLazyQueryHookResult = ReturnType<
  typeof useCompanyTransactionsLazyQuery
>;
export type CompanyTransactionsQueryResult = Apollo.QueryResult<
  CompanyTransactionsQuery,
  CompanyTransactionsQueryVariables
>;
export const DealComparablesDocument = gql`
  query DealComparables($slug: ID!, $page: Int!, $limit: Int!) {
    dealComparables(slug: $slug, page: $page, limit: $limit) {
      totalDeals
      id
      slug
      title
      mainImage
      closingDate
      transactionType
      address
      salePrice
      pricePerSquareFoot
      assetType
      dealType
      createdAt
      feeds
      totalSquareFootageDeal
      profiles {
        id
        slug
        name
        thumbnail
        createdAt
        updatedAt
      }
      properties {
        id
        state
        longitude
        latitude
      }
    }
  }
`;

/**
 * __useDealComparablesQuery__
 *
 * To run a query within a React component, call `useDealComparablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealComparablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealComparablesQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useDealComparablesQuery(
  baseOptions: Apollo.QueryHookOptions<
    DealComparablesQuery,
    DealComparablesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DealComparablesQuery, DealComparablesQueryVariables>(
    DealComparablesDocument,
    options
  );
}
export function useDealComparablesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DealComparablesQuery,
    DealComparablesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DealComparablesQuery,
    DealComparablesQueryVariables
  >(DealComparablesDocument, options);
}
export type DealComparablesQueryHookResult = ReturnType<
  typeof useDealComparablesQuery
>;
export type DealComparablesLazyQueryHookResult = ReturnType<
  typeof useDealComparablesLazyQuery
>;
export type DealComparablesQueryResult = Apollo.QueryResult<
  DealComparablesQuery,
  DealComparablesQueryVariables
>;
export const CreateTestimonialDocument = gql`
  mutation CreateTestimonial(
    $firstName: String!
    $lastName: String!
    $email: String!
    $state: String!
    $content: String!
    $titleAndCompany: String!
    $imageUrl: String
  ) {
    createTestimonial(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        state: $state
        content: $content
        titleAndCompany: $titleAndCompany
        imageUrl: $imageUrl
      }
    ) {
      testimonial {
        clientSlug
        clientEmail
        state
        clientImage
        companySlug
        clientCompany
        clientDesignation
        title
        content
      }
    }
  }
`;
export type CreateTestimonialMutationFn = Apollo.MutationFunction<
  CreateTestimonialMutation,
  CreateTestimonialMutationVariables
>;

/**
 * __useCreateTestimonialMutation__
 *
 * To run a mutation, you first call `useCreateTestimonialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestimonialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestimonialMutation, { data, loading, error }] = useCreateTestimonialMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      state: // value for 'state'
 *      content: // value for 'content'
 *      titleAndCompany: // value for 'titleAndCompany'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useCreateTestimonialMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTestimonialMutation,
    CreateTestimonialMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateTestimonialMutation,
    CreateTestimonialMutationVariables
  >(CreateTestimonialDocument, options);
}
export type CreateTestimonialMutationHookResult = ReturnType<
  typeof useCreateTestimonialMutation
>;
export type CreateTestimonialMutationResult =
  Apollo.MutationResult<CreateTestimonialMutation>;
export type CreateTestimonialMutationOptions = Apollo.BaseMutationOptions<
  CreateTestimonialMutation,
  CreateTestimonialMutationVariables
>;
export const DealsDocument = gql`
  query Deals(
    $page: Int
    $limit: Int
    $assetClass: String
    $area: String
    $type: String
    $priceRange: String
    $dateRange: String
    $search: String
    $sortBy: String
    $state: String
  ) {
    deals(
      page: $page
      limit: $limit
      assetClass: $assetClass
      area: $area
      type: $type
      priceRange: $priceRange
      dateRange: $dateRange
      search: $search
      sortBy: $sortBy
      state: $state
    ) {
      id
      slug
      title
      mainImage
      closingDate
      transactionType
      totalDeals
      profiles {
        id
        slug
        name
        thumbnail
        createdAt
        updatedAt
      }
      address
      properties {
        id
        state
        longitude
        latitude
      }
      salePrice
      pricePerSquareFoot
      assetType
      dealType
      createdAt
      feeds
      totalSquareFootageDeal
    }
  }
`;

/**
 * __useDealsQuery__
 *
 * To run a query within a React component, call `useDealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      assetClass: // value for 'assetClass'
 *      area: // value for 'area'
 *      type: // value for 'type'
 *      priceRange: // value for 'priceRange'
 *      dateRange: // value for 'dateRange'
 *      search: // value for 'search'
 *      sortBy: // value for 'sortBy'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useDealsQuery(
  baseOptions?: Apollo.QueryHookOptions<DealsQuery, DealsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DealsQuery, DealsQueryVariables>(
    DealsDocument,
    options
  );
}
export function useDealsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DealsQuery, DealsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DealsQuery, DealsQueryVariables>(
    DealsDocument,
    options
  );
}
export type DealsQueryHookResult = ReturnType<typeof useDealsQuery>;
export type DealsLazyQueryHookResult = ReturnType<typeof useDealsLazyQuery>;
export type DealsQueryResult = Apollo.QueryResult<
  DealsQuery,
  DealsQueryVariables
>;
export const CompanyGraphGetDocument = gql`
  query CompanyGraphGet($slug: String!, $companyType: String!) {
    graphs(slug: $slug, companyType: $companyType) {
      deals
      lease
      loan
      sale
      volume
    }
  }
`;

/**
 * __useCompanyGraphGetQuery__
 *
 * To run a query within a React component, call `useCompanyGraphGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyGraphGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyGraphGetQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      companyType: // value for 'companyType'
 *   },
 * });
 */
export function useCompanyGraphGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyGraphGetQuery,
    CompanyGraphGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompanyGraphGetQuery, CompanyGraphGetQueryVariables>(
    CompanyGraphGetDocument,
    options
  );
}
export function useCompanyGraphGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyGraphGetQuery,
    CompanyGraphGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanyGraphGetQuery,
    CompanyGraphGetQueryVariables
  >(CompanyGraphGetDocument, options);
}
export type CompanyGraphGetQueryHookResult = ReturnType<
  typeof useCompanyGraphGetQuery
>;
export type CompanyGraphGetLazyQueryHookResult = ReturnType<
  typeof useCompanyGraphGetLazyQuery
>;
export type CompanyGraphGetQueryResult = Apollo.QueryResult<
  CompanyGraphGetQuery,
  CompanyGraphGetQueryVariables
>;
export const LeaderBoardGetDocument = gql`
  query LeaderBoardGet($state: String) {
    leaderBoardResolver(state: $state) {
      dealJunkie {
        ...LeaderBoardItemFields
      }
      hotDeals {
        ...LeaderBoardItemFields
      }
      leaseShark {
        ...LeaderBoardItemFields
      }
      loanShark {
        ...LeaderBoardItemFields
      }
      risingTalent {
        ...LeaderBoardItemFields
      }
      unicorn {
        ...LeaderBoardItemFields
      }
      whales {
        ...LeaderBoardItemFields
      }
    }
  }
  ${LeaderBoardItemFieldsFragmentDoc}
`;

/**
 * __useLeaderBoardGetQuery__
 *
 * To run a query within a React component, call `useLeaderBoardGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderBoardGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderBoardGetQuery({
 *   variables: {
 *      state: // value for 'state'
 *   },
 * });
 */
export function useLeaderBoardGetQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LeaderBoardGetQuery,
    LeaderBoardGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LeaderBoardGetQuery, LeaderBoardGetQueryVariables>(
    LeaderBoardGetDocument,
    options
  );
}
export function useLeaderBoardGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LeaderBoardGetQuery,
    LeaderBoardGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LeaderBoardGetQuery, LeaderBoardGetQueryVariables>(
    LeaderBoardGetDocument,
    options
  );
}
export type LeaderBoardGetQueryHookResult = ReturnType<
  typeof useLeaderBoardGetQuery
>;
export type LeaderBoardGetLazyQueryHookResult = ReturnType<
  typeof useLeaderBoardGetLazyQuery
>;
export type LeaderBoardGetQueryResult = Apollo.QueryResult<
  LeaderBoardGetQuery,
  LeaderBoardGetQueryVariables
>;
export const RecentDealGetDocument = gql`
  query recentDealGet($limit: Int!, $state: String) {
    recentDeal(limit: $limit, state: $state) {
      recentSales {
        id
        slug
        mainImage
        closingDate
        lastClosing
        salePrice
        pricePerSquareFoot
        totalSquareFootageDeal
        assetType
        feeds
        transactionType
        profiles {
          id
          slug
          name
          thumbnail
          updatedAt
          createdAt
        }
        companies {
          id
          slug
          mainImage
          updatedAt
          createdAt
        }
        properties {
          id
          displayAddress
          state
        }
        createdAt
      }
      recentLoans {
        id
        slug
        mainImage
        closingDate
        lastClosing
        salePrice
        pricePerSquareFoot
        totalSquareFootageDeal
        assetType
        feeds
        transactionType
        profiles {
          id
          slug
          name
          thumbnail
          updatedAt
          createdAt
        }
        companies {
          id
          slug
          mainImage
          updatedAt
          createdAt
        }
        properties {
          id
          displayAddress
          state
        }
        createdAt
      }
      recentLeases {
        id
        slug
        mainImage
        closingDate
        lastClosing
        salePrice
        pricePerSquareFoot
        totalSquareFootageDeal
        assetType
        feeds
        transactionType
        profiles {
          id
          slug
          name
          thumbnail
          updatedAt
          createdAt
        }
        companies {
          id
          slug
          mainImage
          updatedAt
          createdAt
        }
        properties {
          id
          displayAddress
          state
        }
        createdAt
      }
    }
  }
`;

/**
 * __useRecentDealGetQuery__
 *
 * To run a query within a React component, call `useRecentDealGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentDealGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentDealGetQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useRecentDealGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    RecentDealGetQuery,
    RecentDealGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecentDealGetQuery, RecentDealGetQueryVariables>(
    RecentDealGetDocument,
    options
  );
}
export function useRecentDealGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RecentDealGetQuery,
    RecentDealGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecentDealGetQuery, RecentDealGetQueryVariables>(
    RecentDealGetDocument,
    options
  );
}
export type RecentDealGetQueryHookResult = ReturnType<
  typeof useRecentDealGetQuery
>;
export type RecentDealGetLazyQueryHookResult = ReturnType<
  typeof useRecentDealGetLazyQuery
>;
export type RecentDealGetQueryResult = Apollo.QueryResult<
  RecentDealGetQuery,
  RecentDealGetQueryVariables
>;
export const SearchGetDocument = gql`
  query SearchGet($term: String) {
    search(term: $term) {
      agents {
        id
        slug
        name
        createdAt
        updatedAt
        email
        type
        mainImage
        thumbnail
        companyName
        dealsCount
        totalSold
        totalFinanced
        lastClosing
      }
      agencies {
        id
        slug
        title
        createdAt
        updatedAt
        mainImage
        type
        profilesCount
        totalSold
        totalFinanced
        dealsCount
      }
      lenders {
        id
        slug
        title
        createdAt
        updatedAt
        mainImage
        type
        totalFinanced
        dealsCount
        totalSquareFootage
        profilesCount
      }
      deals {
        id
        slug
        title
        address
        mainImage
        lastClosing
        assetType
        totalSquareFootageDeal
        feeds
        transactionType
        properties {
          latitude
          longitude
        }
      }
    }
  }
`;

/**
 * __useSearchGetQuery__
 *
 * To run a query within a React component, call `useSearchGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGetQuery({
 *   variables: {
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearchGetQuery(
  baseOptions?: Apollo.QueryHookOptions<SearchGetQuery, SearchGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchGetQuery, SearchGetQueryVariables>(
    SearchGetDocument,
    options
  );
}
export function useSearchGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchGetQuery,
    SearchGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchGetQuery, SearchGetQueryVariables>(
    SearchGetDocument,
    options
  );
}
export type SearchGetQueryHookResult = ReturnType<typeof useSearchGetQuery>;
export type SearchGetLazyQueryHookResult = ReturnType<
  typeof useSearchGetLazyQuery
>;
export type SearchGetQueryResult = Apollo.QueryResult<
  SearchGetQuery,
  SearchGetQueryVariables
>;
export const DealGetDocument = gql`
  query DealGet($slug: ID!) {
    deal(slug: $slug) {
      id
      slug
      feeds
      transactionType
      createdAt
      title
      mainImage
      dealType
      dealsInfo
      instagramId
      description
      metaDescription
      pricePerSquareFoot
      totalSquareFootageDeal
      properties {
        id
        displayAddress
        latitude
        longitude
      }
      salePrice
      assetType
      parties
      caption
      profiles {
        id
        slug
        name
        thumbnail
        dealsCount
        totalSold
        totalLeaseDeals
        totalFinanced
        createdAt
        updatedAt
        company {
          id
          title
          slug
          type
          createdAt
          updatedAt
        }
      }
      companies {
        id
        slug
        mainImage
        title
        createdAt
        updatedAt
        dealsCount
        totalVolume
      }
      lenders {
        id
        slug
        mainImage
        title
        createdAt
        updatedAt
        dealsCount
        totalVolume
      }
    }
  }
`;

/**
 * __useDealGetQuery__
 *
 * To run a query within a React component, call `useDealGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealGetQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useDealGetQuery(
  baseOptions: Apollo.QueryHookOptions<DealGetQuery, DealGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DealGetQuery, DealGetQueryVariables>(
    DealGetDocument,
    options
  );
}
export function useDealGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DealGetQuery, DealGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DealGetQuery, DealGetQueryVariables>(
    DealGetDocument,
    options
  );
}
export type DealGetQueryHookResult = ReturnType<typeof useDealGetQuery>;
export type DealGetLazyQueryHookResult = ReturnType<typeof useDealGetLazyQuery>;
export type DealGetQueryResult = Apollo.QueryResult<
  DealGetQuery,
  DealGetQueryVariables
>;
export const DealsComparablesGetDocument = gql`
  query DealsComparablesGet($slug: ID!, $first: Int, $after: String) {
    deal(slug: $slug) {
      comparables(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          slug
          title
          mainImage
          closingDate
          transactionType
          address
          salePrice
          pricePerSquareFoot
          assetType
          dealType
          createdAt
          feeds
          totalSquareFootageDeal
          profiles {
            id
            slug
            name
            thumbnail
            createdAt
            updatedAt
          }
          properties {
            id
            state
            longitude
            latitude
          }
        }
      }
    }
  }
`;

/**
 * __useDealsComparablesGetQuery__
 *
 * To run a query within a React component, call `useDealsComparablesGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealsComparablesGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealsComparablesGetQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useDealsComparablesGetQuery(
  baseOptions: Apollo.QueryHookOptions<
    DealsComparablesGetQuery,
    DealsComparablesGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DealsComparablesGetQuery,
    DealsComparablesGetQueryVariables
  >(DealsComparablesGetDocument, options);
}
export function useDealsComparablesGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DealsComparablesGetQuery,
    DealsComparablesGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DealsComparablesGetQuery,
    DealsComparablesGetQueryVariables
  >(DealsComparablesGetDocument, options);
}
export type DealsComparablesGetQueryHookResult = ReturnType<
  typeof useDealsComparablesGetQuery
>;
export type DealsComparablesGetLazyQueryHookResult = ReturnType<
  typeof useDealsComparablesGetLazyQuery
>;
export type DealsComparablesGetQueryResult = Apollo.QueryResult<
  DealsComparablesGetQuery,
  DealsComparablesGetQueryVariables
>;
export const DealsGetDocument = gql`
  query DealsGet($page: Int, $limit: Int) {
    deals(page: $page, limit: $limit) {
      id
      slug
      feeds
      transactionType
      createdAt
      mainImage
      title
      salePrice
      feeds
      transactionType
    }
  }
`;

/**
 * __useDealsGetQuery__
 *
 * To run a query within a React component, call `useDealsGetQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealsGetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealsGetQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useDealsGetQuery(
  baseOptions?: Apollo.QueryHookOptions<DealsGetQuery, DealsGetQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DealsGetQuery, DealsGetQueryVariables>(
    DealsGetDocument,
    options
  );
}
export function useDealsGetLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DealsGetQuery,
    DealsGetQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DealsGetQuery, DealsGetQueryVariables>(
    DealsGetDocument,
    options
  );
}
export type DealsGetQueryHookResult = ReturnType<typeof useDealsGetQuery>;
export type DealsGetLazyQueryHookResult = ReturnType<
  typeof useDealsGetLazyQuery
>;
export type DealsGetQueryResult = Apollo.QueryResult<
  DealsGetQuery,
  DealsGetQueryVariables
>;
