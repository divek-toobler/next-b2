import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactCountryFlag from "react-country-flag";


export const getStaticProps = async () => {

  const res = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
  const data = await res.json();

  return {
    props: { covidAll : data }
  }

}


export default function About({covidAll}) {

  // console.log(covidAll)

  return (
    <div>
        <Container>
        <Row>
          {covidAll.map(covidAll => (
            <Col sm={12} key={covidAll}>
                <Card className="mb-4">
                  <Card.Body>
                    <h2>{covidAll.country}</h2> 
                    <Row>
                        <Col>
                          <p className="mb-1">ആകെ സ്ഥിരീകരിച്ച മരണം</p>
                          <h4 className="mb-0">{covidAll.deaths}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">ഇന്ന് രോഗമുക്തി നേടിയവർ</p>
                          <h4 className="mb-0">{covidAll.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">ആകെ രോഗികകൾ </p>
                          <h4 className="mb-0">{covidAll.cases}</h4>
                        </Col>
                    </Row>
                    
                  </Card.Body>
                </Card>
            </Col>
          ))}
          </Row>
        </Container>
    </div>
  )
}
