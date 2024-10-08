import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfoHome from './InfoHome';
import ImagemMahindra from './ImagemMahindra';
import Countdown from '../Contdown';


function InfoFormulaE (){
    return(
        <Container style={{ background: 'linear-gradient(90deg, #FFF 35%, #326589 165%)' }} className=" p-5">
        <Row>
          <Countdown />
          <InfoHome/>
          <ImagemMahindra/>
        </Row>
      </Container>
  
    )
}

export default InfoFormulaE