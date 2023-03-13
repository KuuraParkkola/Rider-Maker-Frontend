import { MinusCircle } from "react-feather";
import styled from "styled-components";
import { TableRowStyle, TableStyle } from "../styles/TableStyles";
import { createEmptyMonitoringRow } from "../utility/objectBuilders";


const MonitoringStyles = styled.div`
  & .groupCol {
    text-align: center;
    flex: 0 0 80px;
    min-width: 0;
    padding: 0 4px;
  }

  & .playersCol {
    flex: 0 0 160px;
    min-width: 0;
    padding: 0 4px;
  }

  & .mixCol {
    flex: 1 0 80px;
    min-width: 0;
    padding: 0 4px;
  }

  & .deleteCol {
    flex: 0 0 25px;
    margin: 0 2px;
  }

  & .deleteCol.active {
    color: slategray;
    border-radius: 12px;
    cursor: pointer;
  }

  & .deleteCol.active:hover {
    background-color: darkred;
    color: aliceblue;
  }
`;

const Monitoring = ({data, setData}) => {
  const addRow = () => {
    setData({
      ...data,
      rows: [ ...data.rows, createEmptyMonitoringRow() ]
    });
  }

  const deleteRow = (idx) => {
    setData({
      ...data,
      rows: data.rows.filter( (_, rIdx) => idx !== rIdx )
    });
  }

  const editRow = (idx, row) => {
    setData({
      ...data,
      rows: data.rows.map( (r, rIdx) => rIdx === idx ? row : r )
    })
  }

  return (
    <MonitoringStyles>
      <TableStyle>
        <TableRowStyle className="header">
          <p className="groupCol">Group</p>
          <p className="playersCol">Players</p>
          <p className="mixCol">Mix</p>
          <p className="deleteCol"></p>
        </TableRowStyle>
        { data.rows.map( (row, idx) => (
          <TableRowStyle key={ idx }>
            <p className="groupCol">{ idx+1 }</p>
            <input className="playersCol" value={ row.players }
              onChange={ ({target}) => editRow(idx, { ...row, players: target.value }) } />
            <input className="mixCol" value={ row.mix }
              onChange={ ({target}) => editRow(idx, { ...row, mix: target.value }) } />
            <MinusCircle className="deleteCol active" onClick={ () => deleteRow(idx) } />
          </TableRowStyle>
        )) }
      </TableStyle>
      <p className="btn" onClick={ () => addRow() }>Add row</p>
    </MonitoringStyles>
  )
}

const renderMonitoring = (data, setData) => {
  return <Monitoring data={ data } setData={ setData } />;
}


export default renderMonitoring;
