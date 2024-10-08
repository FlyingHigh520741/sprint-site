import styled from "styled-components";
import ImagemLg from '../../imagens/home-sm.png';
import ImagemSm from '../../imagens/home-lg.png';
import Col from 'react-bootstrap/Col';

const ImagemResponsiva = styled.img`
  @media (max-width: 769px) {  
    content: url(${ImagemSm});
    max-width: 100%;
  height: auto;
  }
  @media (min-width: 769px) {  
    content: url(${ImagemLg});
    max-width: 100%;
  height: auto;
  }
`;


function ImagemMahindra (){
    return(
        <Col className="mx-auto" sm={12} md={5} lg={12}>
              <ImagemResponsiva alt="Imagem responsiva" />
        </Col>
    )
}
export default ImagemMahindra