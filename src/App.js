import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './context';
import Navbar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import './app.css';

function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <UserContext.Provider value={{users:[{name:'Max',email:'max@mit.edu',password:'secret',balance:1000}]}}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/all-data' element={<AllData />} />
        </Routes>
      </UserContext.Provider>
   </BrowserRouter>
  );
}

export default App;