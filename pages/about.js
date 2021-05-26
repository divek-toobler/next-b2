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

  console.log(covidAll)

  return (
    <div>
        <Container>
        <Row>
          {covidAll.map(covidAll => (
            <Col sm={3} >
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{covidAll.country}</Card.Title> 
                  </Card.Body>
                </Card>
            </Col>
          ))}
          </Row>
        </Container>
    </div>
  )
}
