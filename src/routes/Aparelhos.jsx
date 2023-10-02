import { listaAparelhos } from "../aparelhos";
import { Link } from "react-router-dom";
import { DivConteudo } from "../styled";

export default function Aparelhos(){

    return(
        <DivConteudo>
            <h1>Aparelhos</h1>

            {listaAparelhos.map((item)=>(
                <ul key={item.id}>
                    <li><Link to={`/vizualizar/aparelhos/${item.id}`}>{item.nome}</Link></li>
                </ul>

            ))}

        </DivConteudo>
    )
}