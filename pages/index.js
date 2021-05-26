import { Row, Container, Col, Card } from 'react-bootstrap';
import { ArrowUpCircle, CheckCircle, XCircle, ArrowDownLeftCircle } from 'react-bootstrap-icons'; 


export const getStaticProps = async () => {

  const res = await fetch('https://api.covid19india.org/v4/min/data.min.json')
  const data = await res.json();

  return {
    props: { covidToday : data }
  }

}


export default function Home({covidToday}) {

  // console.log(covidToday.KL)

  return (
    <div>
       <Container>
       <p>Last Updated : {covidToday.KL.meta.tested.last_updated}</p>
          <Row>
              <Col sm={12} className="mb-4">
                  <Card>
                    <Card.Body>
                      <h3 className="mb-3">Ernakulam</h3>
                      <Row>
                        <Col>
                          <p className="mb-1">Confirmed Cases</p>
                          <h4><XCircle color="orange" size={18} /> {covidToday.KL.districts.Ernakulam.delta7.confirmed}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">New Cases</p>
                          <h4><ArrowUpCircle color="red" size={18} /> {covidToday.KL.districts.Ernakulam.delta7.deceased}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Recovered</p>
                          <h4><CheckCircle color="blue" size={18} /> {covidToday.KL.districts.Ernakulam.delta7.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Vaccinated</p>
                          <h4><ArrowDownLeftCircle color="green" size={18} /> {covidToday.KL.districts.Ernakulam.delta7.vaccinated}</h4>
                        </Col>
                      </Row>
                     </Card.Body>
                  </Card>
              </Col>
              <Col sm={12} className="mb-4">
                  <Card>
                    <Card.Body>
                      <h3 className="mb-3">Thrissur</h3>
                      
                      <Row>
                        <Col>
                          <p className="mb-1">Confirmed Cases</p>
                          <h4><XCircle color="orange" size={18} /> {covidToday.KL.districts.Thrissur.delta7.confirmed}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">New Cases</p>
                          <h4><ArrowUpCircle color="red" size={18} /> {covidToday.KL.districts.Thrissur.delta7.deceased}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Recovered</p>
                          <h4><CheckCircle color="blue" size={18} /> {covidToday.KL.districts.Thrissur.delta7.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Vaccinated</p>
                          <h4><ArrowDownLeftCircle color="green" size={18} /> {covidToday.KL.districts.Thrissur.delta7.vaccinated}</h4>
                        </Col>
                      </Row>
                     </Card.Body>
                  </Card>
              </Col>
              <Col sm={12} className="mb-4">
                  <Card>
                    <Card.Body>
                      <h3 className="mb-3">Palakkad</h3>
                      
                      <Row>
                        <Col>
                          <p className="mb-1">Confirmed Cases</p>
                          <h4><XCircle color="orange" size={18} /> {covidToday.KL.districts.Palakkad.delta7.confirmed}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">New Cases</p>
                          <h4><ArrowUpCircle color="red" size={18} /> {covidToday.KL.districts.Palakkad.delta7.deceased}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Recovered</p>
                          <h4><CheckCircle color="blue" size={18} /> {covidToday.KL.districts.Palakkad.delta7.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Vaccinated</p>
                          <h4><ArrowDownLeftCircle color="green" size={18} /> {covidToday.KL.districts.Palakkad.delta7.vaccinated}</h4>
                        </Col>
                      </Row>
                     </Card.Body>
                  </Card>
              </Col>
              <Col sm={12} className="mb-4">
                  <Card>
                    <Card.Body>
                      <h3 className="mb-3">Malappuram</h3>
                      
                      <Row>
                        <Col>
                          <p className="mb-1">Confirmed Cases</p>
                          <h4><XCircle color="orange" size={18} /> {covidToday.KL.districts.Malappuram.delta7.confirmed}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">New Cases</p>
                          <h4><ArrowUpCircle color="red" size={18} /> {covidToday.KL.districts.Malappuram.delta7.deceased}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Recovered</p>
                          <h4><CheckCircle color="blue" size={18} /> {covidToday.KL.districts.Malappuram.delta7.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Vaccinated</p>
                          <h4><ArrowDownLeftCircle color="green" size={18} /> {covidToday.KL.districts.Malappuram.delta7.vaccinated}</h4>
                        </Col>
                      </Row>
                     </Card.Body>
                  </Card>
              </Col>
              <Col sm={12} className="mb-4">
                  <Card>
                    <Card.Body>
                      <h3 className="mb-3">Kannur</h3>
                      <Row>
                        <Col>
                          <p className="mb-1">Confirmed Cases</p>
                          <h4><XCircle color="orange" size={18} /> {covidToday.KL.districts.Kannur.delta7.confirmed}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">New Cases</p>
                          <h4><ArrowUpCircle color="red" size={18} /> {covidToday.KL.districts.Kannur.delta7.deceased}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Recovered</p>
                          <h4><CheckCircle color="blue" size={18} /> {covidToday.KL.districts.Kannur.delta7.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Vaccinated</p>
                          <h4><ArrowDownLeftCircle color="green" size={18} /> {covidToday.KL.districts.Kannur.delta7.vaccinated}</h4>
                        </Col>
                      </Row>
                     </Card.Body>
                  </Card>
              </Col>
              <Col sm={12} className="mb-4">
                  <Card>
                    <Card.Body>
                      <h3 className="mb-3">Kasaragod</h3>
                      <Row>
                        <Col>
                          <p className="mb-1">Confirmed Cases</p>
                          <h4><XCircle color="orange" size={18} /> {covidToday.KL.districts.Kasaragod.delta7.confirmed}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">New Cases</p>
                          <h4><ArrowUpCircle color="red" size={18} /> {covidToday.KL.districts.Kasaragod.delta7.deceased}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Recovered</p>
                          <h4><CheckCircle color="blue" size={18} /> {covidToday.KL.districts.Kasaragod.delta7.recovered}</h4>
                        </Col>
                        <Col>
                          <p className="mb-1">Vaccinated</p>
                          <h4><ArrowDownLeftCircle color="green" size={18} /> {covidToday.KL.districts.Kasaragod.delta7.vaccinated}</h4>
                        </Col>
                      </Row>
                     </Card.Body>
                  </Card>
              </Col>
              
          </Row>
          
       </Container>
    </div>
  )
}
