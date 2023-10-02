import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { DivContainer } from "./styled";


export default function App(){



  return(
    <DivContainer>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </DivContainer>
  )
}