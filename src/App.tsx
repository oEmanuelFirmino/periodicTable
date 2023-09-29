import './App.css'
import ElementContainer from './components/ElementContainer'
import { AlkaliMetalsGroup } from './components/ElementsGroups/AlkaliMetalsGroup'
import { AlkalineEarthMetalsGroup } from './components/ElementsGroups/AlkalineEarthMetalsGroup'
import { NobleGasesGroup } from './components/ElementsGroups/NobleGasesGroup'
import { NonMetalsGroup } from './components/ElementsGroups/NonMetalsGroup'
import { SemiMetalsGroup } from './components/ElementsGroups/SemiMetalsGroup'
import { TransitionMetalsGroups } from './components/ElementsGroups/TransitionMetalsGroup'

import Header from './components/Header'



function App() {

  return (
    <div className='overflow-hidden'>
    <Header/>
    <ElementContainer ElementsGroup={<TransitionMetalsGroups/>} GroupName="Metais de Transição"/>
    <ElementContainer ElementsGroup={<AlkaliMetalsGroup/>} GroupName="Metais Alcalinos"/>
    <ElementContainer ElementsGroup={<AlkalineEarthMetalsGroup/>} GroupName="Metais Alcalinoterrosos"/>
    <ElementContainer ElementsGroup={<SemiMetalsGroup/>} GroupName="Semimetais"/>
    <ElementContainer ElementsGroup={<NonMetalsGroup/>} GroupName="Ametais"/>
    <ElementContainer ElementsGroup={<NobleGasesGroup/>} GroupName="Gases Nobres"/>
    </div>
    )}

export default App
