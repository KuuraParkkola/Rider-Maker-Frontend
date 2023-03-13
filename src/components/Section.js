import { ArrowDown, ArrowUp, Trash } from "react-feather";
import { SectionContentAreaStyle, SectionHeaderAreaStyle, SectionHeaderRowStyle, SectionInputRowStyle, SectionStyle } from "../styles/SectionStyles";


const Section = ({ title, renderer, data, updateSect, moveSect, deleteSect }) => {
  const setData = (content) => {
    updateSect({ ...data, content });
  }

  return (
    <SectionStyle>
      <SectionHeaderAreaStyle>
        <SectionHeaderRowStyle>
          <h1>{ title }</h1>
          <ArrowUp className="btn" onClick={ () => moveSect(-1) } />
          <ArrowDown className="btn" onClick={ () => moveSect(1) } />
          <Trash className="btn" onClick={ deleteSect } />
        </SectionHeaderRowStyle>
        <SectionInputRowStyle className="header">
          <p>Display title</p>
          <input value={ data.title }
            onChange={ ({target}) => updateSect({...data, title: target.value}) } />
        </SectionInputRowStyle>
        <SectionInputRowStyle className="header">
          <p>Display description</p>
          <textarea value={ data.description }
            onChange={ ({target}) => updateSect({...data, description: target.value}) }  />
        </SectionInputRowStyle>
      </SectionHeaderAreaStyle>
      <SectionContentAreaStyle>
        { renderer(data.content, setData) }
      </SectionContentAreaStyle>
    </SectionStyle>
  )
}


export default Section;
