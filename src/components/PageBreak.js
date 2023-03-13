import { ArrowDown, ArrowUp, Trash } from "react-feather";
import { SectionHeaderAreaStyle, SectionHeaderRowStyle, SectionStyle } from "../styles/SectionStyles";


const PageBreak = ({pageNum, allPages, locked=false, moveSect, deleteSect}) => {
  return (
    <SectionStyle>
      <SectionHeaderAreaStyle>
        <SectionHeaderRowStyle>
          <ArrowDown className="headerIcon" size={ 35 } />
          <h1>Page {pageNum} of {allPages}</h1>
          { locked ? null : <>
            <ArrowUp className="btn" onClick={ () => moveSect(-1) } />
            <ArrowDown className="btn" onClick={ () => moveSect(1) } />
            <Trash className="btn" onClick={ deleteSect } />
          </> }
        </SectionHeaderRowStyle>
      </SectionHeaderAreaStyle>
    </SectionStyle>
  )
}


export default PageBreak;
