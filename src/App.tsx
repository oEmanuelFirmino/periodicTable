import './App.css'
import ElementContainer from './components/ElementContainer'
import { TransitionMetalsGroups } from './components/ElementsGroups/TransitionMetalsGroup'
// import { AlkaliMetalsGroup } from './components/ElementsGroups/AlkaliMetalsGroup'
// import { AlkalineEarthMetalsGroup } from './components/ElementsGroups/AlkalineEarthMetalsGroup'
// import { NobleGasesGroup } from './components/ElementsGroups/NobleGasesGroup'
import Header from './components/Header'



function App() {

  return (
    <div className='overflow-hidden'>
    <Header/>
    <ElementContainer ElementsGroup={<TransitionMetalsGroups/>} GroupName="Metais Alcalinos"/>
    </div>
    )}

export default App
