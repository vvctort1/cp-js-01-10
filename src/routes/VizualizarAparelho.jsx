import { useNavigate, useParams } from "react-router-dom"
import { listaAparelhos } from "../aparelhos"
import { DivConteudo } from "../styled";


export default function VizualizarAparelho(){

    const{id} = useParams();

    const produto = listaAparelhos.filter(prod => prod.id == parseInt(id))[0];

    const navegacao = useNavigate();

    function comprar(item){
        alert(`Compra do ${item} realizada!`)
        return navegacao("/aparelhos")
    }

    function deletar(item){
        listaAparelhos.pop(item);
        alert(`${item.nome} deletado com sucesso!`);
        return navegacao("/aparelhos");
    }

    return(
        <DivConteudo>
            <h1>{produto.nome}</h1>
            <p>Cor: {produto.cor}</p>
            <p>Detalhes: {produto.desc}</p>
            <button onClick={() => comprar(produto.nome)}>Comprar</button>
            <button onClick={() => deletar(produto)}>Deletar</button>
        </DivConteudo>
    )
}