 import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <>
      {/* <Router>
         <Switch>
          <Route exact path="/" element={<Login />} />
        </Switch>

       </Router> */}
       <Login />
    </>
  );
}

export default App;
