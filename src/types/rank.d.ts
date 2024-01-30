type DealRankings = Array<Rank<Transaction>>;

interface Rank<T> extends T {
  id: string;
  position: number;
}
