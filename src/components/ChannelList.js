import { CheckCircle, MinusCircle } from "react-feather";
import styled from "styled-components";
import { TableRowStyle, TableStyle } from "../styles/TableStyles";
import { createEmptyChannelListRow } from "../utility/objectBuilders";


const ChannelListStyles = styled.div`
  & .chCol {
    flex: 0 0 40px;
    text-align: center;
  }

  & .instCol {
    flex: 1 0 10px;
  }

  & .inputCol {
    flex: 1 0 10px;
  }

  & .phantomCol {
    flex: 0 0 40px;
  }

  & .standCol {
    flex: 1 0 10px;
  }

  & .btnCol {
    flex: 0 0 25px;
    margin: 0 2px;
  }

  & .btnCol.active {
    color: slategray;
    border-radius: 12px;
    cursor: pointer;
  }

  & .btnCol.toggled.active {
    background-color: slategray;
    color: aliceblue;
  }

  & .btnCol.del.active:hover {
    background-color: darkred;
    color: aliceblue;
  }

  & .rowHighlight input {
    background-color: aliceblue;
    border: 1px solid gray;
    padding: 0 3px;
  }
`;

const ChannelList = ({data, setData}) => {
  const addRow = () => {
    setData({
      ...data,
      rows: [ ...data.rows, createEmptyChannelListRow() ]
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
    <ChannelListStyles>
      <TableStyle>
        <TableRowStyle className="header">
          <p className="chCol">Ch</p>
          <p className="instCol">Instrument</p>
          <p className="inputCol">Input</p>
          <p className="phantomCol">+48V</p>
          <p className="standCol">Stand</p>
          <p className="btnCol"></p>
          <p className="btnCol"></p>
        </TableRowStyle>
        { data.rows.map( (row, idx) => (
          <TableRowStyle key={ idx } className={ `${ row.is_highlighted ? "rowHighlight" : "" }` }>
            <p className="chCol">{ idx + 1 }</p>
            <input className="instCol" value={ row.instrument }
              onChange={ ({target}) => editRow(idx, { ...row, instrument: target.value }) } />
            <input className="inputCol" value={ row.input }
              onChange={ ({target}) => editRow(idx, { ...row, input: target.value }) } />
            <input type="checkbox" className="phantomCol" value={ row.phantom }
              onChange={ ({target}) => editRow(idx, { ...row, phantom: target.value }) } />
            <input className="standCol" value={ row.stand }
              onChange={ ({target}) => editRow(idx, { ...row, stand: target.value }) } />
            <CheckCircle className={ `btnCol active ${ row.is_highlighted ? "toggled" : "" }` }
              onClick={ () => editRow(idx, { ...row, is_highlighted: !row.is_highlighted }) } />
            <MinusCircle className="btnCol del active" onClick={ () => deleteRow(idx) } />
          </TableRowStyle>
        ))}
      </TableStyle>
      <p className="btn" onClick={ () => addRow() }>Add a row</p>
    </ChannelListStyles>
  )
}

const renderChannelList = (data, setData) => {
  return <ChannelList data={ data } setData={ setData } />;
}


export default renderChannelList;
