import Navigatie from './Components/navbar';
import TabelEmployees from './Components/employee_components/employee_table';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TabelProjects from './Components/project_components/project_table';
import SignUp from './Components/auth_components/signup';
import SignIn from './Components/auth_components/signin';

function App() {

  return (
    <Router>
        <Navigatie />
        <div>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route path='/employees' component={TabelEmployees} />
        <Route path='/projects' component={TabelProjects} />
        </div> 
    </Router>
    
  );
}

export default App;