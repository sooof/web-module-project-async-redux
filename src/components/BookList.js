import React from 'react';
import { connect } from 'react-redux';

function BookList(props) {
  return (

      <div className="App">

        <h1>Async Redux Project</h1>

        {
        props.books.map( book => (
          <a target="_blank" href={book.volumeInfo.previewLink}>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          </a>
        ))
      }
      </div>
   
  );
}
const mapStateToProps = (state) => {
    console.log("BookList currentState:", state)
    return {
        books: state.books,
    }
}

// export default BookList;
export default connect(mapStateToProps)(BookList);