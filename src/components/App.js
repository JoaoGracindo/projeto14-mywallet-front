import { createGlobalStyle } from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Loggin from "./LoggingPage";
import MyAccount from "./MinhaContaPage";
import Entrada from "./Entrada";
import SingUp from "./SignUpPage";
import UserContext from "../UserContext";
import Saida from "./Saida";
import { useState } from "react";

export default function App(){
    const [token, setToken] = useState('');

    return(
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken}}>
            <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<Loggin/>}/>
                    <Route path="/cadastro" element={<SingUp/>}/>
                    <Route path="/home" element={<MyAccount/>}/>
                    <Route path="/nova-entrada" element={<Entrada/>}/>
                    <Route path="/nova-saida" element={<Saida/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #8C11BE;
    }
  `;