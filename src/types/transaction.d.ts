type TransactionTypes = 'Lease' | 'Sale' | 'Loan';

interface Transaction<T = TransactionTypes> {
  id: string;
  type: T;
  imageUrl?: string;
  dealDate: string;
  agents: Broker[];
  agencies: Agency[];
  logoUrl?: string;
  thumbnail?: string;
  address: string;
  state: string;
  price: string;
  ppsf: string;
  sf: string;
  asset: string;
}
