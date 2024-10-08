import { Container } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { Titulo } from "../Titulo";

function UltimaCorrida() {
    const dadosCorrida = [
        {
            posicao: 1,
            piloto: "Jake Dennis",
            equipe: "Avalanche Andretti Formula E",
            posicaoLargada: 1,
            tempo: "46:27.658",
            diferenca: "0.000",
            pontos: 25,
        },
        {
            posicao: 2,
            piloto: "Nick Cassidy",
            equipe: "Envision Racing",
            posicaoLargada: 2,
            tempo: "46:28.135",
            diferenca: "+0.477",
            pontos: 18,
        },
        {
            posicao: 3,
            piloto: "Mitch Evans",
            equipe: "Jaguar TCS Racing",
            posicaoLargada: 6,
            tempo: "46:28.955",
            diferenca: "+1.297",
            pontos: 15,
        },
    ];
    return (
        <Container>
            <Titulo tamanhoFonte='30px'>Ultima Corrida</Titulo>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Piloto</th>
                        <th>Equipe</th>
                        <th>Pos. Largada</th>
                        <th>Tempo</th>
                        <th>Diferença</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosCorrida.map((piloto) => (
                        <tr key={piloto.posicao}>
                            <td>{piloto.posicao}</td>
                            <td>{piloto.piloto}</td>
                            <td>{piloto.equipe}</td>
                            <td>{piloto.posicaoLargada}</td>
                            <td>{piloto.tempo}</td>
                            <td>{piloto.diferenca}</td>
                            <td>{piloto.pontos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default UltimaCorrida