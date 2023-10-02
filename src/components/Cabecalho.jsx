import { Link } from "react-router-dom";
import { DivCab } from "../styled";


export default function Cabecalho(){

    return(
        <DivCab>

            <h1>Cabecalho</h1>

            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/aparelhos"}>Aparelhos</Link></li>
            </ul>
        </DivCab>
        
            
    )
}