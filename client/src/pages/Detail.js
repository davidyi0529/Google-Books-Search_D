import React, { useState, useEffect} from "react";
import { Col, Row, Container } from "../components/Grid";
import {useParams, Link } from "react-router-dom";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

function Detail(props) {
    const [book, setBook] = useState([]);

    const { id } = useParams();


}