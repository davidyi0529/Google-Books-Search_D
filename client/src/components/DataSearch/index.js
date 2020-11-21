import React from "react";
import API from "../../utils/API";


export function DataSearch(props){
    function favoriteBooks(event) {
        let authors = event.author;

        //this is to push the books to favorites.
        authors.forEach((author) => authors.push(author));

        API.saveBook({
            title: event.title,
            authors: event.authors[0],
            description: event.description,
            image: event.image,
            link: event.href
        })
        .then((res) => (window.location = "/books"))
        .catch((err) => console.log(err));
    }

    return (
        <table style="width: 100%">
            <tr>
                <th>Title</th>
                <th>Author(s)</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>{props.title}</td>
                <td>{props.authors}</td>
                <td>{props.description}</td>
                <td><button onClick={()=> saveBook(props)}>Save</button></td>
            </tr>
        </table>
    )

}