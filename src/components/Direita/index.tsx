import styled from "styled-components";
import { Acumulou } from "../Acumulou"
import { Data } from "../Data"
import { Resultados } from "../Resultado"

export function Direita(props: any){
    
    const loteria = props.item

    return (
        <ContainerDireitaSld>
            <Resultados item={loteria}/>
            <Acumulou item={loteria}/>
            <Data item={loteria}/>
        </ContainerDireitaSld>
    )
}


const ContainerDireitaSld = styled.div`
    display: flex;
    flex-direction: column;
`;