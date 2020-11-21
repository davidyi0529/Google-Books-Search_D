import React from "react";
import "./style.css";

function Results(props) {
    const books = props.data

return (
    <>
        {books !== undefined ? (
            books.map((book, i) => {

return (
    <div key={book.id + i} className="container">
        <div className="card result">
            <div className="row mb-4 mt-3">
                <div className="col-lg-4 bookImage">
                    {book.volumeInfo.imageLinks ? (
                        <img
                            className="img-fluid"
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                        />
                    ):(
                        <img
                            src=""
                            alt="title"
                            className="img-fluid logo"
                        />
                    )}
                </div>
                <div className="col-lg-8 mainContent">
                    <h2>{book.volumeInfo.title}</h2>
                        <p>
                            {book.volumeInfo.authors !== undefined
                            ? book.volumeInfo.authors.join(" & ")
                            : book.volumeInfo.authors}
                        </p>
                            <p className="mr-4">{book.volumeInfo.description}</p>
                            <a
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                                href={book.volumeInfo.infoLink}
                            >
                                View
                            </a>
                                <button
                                    className="ml-3 btn btn-primary"
                                    onClick={() => {
                                        props.saveBook(book);
                                    }}
                                >
                                    Save Book
                                </button>
                </div>
            </div>
        </div>
    </div>
);
})
    ):(
        <div className="container mb-5">
            <div className="card result">
                <h2 className="p-5">
                    No Matching results.
                </h2>
            </div>
        </div>
    )}
        </>
);
};

export default Results;