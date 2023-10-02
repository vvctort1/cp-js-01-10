import styled from 'styled-components';

export const DivCab = styled.div`
    background-color: #4D8DD6;
    height: 20%;
    text-align: center;
    padding: 10px;
    & h1{
        margin: 10px;
    }

    & ul{
        display:flex;
        list-style: None;
        justify-content: center;

        & li{
            margin: 20px;

            & a{
                display: block;
                text-decoration: none;
                color: black;
                background-color: lightgreen;
                padding: 10px;
                border-radius: 3px;
                border: 1px solid black;

                &:hover{
                    background-color: #4D8DD6;
                    flex-grow: 2;
                }

                &:active{
                    background-color: white;
                }
                
            }
        }
    }

   
`


export const DivConteudo = styled.div`
    background-image: linear-gradient(to bottom, #4D8DD6,#58C1EB,#58C1EB,#58C1EB,#58C1EB,#58C1EB,#6FD3D6);
    background-color: #58C1EB;
    min-height: 60%;
    padding: 60px;
    text-align: center;

    & h1{
        margin: 20px;
    }

    & .propaganda{
        display: flex;
        justify-content: space-evenly;
    }

    & ul{
        list-style: none;

        & li{
            margin: 30px;

            & a{
                background-color: lightsalmon;
                border: 2px solid black;
                text-decoration: none;
                padding: 10px;
                margin: 10px;
                border-radius: 10px;
                font-weight: bold;
                
                &:hover{
                    background-color: salmon;
                }

                &:active{
                    background-color: white;
                }
            }
        }
    }
    
    p{
        margin: 20px;
    }

    button{
        margin: 40px;
        padding: 10px;
        border-radius: 4px;
        background-color: lightsalmon;

        &:hover{
            background-color: salmon;
        }

        &:active{
            background-color: white;
        }
    }

`

export const DivRodape = styled.div`
    background-color: #6FD3D6;
    height: 20%;

`


export const DivContainer = styled.div`
    height: 100vh;

`

export const DivErro = styled.div`
    height: 100vh;
    background-image: linear-gradient(to bottom, #4D8DD6,#58C1EB,#58C1EB,#58C1EB,#58C1EB,#58C1EB,#6FD3D6);
    text-align: center;
    padding: 90px;

    & h1{
        margin: 40px;
    }

`