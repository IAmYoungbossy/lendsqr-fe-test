import { tableText } from "../../constant/textConstant";
import ThreeDots from "../../assets/dashboard-assets/table-icons/3dots-details-icon.png";

export default function Table() {
  // Table Body
  const tableData = () => <ContactRow />;

  //   Table Column Header
  const tableHeader = (text: string) => (
    <th key={text}>
      {text}{" "}
      <img
        src={tableText.iconUrl}
        alt="Filter Icon"
      />
    </th>
  );

  return (
    <div>
      <table>
        <thead>
          <tr>{tableText.header.map(tableHeader)}</tr>
        </thead>
        <tbody>{tableText.header.map(tableData)}</tbody>
      </table>
    </div>
  );
}

export function ContactRow() {
  return (
    <tr>
      <td>Lendsqr</td>
      <td>Adedeji</td>
      <td>adedeji@lendsqr.com</td>
      <td>07067612139</td>
      <td>May 15 2020 10:00 Am</td>
      <td>
        <div>Active</div>
        <img
          src={ThreeDots}
          alt="Details"
        />
      </td>
    </tr>
  );
}
