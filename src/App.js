import './App.css';
import CupsUi from './Components/CupsUi';
import OurStoryUi from './Components/OurStoryUi';
import EmployeesUi from './Components/EmployeesUi';
import PotUi from './Components/PotUi';
import CeramicStudio from './Components/CeramicStudio';
import PersistentDrawerRight from './Components/NavBar';
import BelowNavBar from './Components/BelowNavBar';
import NewCollection from './Components/NewCollection';
import BestSellery from './Components/BestSellery';
function App() {
  return (
    <div className="App">
    <PersistentDrawerRight /> 
    <CeramicStudio /> 
    <BestSellery />
    < NewCollection />
    <PotUi /> 
    <EmployeesUi  />
    <CupsUi  />
     <OurStoryUi />
   <BelowNavBar  />
    </div>
  );
}

export default App;
