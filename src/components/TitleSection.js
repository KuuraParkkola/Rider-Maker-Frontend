import { MinusCircle } from "react-feather";
import styled from "styled-components";
import { SectionInputRowStyle } from "../styles/SectionStyles";
import { createEmptySocial } from "../utility/objectBuilders";


const TitleSectionStyles = styled.div`  
  & .socialsArea {
    display: flex;
    flex-flow: column nowrap;

    align-items: center;
  }

  & .socialsTitle {
    margin: 7px 0;
  }

  & .socialItem {
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;

    width: 400px;
    padding: 2px 0;
  }

  & .socialSelector {
    height: 25px;
    width: 120px;
    text-align: center;
    border-radius: 12px;
  }

  & .socialInput {
    flex: 1 0 10px;
    border-radius: 12px;
    border: 1px solid #666;

    padding: 0 10px;
    margin: 0 5px;
  }

  & .socialDelete {
    color: slategray;
    border-radius: 12px;
    flex: 0 0 25px;
    height: 24px;
    cursor: pointer;
  }

  & .socialDelete:hover {
    background-color: darkred;
    color: aliceblue;
  }
`;

export const TitleSection = ({data, setData}) => {
  const addSocial = () => {
    setData({
      ...data,
      socials: [ ...data.socials, createEmptySocial() ]
    });
  }

  const editSocial = (idx, newSocial) => {
    setData({
      ...data,
      socials: data.socials.map( (social, sIdx) => sIdx === idx ? newSocial : social )
    });
  }

  const deleteSocial = (idx) => {
    setData({
      ...data,
      socials: data.socials.filter( (_, sIdx) => idx !== sIdx )
    });
  }

  return (
    <TitleSectionStyles>
      <SectionInputRowStyle>
        <p>Header</p>
        <input value={ data.header }
          onChange={ ({target}) => { setData({ ...data, header: target.value }) }} />
        <p>Band Title</p>
        <input value={ data.band_title }
          onChange={ ({target}) => { setData({ ...data, band_title: target.value }) }} />
      </SectionInputRowStyle>
      <div className="socialsArea">
        <h3 className="socialsTitle">Socials</h3>
        { data.socials.map( (social, idx) => (
          <div key={ idx } className="socialItem">
            <select className="socialSelector" value={ social.service }
              onChange={ ({target}) => editSocial(idx, { ...social, service: target.value }) }>
              <option value=""></option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="snapchat">Snapchat</option>
              <option value="soundcloud">Soundcloud</option>
              <option value="spotify">Spotify</option>
              <option value="tiktok">TikTok</option>
              <option value="twitter">Twitter</option>
              <option value="youtube">YouTube</option>
            </select>
            <input className="socialInput"  value={ social.tag }
              onChange={ ({target}) => editSocial(idx, { ...social, tag: target.value }) } />
            <MinusCircle size={ 20 } className="socialDelete" onClick={ () => deleteSocial(idx) } />
          </div>
        )) }
        <p className="btn" onClick={ addSocial }>Add an account</p>
      </div>
    </TitleSectionStyles>
  )
}

const renderTitleSection = (data, setData) => {
  return <TitleSection data={ data } setData={ setData } />
}


export default renderTitleSection;
