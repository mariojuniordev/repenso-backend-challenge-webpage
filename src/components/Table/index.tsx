import styled from "styled-components"
import { TopData } from "../../dtos/index"
import { Heading } from "../UI/Heading/index";

interface TableProps {
  tableHeaders: string[];
  data: TopData[];
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  -webkit-box-shadow: 7px 9px 7px -2px rgba(0,0,0,0.71);
  box-shadow: 7px 9px 7px -2px rgba(0,0,0,0.71);
  padding: 32px;
  width: 100%;

  table {
    background-color: var(--white);
    width: 100%;
    margin-top: 16px;

    thead {
      tr {
        th {
          text-align: center;
          background-color: var(--pink);
          color: var(--white);
        }
      }
    }

    tr {
      td {
        text-align: center;
        border: 1px solid var(--pink);
        padding-top: 16px;
        padding-bottom: 16px;

        @media(max-width: 600px) {
          font-size: 8px;
        }
      }

      .points {
        font-weight: bold;
        color: var(--pink);
      }
    }
  }
`

export default function Table(props: TableProps) {
  return (
    <CardContainer>
      <Heading textAlign="center" color="var(--pink)">TOP 10 CONTRIBUTORS</Heading>
      <table>
        <thead>
          <tr>
            {props.tableHeaders.map((item) =>
              <th>{ item }</th>
            )}
          </tr>
        </thead>
        <tbody>
          {props.data?.map((item) =>
            <tr>
              <td>{ item.name }</td>
              <td>{ item.email }</td>
              <td>{ item.phone }</td>
              <td className="points">{ item.points }</td>
            </tr>
          )}
        </tbody>
      </table>
    </CardContainer>
  )
}
