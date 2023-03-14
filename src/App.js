import styled from 'styled-components';
import axios from 'axios';
import DocumentSettings from './components/DocumentSettings';
import renderTitleSection from './components/TitleSection';
import renderMembers from './components/Members';
import renderBandOverview from './components/BandOverview';
import renderMonitoring from './components/Monitoring';
import renderContacts from './components/Contacts';
import renderRequirements from './components/Requirements';
import renderChannelList from './components/ChannelList';
import renderStagePlan from './components/StagePlan';
import renderEquipmentList from './components/EquipmentList';
import Section from './components/Section';
import PageBreak from './components/PageBreak';
import { useEffect, useRef, useState } from 'react';
import { createEmptyBandOverviewSection, createEmptyChannelListSection,
  createEmptyContactsSection, createEmptyDocument, createEmptyEquipmentListSection,
  createEmptyMembersSection, createEmptyMonitoringSection, createEmptyRequirementsSection,
  createEmptyStagePlanSection, createEmptyTitleSection, createPageBreak } from './utility/objectBuilders';
import { Maximize2 } from 'react-feather';


const AppStyles = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100%;
  align-items: stretch;
  overflow: hidden;

  .sidebar {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;

    background-color: aliceblue;
    flex: 0 0 380px;
    filter: drop-shadow(0px 0px 6px #BBB);
  }

  .sidebar .mainTitle {
    text-align: center;
    font-size: 36px;
    margin: 10px;
    user-select: none;
  }

  .sidebar .mainContent {
    flex: 1 0 10px;

    display: flex;
    flex-flow: column nowrap;

    padding: 8px;
    overflow-y: auto;
  }

  .sidebar h2 {
    font-size: 28px;
    margin: 0;
    user-select: none;
  }

  .sidebar .outlineSection {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 18px;
    border-left: 5px solid slategray;
    margin: 3px 5px;
    line-height: 30px;
    padding: 0 5px;
    border-radius: 10px;
    user-select: none;
  }

  .sidebar .outlinePageBreak {
    width: 100%;
    border-bottom: 3px dashed slategray;
  }

  .sidebar .sessionControls {
    display: flex;
    flex-flow: column nowrap;
    margin: 4px 0;
  }

  .sidebar .sidebarBtn {
    background-color: slategray;
    height: 40px;
    margin: 4px 8px;
    border-radius: 10px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border: 1px solid slategray;
    color: white;
    user-select: none;
    cursor: pointer;
  }

  .sidebar .sidebarBtn:hover {
    background-color: aliceblue;
    color: slategray;
  }

  .content {
    flex: 1 0 10px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
    padding: 20px;
    padding-top: 0;
    overflow-y: auto;
  }

  .content h1 {
    margin: 0;
  }

  .content .contentAddBtn {
    width: 200px;
    border-radius: 15px;
    margin-top: 15px;
    background-color: aliceblue;
    filter: drop-shadow(0px 0px 5px #BBB);
    padding: 5px;
  }

  .content .contentAddIcon {
    flex: 0 0 46px;
  }

  .content .componentSelector {
    flex: 0 0 250px;

    text-align: center;
    height: 34px;
    width: 100%;
    border: none;
    border-radius: 12px;
    margin: 0 2px;
    padding: 0 10px;
    font-size: 18px;
    background-color: aliceblue;
  }

  .content .componentSelector .componentGrayOption {
    color: #777;
  }

  .windowSizeError {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    background-color: aliceblue;
  }

  .windowSizeError p {
    text-align: center;
    font-size: 24px;
  }
`;

function App() {
  const [ pageCount, setPageCount ] = useState(1);
  const [ doc, setDoc ] = useState(createEmptyDocument());
  const [ content, setContent ] = useState([]);
  const [ displayWidth, setDisplayWidth ] = useState(window.innerWidth);

  const importElem = useRef(null);
  const exportElem = useRef(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setDisplayWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const createSection = (section) => {
    switch (section) {
      case "band_overview":
        setContent([ ...content, createEmptyBandOverviewSection() ]);
        break;
      case "channel_list":
        setContent([ ...content, createEmptyChannelListSection() ]);
        break;
      case "contacts":
        setContent([ ...content, createEmptyContactsSection() ]);
        break;
      case "equipment_list":
        setContent([ ...content, createEmptyEquipmentListSection() ]);
        break;
      case "members":
        setContent([ ...content, createEmptyMembersSection() ]);
        break;
      case "monitoring":
        setContent([ ...content, createEmptyMonitoringSection() ]);
        break;
      case "requirements":
        setContent([ ...content, createEmptyRequirementsSection() ]);
        break;
      case "stage_plan":
        setContent([ ...content, createEmptyStagePlanSection() ]);
        break;
      case "title_section":
        setContent([ ...content, createEmptyTitleSection() ]);
        break;
      case "page_break":
        setContent([ ...content, createPageBreak() ]);
        setPageCount(pageCount + 1);
        break;
      default:
        return;
    }
  }

  const updateSection = (idx, section) => {
    setContent(content.map( (sect, sectIdx) => sectIdx === idx ? section : sect ));
  }

  const moveSection = (idx, direction) => {
    const swap = [idx, Math.max(idx+direction, 0)].sort((a,b) => a-b);
    setContent([
      ...content.slice(0, swap[0]),
      ...content.slice(swap[0], swap[1]+1).reverse(),
      ...content.slice(swap[1]+1)
    ]);
  }

  const deleteSection = (idx) => {
    const sectType = content[idx].section;
    setContent(content.filter((_, sectIdx) => sectIdx !== idx));
    if (sectType === 'page_break') {
      setPageCount(pageCount-1);
    }
  }

  const renderSections = () => {
    let pageNum = 1;
    return (
      <>
        { content.map((section, idx) => {
          switch (section.section) {
            case 'band_overview':
              return <Section id={ `sect${idx}` } key={ idx } title="Band Overview"
                renderer={ renderBandOverview } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'channel_list':
              return <Section id={ `sect${idx}` } key={ idx } title="Channel List"
                renderer={ renderChannelList } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'contacts':
              return <Section id={ `sect${idx}` } key={ idx } title="Contacts"
                renderer={ renderContacts } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'equipment_list':
              return <Section id={ `sect${idx}` } key={ idx } title="Equipment List"
                renderer={ renderEquipmentList } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'members':
              return <Section id={ `sect${idx}` } key={ idx } title="Members"
                renderer={ renderMembers } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'monitoring':
              return <Section id={ `sect${idx}` } key={ idx } title="Monitoring"
                renderer={ renderMonitoring } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'requirements':
              return <Section id={ `sect${idx}` } key={ idx } title="Requirements"
                renderer={ renderRequirements } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'stage_plan':
              return <Section id={ `sect${idx}` } key={ idx } title="Stage Plan"
                renderer={ renderStagePlan } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'title_section':
              return <Section id={ `sect${idx}` } key={ idx } title="Title Section"
                renderer={ renderTitleSection } data={ section } updateSect={ (sect) => updateSection(idx, sect) }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            case 'page_break':
              return <PageBreak id={ `sect${idx}` } key={ idx } pageNum={ ++pageNum } allPages={ pageCount }
                moveSect={ (dir) => moveSection(idx, dir) } deleteSect={ () => deleteSection(idx) } />;
            default:
              return <></>;
          }
        }) }
      </>
    );
  }

  const importDocument = () => {
    importElem.current.click();
  }

  const fileReceived = (ev) => {
    const files = Array.from(ev.target.files);
    const fileReader = new FileReader();

    const fileLoaded = (e) => {
      const loadedDocument = JSON.parse(fileReader.result);
      setDoc(loadedDocument.document);
      setContent(loadedDocument.content);
      setPageCount(loadedDocument.content.filter(section => section.section === 'page_break').length + 1);
    }
    
    fileReader.onloadend = fileLoaded;
    fileReader.readAsText(files[0]);
    importElem.current.value = null;
  }

  const exportDocument = () => {
    const jsonData = new Blob([JSON.stringify({document: doc, content})], {type: 'text/plain'});
    exportElem.current.href = URL.createObjectURL(jsonData);
    exportElem.current.download = `${doc.band} - ${doc.title} (rev. ${doc.revision}).json`;
    exportElem.current.click();
  }

  const renderDocument = async () => {
    const response = await axios.post('/renderpdf', { document: doc, content }, { responseType: 'blob' });
    const responseData = new Blob([response.data]);
    exportElem.current.href = URL.createObjectURL(responseData);
    exportElem.current.download = `${doc.band} - ${doc.title} (rev. ${doc.revision}).pdf`;
    exportElem.current.click();
  }

  const loadDemo = async () => {
    try {
      const setup = await axios.get('/demo_rider.json');
      setDoc(setup.data.document);
      setContent(setup.data.content);
      setPageCount(setup.data.content.filter(section => section.section === 'page_break').length + 1);
    } catch(err) {
      console.log("Failed to fetch demo document");
    }
  }

  const clearDocument = () => {
    setDoc(createEmptyDocument());
    setContent([]);
    setPageCount(1);
  }

  return (
    <AppStyles>
      { displayWidth >= 1100 ?
        <>
          <div className='sidebar'>
            <h1 className='mainTitle'>Rider Builder</h1>
            <div className='mainContent'>
              <h2>Outline</h2>
              <a className="outlineSection" href={ `#sectSettings` }>Document Settings</a>
              <div className='outlinePageBreak' />
              { content.map( (section, idx) => ( section.section === 'page_break' ?
                <div key={ idx } className='outlinePageBreak' /> :
                <a className="outlineSection" href={ `#sect${idx}` } key={ idx }>{ section.header }</a>
              ))}
            </div>
            <div className='sessionControls'>
              <p className='sidebarBtn' onClick={ () => importDocument() }>Import</p>
              <p className='sidebarBtn' onClick={ () => exportDocument() }>Export</p>
              <p className='sidebarBtn' onClick={ () => renderDocument() }>Render</p>
              <p className='sidebarBtn' onClick={ () => loadDemo() }>Load Demo</p>
              <p className='sidebarBtn' onClick={ () => clearDocument() }>Clear</p>
            </div>
          </div>
          <div className='content'>
            <DocumentSettings id="sectSettings" data={ doc } setData={ setDoc } />
            <PageBreak id="sectBegin" pageNum={1} allPages={ pageCount } locked />
            { renderSections() }
            <div className='contentAddBtn'>
              <select className='componentSelector'
                onChange={ ({target}) => createSection(target.value) }
                value="Add a section">
                <option className='componentGrayOption'>Add a section</option>
                <option value="band_overview">Band Overview</option>
                <option value="channel_list">Channel List</option>
                <option value="contacts">Contacts</option>
                <option value="equipment_list">Equipment List</option>
                <option value="members">Members</option>
                <option value="monitoring">Monitoring</option>
                <option value="requirements">Requirements</option>
                <option value="stage_plan">Stage Plan</option>
                <option value="title_section">Title Section</option>
                <option value="page_break">Page Break</option>
              </select>
            </div>
          </div>
          <input type='file' ref={ importElem } onChange={ fileReceived } style={{ display: 'none' }} />
          <a href="/" ref={ exportElem } style={{ display: 'none' }}>Hidden downloader tag for document exports</a>
        </>
      :
        <div className='windowSizeError'>
          <Maximize2 size={ 100 } />
          <p>Unfortunately the application cannot be displayed on devices with a display more narrow than 1100px. Please use a laptop instead.</p>
        </div>
      }
    </AppStyles>
  );
}


export default App;
