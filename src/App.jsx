import styled from "styled-components";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Lista from "./views/lista/Lista";
import Formulario from "./views/formulario/Formulario";
import {media} from './helpers/media';
import { Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Formulario />,
  },
  {
    path: "/list",
    element: <Lista />,
  },
];

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;  
  padding: 0;
    margin-bottom: 10rem;

  ${media.desktop`
  margin-bottom: 0;
  `}
`;

function App() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
