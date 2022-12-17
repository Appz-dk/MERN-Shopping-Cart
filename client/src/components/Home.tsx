import { Container, Row } from "react-bootstrap";
import Products from "./Products";

const Home = () => {
  return (
    <Container fluid="sm">
      <Row xs={1} md={2} lg={3} className="mt-4">
        <Products />
      </Row>
    </Container>
  );
};

export default Home;
