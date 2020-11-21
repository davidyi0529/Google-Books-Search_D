import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/"
import { Col, Row, Container } from "../components/Grid";
import { DataSearch } from "../components/DataSearch";
import {FormBtn, Input } from "../components/Form";



function BookSearch() {

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadBooks()
    }, [])

    function handleFormSubmit(event) {
        event.preventDefault();
        API.findBooks(books)
        .then((res) => {
            console.log("response:", res.data.items)
            setFormObject(res.data.items);
        })
        .catch((err) => console.log(err))
    };

    function handleInputChange(event) {
        const book = event.target.value;
        setBooks(book);

    }
}

