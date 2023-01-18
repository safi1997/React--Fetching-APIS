import React from 'react'

export default function FormSelect(books) {

    /* const card = books.map((book) => {
        return (
            <div className="card me-3 mt-5">
                <img
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5>{book.volumeInfo.title}</h5>
                    <p>Author(s): {book.volumeInfo.authors}</p>
                    <p>Categories: {book.volumeInfo.categories}</p>
                    <p>Published: {book.volumeInfo.publishedDate}</p>
                </div>
            </div>
        );
    }); */

    return (
        <div>
            <select class="form-select bg-info d-flex justify-content-between align-items-start" >
                <option selected >Choose a search criteria</option>
                <option data-testid='math' >math</option>
                <option value="2">Javascrip</option>
                <option value="3">Teach</option>
                <option value="3">Class</option>
            </select>


            {/* {books && console.log(books)}
            {books && books.map((book) =>
                <div key={book.id} >
                    <div className="card me-3 mt-5">
                        <img
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5>{book.volumeInfo.title}</h5>
                            <p>Author(s): {book.volumeInfo.authors}</p>
                            <p>Categories: {book.volumeInfo.categories}</p>
                            <p>Published: {book.volumeInfo.publishedDate}</p>
                        </div>
                    </div>
                </div>
            )
            } */}
        </div >
    )
}
