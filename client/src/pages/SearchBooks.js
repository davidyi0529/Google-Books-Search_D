import React, { useState, useEffect } from "react";
import Nav from "../components/Nav"
import SearchForm from "../components/SearchForm"
import Results from "../components/Results"
import API from '../utils/API'
import Jumbotron from "../components/Jumbotron";
import "./style.css";

function SearchBooks() {

    const [searchState, setSearchState] = useState("");
    const [books, setBooks] = useState([]);
    const [ids, setIds] = useState([]);

    useEffect(() => {
    }, []);

    const handleFormSubmit = (e) => {
        const { value } = e.target
        setSearchState(value)
    };

    const searchBooks = async () => {
        let holder = [];
        holder.length = 0;
        let newBooks = await API.getBooks(searchState)
            .then((res) => {
                return res.data.items;
            });
        setBooks(newBooks);

        API.getDbBook()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    holder.push(res.data[i].id);
                }
                console.log("savebook response: ", res)
            })
        console.log("holder: ", holder);
        setIds(holder);
    };

    const saveBook = (book) => {
        var image;
        if (book.volumeInfo.imageLinks === undefined) {
            image = ""
        } else {
            image = book.volumeInfo.imageLinks.thumbnail
        };

        const data = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: image,
            link: book.volumeInfo.infoLink,
            id: book.id
        };

        API.addBook(data).then(res => {
            console.log("saved", res)

        }).then(err => {
            console.log("error", err);

        });
    };

    return (
        <div className="mb-5">
            <Nav />
            <Jumbotron />
            <SearchForm
                handleFormSubmit={handleFormSubmit}
                searchBooks={searchBooks} />
            <Results
                data={books}
                saveBook={saveBook}
            />
        </div>
    );
};

export default SearchBooks;