import { MinusCircle } from "react-feather";
import styled from "styled-components";
import { SectionInputGroupStyle, SectionInputRowStyle } from "../styles/SectionStyles";
import { createEmptyRequirement } from "../utility/objectBuilders";


const RequirementsStyles = styled.div`
  & textarea {
    height: 80px;
    resize: vertical;
  }

  & .deleteBtn {
    color: white;
    border-radius: 12px;
    cursor: pointer;
  }

  & .deleteBtn:hover {
    background-color: darkred;
    color: aliceblue;
  }
`;

const Requirements = ({data, setData}) => {
  const addRequirement = () => {
    setData({
      ...data,
      requirements: [ ...data.requirements, createEmptyRequirement() ]
    });
  }

  const deleteRequirement = (idx) => {
    setData({
      ...data,
      requirements: data.requirements.filter( (_, rIdx) => idx !== rIdx )
    });
  }

  const editRequirement = (idx, requirement) => {
    setData({
      ...data,
      requirements: data.requirements.map( (r, rIdx) => rIdx === idx ? requirement : r )
    })
  }

  return (
    <RequirementsStyles>
      { data.requirements.map( (requirement, idx) => (
        <SectionInputGroupStyle key={ idx }>
          <SectionInputRowStyle>
            <p className="requirementTitle">Title</p>
            <input value={ requirement.title }
              onChange={ ({target}) => editRequirement(idx, { ...requirement, title: target.value }) } />
            <MinusCircle className="deleteBtn" onClick={ () => deleteRequirement(idx) } />
          </SectionInputRowStyle>
          <SectionInputRowStyle>
            <p className="requirementContentLabel">Content</p>
            <textarea className="memberInput" value={ requirement.content }
              onChange={ ({target}) => editRequirement(idx, { ...requirement, content: target.value }) } />
          </SectionInputRowStyle>
        </SectionInputGroupStyle>
      ) )}
      <p className="btn" onClick={ () => addRequirement() }>Add an item</p>
    </RequirementsStyles>
  )
}

const renderRequirements = (data, setData) => {
  return <Requirements data={ data } setData={ setData } />;
}


export default renderRequirements;
