import Navigatie from './Components/navbar';
import TabelEmployees from './Components/employee_components/employee_table';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TabelProjects from './Components/project_components/project_table';
import SignUp from './Components/auth_components/signup';
import SignIn from './Components/auth_components/signin';
import Landing from './Components/landing/landing';
// import PrivateRoute from './Components/auth_components/private_routes';

function App() {
  if(!sessionStorage.getItem('isLoggedIn')) {
    sessionStorage.setItem('isLoggedIn', false);
    return(
      <Router>
        <Navigatie />
        <div>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        </div> 
    </Router>
    );
  }
  else {
    return (
      <Router>
          <Navigatie />
          <div>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route path='/employees' component={TabelEmployees}/>
          <Route path='/projects' component={TabelProjects} />
          </div> 
      </Router>
      
    );
  }

  // return (
  //   <Router>
  //       <Navigatie />
  //       <div>
  //       <Route exact path='/' component={Landing}/>
  //       <Route exact path='/signup' component={SignUp}/>
  //       <Route exact path='/signin' component={SignIn}/>
  //       <Route path='/employees' component={TabelEmployees}/>
  //       <Route path='/projects' component={TabelProjects} />
  //       </div> 
  //   </Router>
    
  // );
}

export default App;