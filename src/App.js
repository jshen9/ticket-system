import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import TicketSystem from './components/tickets';
import Checkout from './components/checkout';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
        <Routes>
            <Route path="/" element={<Navigate to="/tickets" replace={true} />}/>
            <Route path="/tickets" element={<TicketSystem/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
