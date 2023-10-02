import { useNavigate } from "react-router-dom";
import { DivErro } from "../styled";

export default function Erro404(){

    const navegacao = useNavigate()

    return(
        <DivErro>
            <h1>Erro 404 - Página não encontrada!</h1>
            <button onClick={()=>navegacao('/aparelhos')}>Voltar para página inicial</button>
        </DivErro>
    )
}