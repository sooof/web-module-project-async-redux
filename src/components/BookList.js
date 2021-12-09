import React from 'react';
import BookListSession from './BookListSession';

import { connect } from 'react-redux';

function BookList(props) {
  return (

      <div className="col">

        <h1>Async Redux Project</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Authors</th>
                    <th>Categories</th>
                    <th>Language</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.books.map((book, index)=><BookListSession key={index} book={book}/>)
                    // props.books.map( book => (
                    //     <a target="_blank" href={book.volumeInfo.previewLink}>
                    //         <img src={book.volumeInfo.imageLinks.thumbnail} />
                    //     </a>
                    // )) 
                }
            </tbody>
        </table>
      </div>
   
  );
}
const mapStateToProps = (state) => {
    // console.log("BookList currentState:", state)
    return {
        books: state.books,
    }
}

// export default BookList;
export default connect(mapStateToProps)(BookList);