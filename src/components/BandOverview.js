import { MinusCircle } from "react-feather";
import styled from "styled-components";
import { TableRowStyle, TableStyle } from "../styles/TableStyles";
import { createEmptyBandOverviewRow } from "../utility/objectBuilders";


const BandOverviewStyles = styled.div`
  & .nameCol {
    flex: 0 0 130px;
    min-width: 0;
    padding: 0 4px;
  }

  & .instrumentCol {
    flex: 0 0 100px;
    min-width: 0;
    padding: 0 4px;
  }

  & .channelsCol {
    flex: 0 0 80px;
    min-width: 0;
    text-align: center;
    padding: 0 4px;
  }

  & .notesCol {
    flex: 1 0 130px;
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

export const BandOverview = ({ data, setData }) => {
  const addRow = () => {
    setData({
      ...data,
      rows: [ ...data.rows, createEmptyBandOverviewRow() ]
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
    <BandOverviewStyles>
      <TableStyle>
        <TableRowStyle className="header">
          <p className="nameCol">Name</p>
          <p className="instrumentCol">Instrument</p>
          <p className="channelsCol">Channels</p>
          <p className="notesCol">Notes</p>
          <p className="deleteCol"></p>
        </TableRowStyle>
        { data.rows.map( (row, idx) => (
          <TableRowStyle key={ idx }>
            <input className="nameCol" value={ row.name }
              onChange={ ({target}) => editRow(idx, { ...row, name: target.value }) } />
            <input className="instrumentCol" value={ row.instrument }
              onChange={ ({target}) => editRow(idx, { ...row, instrument: target.value }) } />
            <input className="channelsCol" value={ row.channels }
              onChange={ ({target}) => editRow(idx, { ...row, channels: target.value }) } />
            <input className="notesCol" value={ row.notes }
              onChange={ ({target}) => editRow(idx, { ...row, notes: target.value }) } />
            <MinusCircle className="deleteCol active" onClick={ () => deleteRow(idx) } />
          </TableRowStyle>
        ))}
      </TableStyle>
      <p className="btn" onClick={ () => addRow() }>Add row</p>
    </BandOverviewStyles>
  )
}

const renderBandOverview = (data, setData) => {
  return <BandOverview data={ data } setData={ setData } />;
}


export default renderBandOverview;
