import Link from 'next/link';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';


export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const data = await res.json();

  return {
    props: { covid:data }
  }

}
const Blogs = ({ covid }) => {

  return (
    <div>
      <Container>
        <Row>

          {covid.map(covid => (
            <Col sm={3}  key={covid.id}>
              <Link href={'/blogs/' + covid.id}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{covid.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
           ))}

        </Row>
      </Container>
    </div>
  )
}

export default Blogs;