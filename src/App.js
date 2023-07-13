import React, { useReducer, useState } from 'react'; 
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import INIT_STATE from './store/initState';
import  { UserProvider } from './store/context';
import reducer from './store/reducer';
import TaoDon from './pages/Taodon';

function App() {
    const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
    const [state,dispatch] = useReducer(reducer,localState);
    return(
        <UserProvider value={{state,dispatch}}>
            <div className="App">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/taodon' element={<TaoDon/>}/>
                        <Route path='/auth/Login' element={<Login/>}/>
                    </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
