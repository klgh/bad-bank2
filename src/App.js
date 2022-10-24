import { HashRouter, Route, Routes } from "react-router-dom";
import AllData from "./alldata";
import "./app.css";
import { UserContext } from "./context";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Home from "./home";
import Navbar from "./navbar";
import Withdraw from "./withdraw";

function App() {
  return (
    <>
      <HashRouter basename="/bad-bank">
        <Navbar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "Max",
                email: "max@mit.edu",
                password: "secret",
                balance: 1000,
              },
            ],
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/all-data" element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;
