import Navigatie from './Components/navbar';
import TabelEmployees from './Components/employee_table';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TabelProjects from './Components/project_table';

function App() {

  return (
    <Router>
        <Navigatie />
        <div>
        <Route exact path='/' component={TabelEmployees} />
        <Route path='/projects' component={TabelProjects} />
        </div> 
    </Router>
    
  );
}

export default App;