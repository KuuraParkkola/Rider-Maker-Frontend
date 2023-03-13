import styled from "styled-components";
import { SectionContentAreaStyle, SectionInputRowStyle, SectionHeaderAreaStyle, SectionStyle } from "../styles/SectionStyles";


const DocumentSettingsRowStyle = styled.div`
  display: flex;
  font-size: 18px;
  margin: 8px 0;

  & h1 {
    margin: 0;
    min-width: 120px;
  }

  & h2 {
    margin: 0;
    flex: 1 0 100px;
  }

  & select {
    margin: 0 6px;
    flex: 0 0 160px;
    min-width: 0;
    text-align: center;
  }
`;

const DocumentSettings = ({data, setData}) => {
  const updatePage = (page) => {
    setData({ ...data, page })
  }

  return (
    <SectionStyle>
      <SectionHeaderAreaStyle>
        <h1>Document settings</h1>
      </SectionHeaderAreaStyle>
      <SectionContentAreaStyle>
        <SectionInputRowStyle>
          <p>Document title</p>
          <input value={ data.title }
            onChange={ ({target}) => setData({ ...data, title: target.value }) } />
        </SectionInputRowStyle>
        <SectionInputRowStyle>
          <p>Band name</p>
          <input value={ data.band }
            onChange={ ({target}) => setData({ ...data, band: target.value }) } />
          <p>Document version</p>
          <input value={ data.revision }
            onChange={ ({target}) => setData({ ...data, revision: target.value }) } />
        </SectionInputRowStyle>
        <SectionInputRowStyle>
          <p>Footer text</p>
          <textarea value={ data.footer_text }
            onChange={ ({target}) => setData({ ...data, footer_text: target.value }) } />
        </SectionInputRowStyle>
        <SectionInputRowStyle>
          <p>Document Language</p>
          <select value={ data.language }
            onChange={ ({target}) => setData({ ...data, language: target.value }) }>
            <option value="">Pick language</option>
            <option value="fi">Finnish</option>
            <option value="en">English</option>
          </select>
        </SectionInputRowStyle>
        <DocumentSettingsRowStyle>
          <h2>Page Layout</h2>
          <select value={ data.page.size }
            onChange={ ({target}) => updatePage({ ...data.page, size: target.value }) }>
            <option value="">Page size</option>
            <option value="a4">A4</option>
          </select>
        </DocumentSettingsRowStyle>
        <SectionInputRowStyle>
          <p>Top margin</p>
          <input value={ data.page.margin_top }
            onChange={ ({target}) => updatePage({ ...data.page, margin_top: target.value }) } />
          <p>Bottom margin</p>
          <input value={ data.page.margin_bottom }
            onChange={ ({target}) => updatePage({ ...data.page, margin_bottom: target.value }) } />
          <p>Side margin</p>
          <input value={ data.page.margin_side }
            onChange={ ({target}) => updatePage({ ...data.page, margin_side: target.value }) } />
        </SectionInputRowStyle>
      </SectionContentAreaStyle>
    </SectionStyle>
  )
}


export default DocumentSettings;
