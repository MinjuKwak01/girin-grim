import { BackedFunding, FundingMember, FundingOptionsWithId } from "./Funding";

export type Backed = {
  member: FundingMember;
  funding: BackedFunding;
  options: FundingOptionsWithId[];
} & {
  totalPrice: number;
  address: string;
};
