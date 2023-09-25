import './App.css'
import ElementContainer from './components/ElementContainer'
import { AlkaliMetalsGroup } from './components/ElementsGroups/AlkaliMetalsGroup'
import { AlkalineEarthMetalsGroup } from './components/ElementsGroups/AlkalineEarthMetalsGroup'
import { NobleGasesGroup } from './components/ElementsGroups/NobleGasesGroup'
import Header from './components/Header'



function App() {

  return (
    <>
    <Header/>
    <ElementContainer text="Gases Nobres" elementGroup={<NobleGasesGroup/>}/>
    <ElementContainer text="Metais Alcalinos" elementGroup={<AlkaliMetalsGroup/>}/>
    <ElementContainer text="Metais Alcalinos" elementGroup={<AlkalineEarthMetalsGroup/>}/>
    </>
    )}

export default App
