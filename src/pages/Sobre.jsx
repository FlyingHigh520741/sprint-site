import { Container } from "react-bootstrap";
import ImagemMahindra from "../componentes/Info/ImagemMahindra";
import { Col } from "react-bootstrap";
import { Titulo } from "../componentes/Titulo";
import { Row } from "react-bootstrap";
import Quiz from "../componentes/Quiz";
import CrazyCarGame from "../componentes/CrazyCarGame,";
function Sobre() {
    return (


        <Container style={{ background: 'linear-gradient(90deg, #FFF 35%, #326589 165%)' }} className="p-5">
            <Titulo tamanhoFonte='30px'>Sobre</Titulo>
            <Row>
                <ImagemMahindra />
                <Col sm={12} md={7} lg={12} className="py-5">
                    <div>
                        <p>
                            A Mahindra, fabricante indiana de automóveis e pioneira na Fórmula E, desafia estudantes e entusiastas de tecnologia a criarem soluções inovadoras para o futuro da mobilidade elétrica com o <strong>Mahindra Rise Prize Challenge</strong>.
                        </p>
                        <p>
                            Este desafio visa aumentar a visibilidade da Fórmula E, aproximando os fãs da ação e promovendo a adoção de tecnologias sustentáveis.
                        </p>
                        <p>
                            <strong>O que é a Fórmula E?</strong><br />
                            A Fórmula E é uma categoria de automobilismo exclusivamente para carros elétricos, criada em 2014. Desde então, vem se destacando pela inovação em tecnologias sustentáveis e pela contribuição para a mobilidade elétrica no mundo. A primeira corrida foi realizada em Pequim, e desde então, a competição tem crescido em popularidade, conquistando fãs em diversos países.
                        </p>
                        <p>
                            Diferente da Fórmula 1, que utiliza motores a combustão, a Fórmula E utiliza exclusivamente motores elétricos, promovendo um automobilismo sustentável e consciente. Esta diferença de tecnologia também se reflete nas regras, formatos de corrida, e na estrutura de cada evento, oferecendo aos fãs uma experiência única e cheia de ação.
                        </p>
                        <p>
                            <strong>Características dos carros de Fórmula E</strong><br />
                            Os carros de Fórmula E são projetados para serem leves e eficientes, com um foco importante na recuperação de energia. Ao contrário das corridas tradicionais, não há reabastecimento; em vez disso, as baterias são otimizadas para durar a corrida inteira, que tem uma média de duração de 45 minutos + 1 volta. Cada equipe pode inscrever dois carros, contribuindo para corridas dinâmicas e emocionantes.
                        </p>
                        <p>
                            <strong>Inovações e Engajamento dos Fãs</strong><br />
                            A Fórmula E também se destaca pelo seu sistema de engajamento com os fãs, conhecido como <em>Fan Boost</em>, que permite que os espectadores votem em seus pilotos favoritos. Os pilotos mais votados recebem um aumento de potência temporário durante a corrida, criando uma interação inédita no automobilismo. Além disso, a Fórmula E está sempre inovando com tecnologias de realidade aumentada e virtual, para que os fãs possam se sentir ainda mais conectados ao esporte.
                        </p>
                        <ul>
                            <li>Desenvolver uma plataforma digital que facilite o acesso à informação e torne a Fórmula E mais acessível.</li>
                            <li>Criar ferramentas interativas que engajem o público e incentivem a participação em eventos.</li>
                            <li>Implementar tecnologias inovadoras, como realidade virtual ou aumentada, para uma experiência imersiva.</li>
                            <li>Utilizar plataformas de mídia social para conectar fãs e promover a Fórmula E.</li>
                        </ul>
                        <p>
                            Participe do Mahindra Rise Prize Challenge e contribua para um futuro mais sustentável no automobilismo! A Fórmula E representa não apenas o futuro do automobilismo, mas também a visão de uma mobilidade mais verde e conectada.
                        </p>

                        <h3 style={{ marginTop: '30px', color: '#326589' }}>
                            Agora que já sabe um pouco sobre a Fórmula E, que tal testar seus conhecimentos?
                        </h3>
                        <p>
                            Responda ao nosso quiz e descubra o quanto você sabe sobre a Fórmula E, suas inovações, tecnologia e história!
                        </p>
                    </div>

                    <Quiz />
                    <CrazyCarGame/>
                </Col>
            </Row>
        </Container>
    );
}

export default Sobre   