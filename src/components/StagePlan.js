import { useRef } from "react";
import styled from "styled-components";
import { SectionInputRowStyle } from "../styles/SectionStyles";


const StagePlanStyles = styled.div`
  & .stagePlanImg {
    margin: 0 auto;
    max-width: 70%;
  }

  & .stagePlanUploader {
    display: none;
  }
`;

const StagePlan = ({data, setData}) => {
  const uploaderRef = useRef();

  const fileLoad = (ev) => {
    const files = Array.from(ev.target.files);
    const fileReader = new FileReader();

    fileReader.onloadend = (upload) => {
      setData({ ...data, stage_plan: upload.target.result });
    }

    fileReader.readAsDataURL(files[0]);
    ev.target.value = null;
  }

  const triggerImageUpload = () => {
    uploaderRef.current.click();
  }

  return (
    <StagePlanStyles>
      <SectionInputRowStyle>
        { data.stage_plan ?
          <img className="stagePlanImg" src={ data.stage_plan } alt="Stage plan" />
        :
          <></>
        }
      </SectionInputRowStyle>
      <SectionInputRowStyle>
        <p className="btn" onClick={ () => triggerImageUpload() }>Set image</p>
      </SectionInputRowStyle>
      <input ref={ uploaderRef } className="stagePlanUploader" type="file" onChange={ fileLoad } />
    </StagePlanStyles>
  )
}

const renderStagePlan = (data, setData) => {
  return <StagePlan data={ data } setData={ setData } />;
}


export default renderStagePlan;
