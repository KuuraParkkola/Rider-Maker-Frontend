import { MinusCircle } from "react-feather";
import styled from "styled-components";
import { SectionInputGroupStyle, SectionInputRowStyle } from "../styles/SectionStyles";
import { createEmptyNamedContact } from "../utility/objectBuilders";


const ContactsStyles = styled.div`
  display: flex;
  flex-direction: column;

  & .contactRow {
    flex: 0 0 85px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .contactGroup {  
    flex: 1 0 200px;
  }

  & .deleteBtn {
    color: white;
    background-color: slategray;
    height: 75px;
    border-radius: 10px;
    margin: 0 3px;
    padding: 0 1px;
    cursor: pointer;
  }

  & .deleteBtn:hover {
    color: aliceblue;
    background-color: darkred;
  }
`;

const Contacts = ({data, setData}) => {
  const editCommonContact = (common_contact) => {
    setData({ ...data, common_contact });
  }

  const addNamedContact = () => {
    setData({
      ...data,
      named_contacts: [ ...data.named_contacts, createEmptyNamedContact() ]
    });
  }

  const deleteNamedContact = (idx) => {
    setData({
      ...data,
      named_contacts: data.named_contacts.filter( (_, cIdx) => idx !== cIdx )
    });
  }

  const editNamedContact = (idx, contact) => {
    setData({
      ...data,
      named_contacts: data.named_contacts.map( (c, cIdx) => cIdx === idx ? contact : c )
    })
  }

  return (
    <ContactsStyles>
      <SectionInputRowStyle>
        <p>Common contact</p>
        <input value={ data.common_contact } onChange={ ({target}) => editCommonContact(target.value) } />
      </SectionInputRowStyle>
      { data.named_contacts.map( (named_contact, idx) => (
        <div key={ idx } className="contactRow">
          <SectionInputGroupStyle className="contactGroup">
            <SectionInputRowStyle>
              <p>Name</p>
              <input value={ named_contact.name }
                onChange={ ({target}) => editNamedContact(idx, {...named_contact, name: target.value}) } />
              <p>Role</p>
              <input value={ named_contact.role }
                onChange={ ({target}) => editNamedContact(idx, {...named_contact, role: target.value}) } />
            </SectionInputRowStyle>
            <SectionInputRowStyle>
              <p>Email</p>
              <input value={ named_contact.email }
                onChange={ ({target}) => editNamedContact(idx, {...named_contact, email: target.value}) } />
              <p>Phone</p>
              <input value={ named_contact.phone }
                onChange={ ({target}) => editNamedContact(idx, {...named_contact, phone: target.value}) } />
            </SectionInputRowStyle>
          </SectionInputGroupStyle>
          <MinusCircle className="deleteBtn" onClick={ () => deleteNamedContact(idx) } />
        </div>
      ))}
      <p className="btn" onClick={ () => addNamedContact() }>Add a contact</p>
    </ContactsStyles>
  )
}

const renderContacts = (data, setData) => {
  return <Contacts data={ data } setData={ setData } />;
}


export default renderContacts;
