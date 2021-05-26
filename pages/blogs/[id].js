import { Container } from 'react-bootstrap';


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(covi => {
      return {
        params: { id: covi.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { covi: data }
    }
  }

const BlogDetails = ({ covi }) => {

    // console.log(covi)
    
    
    return (
        <div>
             <Container>
                <h2>State : { covi.name }</h2>
            </Container>
        </div>
    );
}

export default BlogDetails;