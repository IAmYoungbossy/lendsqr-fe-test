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
  avatar: string;
  gender: string;
  address: string;
  currency: string;
  lastName: string;
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
  orgName: string;
  userName: string;
  createdAt: string;
  phoneNumber: string;
  profile: ProfileType;
  socials: SocialsType;
  accountNumber: string;
  accountBalance: string;
  lastActiveDate: string;
  education: EducationType;
  guarantor: GuarantorType;
};

export interface AppDataProviderProps {
  children: React.ReactNode;
}

export interface AppStateType {
  allUsersData: [] | UserDataType[];
}

export interface IActionType {
  type: string;
  payload: UserDataType[];
}
