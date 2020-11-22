# Google-Books-Search

![Languages](https://img.shields.io/github/languages/top/DCuadra85/mernhomework)
<br />
![Last Commit](https://img.shields.io/github/last-commit/DCuadra85/mernhomework)

</br>

### Link to the App Repo 
- https://github.com/DCuadra85/mernhomework

### Link to Deployed App
- https://mernstackhmw.herokuapp.com/

</br>

Google Books Search is an application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books.

</br>

### Screenshots of application:

<img src="https://github.com/DCuadra85/mernhomework/blob/david2/client/public/img/Searchpage.png?raw=true" width="800" height="600">

<img src="https://github.com/DCuadra85/mernhomework/blob/david2/client/public/img/Savedpage.png?raw=true" width="800" height="600">

[<img src="https://github.com/DCuadra85/mernhomework/blob/david2/client/public/img/demo.png?raw=true" width="800" height="600">](https://youtu.be/hh5PBdh7srM)

---

## Table of Contents

- [Installation](#installation)
- [Process](#process)
- [Technologies](#technologies)
- [Credits](#credits)
- [Authors](#authors)
- [License](#license)

---

## Installation

<br />

1. To run the application locally, first clone this repository with the following command.

```bash
git clone https://github.com/DCuadra85/mernhomework.git
```

2. Next, install the application dependencies inside the directory.

```bash
npm install
```

4. Start the application.

```bash
npm start
```

---


## Process

<br />

`Create A React App`

o create a react app, open an integrated terminal and run the following code.

```bash
npx create-react-app appName
```
<br />

`App Js`

The App.js will hold all the programs pages and serves as a router between them.

```js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
```

*pathing can be created using the below code*

```js
<Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route exact path="/pathname">
    <PageName>
    </Route>
    ...
</Switch>
```
<br />

`Major Components`

The core compononents for the operation of this app include the search form, results, and saved components.

1. Search Form

The Search Form consists of an input tag and a button tag. Within the input tag, the program should call for an onChange. The method called when the user changes the input is the props.handleFormSubmit which is defined within the search page.

The button tag calls for an onClick. When the button is clicked, a searchBooks method is called which is also defined within the search page.

2. Results

The Results component will spit out all the matching results, if any.

*the below image shows the code for this*

![code from results](https://ibb.co/6PQ8J7x)


3. Saved 

This component returns the JSX formatting for the saved page. It displays all the saved books by passing in books as a parameter. A button is also appended for an onClick delete book. The delete function is defined within the saved books page.

<br />

`Pages`

1. SavedBooks.js

This page implements the Saved component mentioned earlier. By setting useState to books. The books will be set to whatever the database contains. A delete books function is defined.

*The code below shows the delete function*

```js
    const deleteBooks = (id) => {
        API.deleteBook(id)
            .then((res) => {
                API.getDbBook()
                    .then(response => {
                        setBooks(response.data)
                    })
            })
    };
```
<br />

`Models`

In order to create a database this program utilized mongoose to create a schema. The schema should call for a title, authors, description, date, image, link, and id.

<br />

## Technologies

The following were used for this project.

- `React`
- `NodeJS`
- `React-Bootstrap`
- `Axios`
- `MongoDB // Mongoose`
- `Javascript`
- `HTML5`
- `CSS`

<br />

---

## Credits

<br />

<table>
<tr>
<td align="center"><a href="https://bootcamp.berkeley.edu/coding/"><img src="https://trilogyed--c.na35.content.force.com/servlet/servlet.ImageServer?id=01541000003WWHu&amp;oid=00D410000006puJ&amp;lastMod=1527713228000" width="100px;" alt=""/><br /><sub><b>UCB-Coding-Bootcamp</b></sub></a><br /></td>
<td align="center"><a href="https://nodejs.org/en/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png" width="100px;" alt=""/><br /><sub><b>Node.js</b></sub></a><br /></td>
<td align="center"><a href="https://reactjs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" width="100px;" alt=""/><br /><sub><b>React.js</b></sub></a><br /></td>
<td align="center"><a href="https://getbootstrap.com/"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png" width="100px;" alt=""/><br /><sub><b>Bootstrap</b></sub></a><br /></td>
<td align="center"><a href="https://fonts.google.com/"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1024px-MongoDB-Logo.svg.png" width="100px;" alt=""/><br /><sub><b>MongoDB</b></sub></a><br /></td>
<td align="center"><a href="https://www.npmjs.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/220px-Npm-logo.svg.png" width="100px;" alt=""/><br /><sub><b>npm</b></sub></a><br /></td>
<td align="center"><a href="https://www.javascript.com/"><img src="https://p1.hiclipart.com/preview/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.jpg" width="100px;" alt=""/><br /><sub><b>Javascript</b></sub></a><br /></td>
<td align="center"><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" width="100px;" alt=""/><br /><sub><b>HTML5</b></sub></a><br /></td>
<td align="center"><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" width="100px;" alt=""/><br /><sub><b>CSS</b></sub></a><br /></td>
<td align="center"><a href="https://shields.io/"><img src="https://versioneye.files.wordpress.com/2014/05/screen-shot-2014-05-14-at-22-37-29.png" width="100px;" alt=""/><br /><sub><b>Shields.io</b></sub></a><br /></td>
</tr>
</table>

---

## Authors
<br />

<table>
<tr>
<td align="center">
<h2>Daniel Cuadra</h2>

[![Portfolio](https://img.shields.io/badge/portfolio-8B89CC?&style=for-the-badge)]("https://dcuadra85.github.io/my-portfolio/")
<br />
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)]("https://github.com/DCuadra85")
<br />
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)]("https://www.linkedin.com/in/daniel-cuadra-3705aa39/")
</td>

<td align="center">
<h2>Brian Lee</h2>

[![Portfolio](https://img.shields.io/badge/portfolio-8B89CC?&style=for-the-badge)]("")
<br />
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)]("https://github.com/brianjunhyuplee")
<br />
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)]("https://www.linkedin.com/in/brian-lee-559208187/")
</td>

<td align="center">
<h2>Jefry Romero</h2>

[![Portfolio](https://img.shields.io/badge/portfolio-8B89CC?&style=for-the-badge)]("")
<br />
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)]("https://github.com/romerojefry")
<br />
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)]("")
</td>

<td align="center">
<h2>David Yi  </h2>

[![Portfolio](https://img.shields.io/badge/portfolio-8B89CC?&style=for-the-badge)](https://davidyi0529.github.io/Portfolio_D/)
<br />
[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/davidyi0529)
<br />
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](http://www.linkedin.com/in/davidyi0529)
</td>
</tr>
</table>

---

## License

<br />

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

<br />

Copyright &copy; All rights reserved.

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.