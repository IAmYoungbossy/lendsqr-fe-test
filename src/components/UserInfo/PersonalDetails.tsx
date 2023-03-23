import { useContext } from "react";
import "./styles/PersonalDetails.css";
import { UserDataType } from "../../types/types";
import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";

export default function PersonalDetails() {
  return (
    <div className="personal-details">
      <PersonalInfo />
      <EducationAndEmployment />
      <Socials />
      <Gaurantor />
      <GaurantorDetails />
    </div>
  );
}

function PersonalInfo() {
  const { state } = useContext(
    AppContext
  ) as AppContextProps;
  const userDetails =
    state.singleUserDetails as UserDataType;
  const firstName = userDetails.profile.firstName;
  const lastName = userDetails.profile.lastName;

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <Detail
          info="Full Name"
          value={`${firstName} ${lastName}`}
        />
        <Detail
          info="Phone Number"
          value={userDetails.phoneNumber}
        />
        <Detail
          info="Email Address"
          value={userDetails.email}
        />
        <Detail
          info="BVN"
          value={userDetails.profile.bvn}
        />
        <Detail
          info="Gender"
          value={userDetails.profile.gender}
        />
        <Detail
          info="Marital Status"
          value="Single"
        />
        <Detail
          info="Children"
          value="none"
        />
        <Detail
          info="Type Of Residence"
          value="Parent's Apartment"
        />
      </div>
    </div>
  );
}

function EducationAndEmployment() {
  const { state } = useContext(
    AppContext
  ) as AppContextProps;
  const userDetails =
    state.singleUserDetails as UserDataType;
  const maxRangeIncome =
    userDetails.education.monthlyIncome[0];
  const minRangeIncome =
    userDetails.education.monthlyIncome[1];

  return (
    <div>
      <h2>Education And Employment</h2>
      <div>
        <Detail
          info="Level Of Education"
          value={userDetails.education.level}
        />
        <Detail
          info="Employment Status"
          value={userDetails.education.employmentStatus}
        />
        <Detail
          info="Sector Of Employment"
          value={userDetails.education.sector}
        />
        <Detail
          info="Duration Of Employment"
          value={userDetails.education.duration}
        />
        <Detail
          info="Office Email"
          value={userDetails.education.officeEmail}
        />
        <Detail
          info="Monthly Income"
          value={`${maxRangeIncome} - ${minRangeIncome}`}
        />
        <Detail
          info="Loan Repayment"
          value={userDetails.education.loanRepayment}
        />
      </div>
    </div>
  );
}

function Socials() {
  const { state } = useContext(
    AppContext
  ) as AppContextProps;
  const userDetails =
    state.singleUserDetails as UserDataType;

  return (
    <div>
      <h2>Social</h2>
      <div>
        <Detail
          info="Twitter"
          value={userDetails.socials.twitter}
        />
        <Detail
          info="Facebook"
          value={userDetails.socials.facebook}
        />
        <Detail
          info="Instagram"
          value={userDetails.socials.instagram}
        />
      </div>
    </div>
  );
}

function Gaurantor() {
  return (
    <div>
      <h2>Gaurantor</h2>
      <GaurantorDetails />
    </div>
  );
}

function GaurantorDetails() {
  const { state } = useContext(
    AppContext
  ) as AppContextProps;
  const userDetails =
    state.singleUserDetails as UserDataType;
  const firstName = userDetails.guarantor.firstName;
  const lasstName = userDetails.guarantor.lastName;
  return (
    <div>
      <Detail
        info="Full Name"
        value={`${firstName} ${lasstName}`}
      />
      <Detail
        info="Phone Number"
        value={userDetails.guarantor.phoneNumber}
      />
      <Detail
        info="Email Address"
        value={userDetails.guarantor.address}
      />
      <Detail
        info="Relationship"
        value={userDetails.guarantor.gender}
      />
    </div>
  );
}

function Detail({
  info,
  value,
}: {
  info: string;
  value: string;
}) {
  return (
    <div>
      <h4>{info}</h4>
      <p>{value}</p>
    </div>
  );
}
