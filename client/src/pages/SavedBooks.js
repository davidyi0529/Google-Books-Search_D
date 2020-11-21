import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Saved from "../components/Saved";
import Footer from "../components/Footer";

function SavedBooks() {
    const [books, setBooks] = useState([]);

    const deleteBooks = (id) => {
        API.deleteBook(id)
            .then((res) => {
                API.getDbBook()
                    .then(response => {
                        setBooks(response.data)
                    })
            })
    };

    useEffect(() => {
        API.getDbBook()
            .then(res => setBooks(res.data))
    }, []);

    useEffect(() => {
    }, [books]);

    return (
        <div className="mb-5">
            <React.Fragment>
                <Nav />
                <Jumbotron />
                <Saved
                    books={books}
                    deleteBooks={deleteBooks} />
                <Footer />
            </React.Fragment>
        </div>
    );
};

export default SavedBooks;