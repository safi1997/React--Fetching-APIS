import React, { useEffect, useState } from 'react'
import BookList from "./components/BookList"
import './App.css';

function App() {

  const [book, setBook] = useState()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    return fetch("https://www.googleapis.com/books/v1/volumes?q=person&key=AIzaSyBioioWntyHJj9O_Btd-KfAcMuOKvwIMDs")
      .then((response) => response.json())
      .then((data) => setBook(data.items));
  }

  return (
    <div className="App container">
      <div className="row">
        <BookList Books={book} />
      </div>
    </div>
  );
}
export default App;