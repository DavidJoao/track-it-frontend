import './App.css';
import Home from './pages/Home';
import { createContext, useReducer } from 'react'
import { axiosReducer } from './functions/getAll'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'

export const Context = createContext();


function App() {

const [loggedInUser, dispatchUser] = useReducer(axiosReducer, {username:''})

  return (
    <div style={{backgroundColor:'#F2F7F7'}}>
      <Context.Provider value={{ 'loggedInUser': loggedInUser, 'dispatchUser': dispatchUser}}>
        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/signup' element={ <SignUp/> } />
            <Route path='/login' element={ <LogIn/> } />
          </Routes>
        </main>
      </Context.Provider>
    </div>
  );
}

export default App;
