import styled from "styled-components";


export const TableStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & input {
    min-width: 0;
  }
`;

export const TableRowStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;

  padding: 0;
  height: 25px;

  & p {
    margin: 0;
  }

  &.header p {
    font-weight: 500;
    text-align: center;
    margin: 0;
  }
`;
