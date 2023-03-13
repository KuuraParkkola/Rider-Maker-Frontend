import { ArrowRightCircle, CheckCircle, MinusCircle } from "react-feather";
import styled from "styled-components";
import { TableRowStyle, TableStyle } from "../styles/TableStyles";
import { createEmptyEquipmentListRow } from "../utility/objectBuilders";


const EquipmentListStyles = styled.div`
  & .itemCol {
    flex: 1 0 100px;
  }

  & .countCol {
    flex: 0 0 120px;
    text-align: center;
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

  & .btnCol.del.active:hover {
    background-color: darkred;
    color: aliceblue;
  }

  & .btnCol.toggled.active {
    background-color: slategray;
    color: aliceblue;
  }

  & .groupRow input {
    font-weight: 700;
  }
  
  & .groupRow .itemCol {
    padding-left: 20px;
  }

  & .highlightRow input {
    background-color: aliceblue;
    border: 1px solid gray;
    padding: 0 3px;
  }
`;

const EquipmentList = ({data, setData}) => {
  const addRow = () => {
    setData({
      ...data,
      rows: [ ...data.rows, createEmptyEquipmentListRow() ]
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
    <EquipmentListStyles>
      <TableStyle>
        <TableRowStyle className="header">
          <p className="itemCol">Item</p>
          <p className="countCol">Count</p>
          <p className="btnCol"></p>
          <p className="btnCol"></p>
          <p className="btnCol"></p>
        </TableRowStyle>
        { data.rows.map( (row, idx) => (
          <TableRowStyle key={ idx }
            className={ `${row.is_group ? "groupRow" : ""} ${row.is_highlighted ? "highlightRow" : ""}` }>
            <input className="itemCol" value={ row.item }
              onChange={ ({target}) => editRow(idx, {...row, item: target.value }) } />
            <input className="countCol" value={ row.count }
              onChange={ ({target}) => editRow(idx, {...row, count: target.value }) } />
            <ArrowRightCircle onClick={ () => editRow(idx, {...row, is_group: !row.is_group }) }
              className={ row.is_group ? "btnCol active toggled" : "btnCol active" } />
            <CheckCircle onClick={ () => editRow(idx, {...row, is_highlighted: !row.is_highlighted }) }
              className={ row.is_highlighted ? "btnCol active toggled" : "btnCol active" } />
            <MinusCircle className="btnCol del active" onClick={ () => deleteRow(idx) } />
          </TableRowStyle>
        ))}
      </TableStyle>
      <p className="btn" onClick={ () => addRow() }>Add an item</p>
    </EquipmentListStyles>
  )
}

const renderEquipmentList = (data, setData) => {
  return <EquipmentList data={ data } setData={ setData } />;
}


export default renderEquipmentList;
