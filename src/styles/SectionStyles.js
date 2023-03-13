import styled from "styled-components";


export const SectionStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

  border-radius: 15px;
  margin-top: 15px;
  background-color: aliceblue;
  filter: drop-shadow(0px 0px 5px #BBB);
  width: 700px;
`;

export const SectionHeaderAreaStyle = styled.div`
  border-bottom: 2px solid slategrey;
  border-top: 4px solid slategrey;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const SectionHeaderRowStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 5px 0;

  & h1 {
    flex: 1 0 300px;
  }

  & p {
    flex: 0 0 170px;
    margin: 0;
  }

  & input,textarea {
    flex: 1 0 170px;
    resize: none;
  }

  & .headerIcon {
    margin: 0 60px;
  }

  & .headerIcon {
    margin-left: 0px;
    margin-right: 12px;
  }

  & .btn {
    flex: 0 0 50px;
    padding: 2px;
    text-align: center;
    background-color: slategrey;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    margin: 2px 5px;
    color: white;
    cursor: pointer;
    border: 2px solid slategray;
  }

  .btn:hover {
    color: slategray;
    background-color: aliceblue;
  }
`;

export const SectionContentAreaStyle = styled.div`
  padding: 10px 20px;

  & .btn {
    text-align: center;
    height: 25px;
    width: 115px;
    line-height: 25px;
    border: 1px solid #666;
    border-radius: 12px;
    padding: 0 10px;
    background-color: white;
    cursor: pointer;
    margin: 5px auto;
  }

  & .btn:hover {
    background-color: slategray;
    color: white;
  }
`;

export const SectionInputRowStyle = styled.div`
  display: flex;
  font-size: 18px;
  margin: 8px 0;

  & p {
    margin: 0;
    min-width: 120px;
  }

  &.header p {
    min-width: 130px;
    font-size: 15px;
  }

  &.header textarea {
    height: 30px;
  }

  & input {
    margin: 0 6px;
    flex: 1 0 50px;
    min-width: 0;
  }

  & textarea {
    margin: 0 6px;
    flex: 1 0 130px;
    height: 40px;
    resize: none;
  }

  & select {
    margin: 0 6px;
    flex: 0 0 160px;
    min-width: 0;
    text-align: center;
  }
`;

export const SectionInputGroupStyle = styled.div`
  background-color: slategray;
  padding: 1px 6px;
  border-radius: 10px;
  margin: 5px 0;

  & p {
    color: white;
  }
`;
