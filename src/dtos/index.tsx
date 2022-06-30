export interface TopData {
  id?: string;
  email: string;
  name: string;
  phone: string;
  points: number;
}

export type TopTenData = TopData[];
