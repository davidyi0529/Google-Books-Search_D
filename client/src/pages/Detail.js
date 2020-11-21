import React, { useState, useEffect} from "react";
import { Col, Row, Container } from "../components/Grid";
import {useParams, Link } from "react-router-dom";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

function Detail(props) {
    const [book, setBook] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        API.getBook(id)
            .then(res => 
                setBook(res.data))
            .catch(err => console.log(err));
    }, []);

    return(
        <>
        <Container fluid>
            <Row>
                <Col size="md-12">
                <Jumbotron>
                    <h1>{book.title} written by {book.author}</h1>
                </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col size="md-6">
                    <main>
                        <h2>Description</h2>
                        <p>{book.description}</p>
                            <img src={book.link} alt={book.title}>  
                            <a href={book.link}>{book.title}</a>
                        </img>
                    </main>
                </Col>
            </Row>

            <Row>
            <Col size="md-2">
                <Link to="/">← Back to Books</Link>
            </Col>
            </Row>
        </Container>
        </>
    );
}

export default Detail;