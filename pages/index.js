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
        <p className="mb-1 mt-5">{covidToday.KL.meta.tested.last_updated}</p>
        <h2 className="mb-5">കോവിഡ് 19 കേരളത്തിൽ  ഇന്ന് </h2>
       <Row>
         <Col sm={3}>
            <Card className="mb-4">
              <Card.Body>
                <p className="mb-1">രോഗമുക്തി നേടിയവർ </p>
                <h3 className="mb-0">{covidToday.KL.delta.recovered}</h3>
              </Card.Body>
            </Card>
         </Col>
         <Col sm={3}>
         <Card className="mb-4">
              <Card.Body>
                <p className="mb-1">സാമ്പിൾ പരിശോധിച്ചത്</p>
                <h3 className="mb-0">{covidToday.KL.delta.tested}</h3>
            </Card.Body>
            </Card>
         </Col>
         <Col sm={3}>
         <Card className="mb-4">
              <Card.Body>
                <p className="mb-1">സ്ഥിരീകരിച്ച മരണം </p>
                <h3 className="mb-0">{covidToday.KL.delta.deceased}</h3>
            </Card.Body>
            </Card>
         </Col>
         <Col sm={3}>
         <Card className="mb-4">
              <Card.Body>
                <p className="mb-1">വാക്‌സിൻ സ്വീകരിച്ചവർ</p>
                <h3 className="mb-0">{covidToday.KL.delta7.vaccinated}</h3>
            </Card.Body>
            </Card>
         </Col>
       </Row>
          {/* <Row>
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
              
          </Row> */}
          
       </Container>
    </div>
  )
}
