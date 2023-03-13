import { MinusCircle } from "react-feather";
import styled from "styled-components";
import { SectionInputRowStyle } from "../styles/SectionStyles";
import { createEmptyMember } from "../utility/objectBuilders";


const MembersStyles = styled.div`
  & .membersArea {
    display: flex;
    flex-flow: column nowrap;

    align-items: stretch;
  }

  & .memberLabel {
    margin: 0;
    text-align: center;
  }

  & .deleteBtn {
    color: slategray;
    border-radius: 12px;
    cursor: pointer;
  }

  & .deleteBtn:hover {
    background-color: darkred;
    color: aliceblue;
  }
`;

export const Members = ({data, setData}) => {
  const addMember = () => {
    setData({
      ...data,
      members: [ ...data.members, createEmptyMember() ]
    });
  }

  const deleteMember = (idx) => {
    setData({
      ...data,
      members: data.members.filter( (_, mIdx) => idx !== mIdx )
    });
  }

  const editMember = (idx, member) => {
    setData({
      ...data,
      members: data.members.map( (m, mIdx) => mIdx === idx ? member : m )
    })
  }

  return (
    <MembersStyles>
      { data.members.map( (member, idx) => (
        <SectionInputRowStyle key={ idx }>
          <p className="memberLabel">Name</p>
          <input value={ member.name }
            onChange={ ({target}) => editMember(idx, { ...member, name: target.value }) } />
          <p className="memberLabel">Role</p>
          <input value={ member.roles }
            onChange={ ({target}) => editMember(idx, { ...member, roles: target.value }) } />
          <MinusCircle className="deleteBtn" onClick={ () => deleteMember(idx) } />
        </SectionInputRowStyle>
      )) }
      <p className="btn" onClick={ () => addMember() }>Add a member</p>
    </MembersStyles>
  )
}

const renderMembers = (data, setData) => {
  return <Members data={ data } setData={ setData } />;
}


export default renderMembers;
