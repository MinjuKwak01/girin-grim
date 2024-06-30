import { BackedFunding, FundingMember, FundingOptionWithId } from "./Funding";

export type Backed = {
  member: FundingMember;
  funding: BackedFunding;
  options: FundingOptionWithId[];
} & {
  totalPrice: number;
  address: string;
};
