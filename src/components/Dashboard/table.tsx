import "./styles/Table.css";
import { tableText } from "../../constant/textConstant";
import ThreeDots from "../../assets/dashboard-assets/table-icons/3dots-details-icon.png";

export default function Table() {
  // Table Body
  const tableData = (data: number) => <ContactRow key={data} />;

  //   Table Column Header
  const tableHeader = (text: string) => (
    <th key={text}>
      <div>
        {text}
        <img
          src={tableText.iconUrl}
          alt="Filter Icon"
        />
      </div>
    </th>
  );
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{tableText.header.map(tableHeader)}</tr>
        </thead>
        <tbody>{array.map(tableData)}</tbody>
      </table>
    </div>
  );
}

export function ContactRow() {
  return (
    <tr>
      <td>
        <span>Lendsqr</span>
      </td>
      <td>
        <span>Adedeji</span>
      </td>
      <td>
        <span>adedeji@lendsqr.com</span>
      </td>
      <td>
        <span>07067612139</span>
      </td>
      <td>
        <span>May 15 2020 10:00 Am</span>
      </td>
      <td>
        <div>
          <div>Active</div>
          <img
            src={ThreeDots}
            alt="Details"
          />
        </div>
      </td>
    </tr>
  );
}
