import Image from 'react-bootstrap/Image'
import './Home.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";



function Home() {
    return (
        <main>
            <Container>
                <Row>
                    <Col sm={7}>
                    </Col>
                    <Col sm={5}>
                        <div className='banner'>
                            <p>
                                One Free Pizza is a company looking to give back to the community.
                            </p>
                            <p>
                                Our owner wants to give free pizzas to everyone. Everyone deserves a pizza every once in a while!
                            </p>
                        </div>

                    </Col>
                    <NavLink to="/get-your-pizza" className='text-link'>
                        <Button variant="outline-light" size="lg">
                            Get Your Free Pizza Now!
                        </Button>
                    </NavLink>
                </Row>

            </Container>

        </main>

    )
}
export default Home;