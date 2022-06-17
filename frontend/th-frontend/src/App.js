import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from './Home';
import UserList from './UserList';
import NavBar from './Navbar';
import SignupForm from './SignupForm';

function App() {

 
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route exact path = '/' element = {<Home />}/>
      <Route exact path = '/users' element = {<UserList />} />
      <Route exact path = '/users/:id' />
      <Route exact path = '/signup' element = {<SignupForm />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
