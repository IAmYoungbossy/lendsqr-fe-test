type SocialsType = {
  twitter: string;
  facebook: string;
  instagram: string;
};

type GuarantorType = {
  gender: string;
  address: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
};

type ProfileType = {
  bvn: string;
  gender: string;
  avatar: string;
  address: string;
  lastName: string;
  currency: string;
  firstName: string;
  phoneNumber: string;
};

type EducationType = {
  level: string;
  sector: string;
  duration: string;
  officeEmail: string;
  loanRepayment: string;
  monthlyIncome: string[];
  employmentStatus: string;
};

export type UserDataType = {
  id: string;
  email: string;
  active?: string;
  orgName: string;
  userName: string;
  createdAt: string;
  phoneNumber: string;
  profile: ProfileType;
  socials: SocialsType;
  accountNumber: string;
  lastActiveDate: string;
  accountBalance: string;
  education: EducationType;
  guarantor: GuarantorType;
};

export interface AppDataProviderProps {
  children: React.ReactNode;
}

export interface AppStateType {
  currentPage: number;
  tableRowsNumber: number;
  pages: [] | UserDataType[][];
  allUsersData: [] | UserDataType[];
  singleUserDetails: {} | UserDataType;
}

export interface IActionType {
  type: string;
  payload:
    | UserDataType[]
    | UserDataType
    | UserDataType[][]
    | number;
}
