import "./styles/PersonalDetails.css";

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
  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <Detail
          info="Full Name"
          value="Grace Effiom"
        />
        <Detail
          info="Phone Number"
          value="07060780922"
        />
        <Detail
          info="Email Address"
          value="grace@gmail.com"
        />
        <Detail
          info="BVN"
          value="07060780922"
        />
        <Detail
          info="Gender"
          value="Female"
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
  return (
    <div>
      <h2>Education And Employment</h2>
      <div>
        <Detail
          info="Level Of Education"
          value="B.Sc"
        />
        <Detail
          info="Employment Status"
          value="Employed"
        />
        <Detail
          info="Sector Of Employment"
          value="FinTech"
        />
        <Detail
          info="Duration Of Employment"
          value="2 Years"
        />
        <Detail
          info="Office Email"
          value="grace@lendsqr.com"
        />
        <Detail
          info="Monthly Income"
          value="N200,000.00 - N400,000.00"
        />
        <Detail
          info="Loan Repayment"
          value="N40,000.00"
        />
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div>
      <h2>Social</h2>
      <div>
        <Detail
          info="Twitter"
          value="grace_effiom"
        />
        <Detail
          info="Facebook"
          value="Grace Effiom"
        />
        <Detail
          info="Instagram"
          value="@grace_effiom"
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
  return (
    <div>
      <Detail
        info="Full Name"
        value="Debby Ogana"
      />
      <Detail
        info="Phone Number"
        value="07060780922"
      />
      <Detail
        info="Email Address"
        value="debby@gmail.com"
      />
      <Detail
        info="Relationship"
        value="Sister"
      />
    </div>
  );
}

function Detail({ info, value }: { info: string; value: string }) {
  return (
    <div>
      <h4>{info}</h4>
      <p>{value}</p>
    </div>
  );
}
