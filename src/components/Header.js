import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {fetchSuccess} from "./../actions"

import '../CSS/Header.css';

const Header = (props) => {
    const [input, setInput] = useState()
    console.log("Header props",props)
    const {apikey, books, dispatch} = props
    const handleChange = (event) => {
        const searchName = event.target.value
        setInput(searchName)
        console.log("Header.js -- handleChange : ", searchName)
    }

    // useEffect(()=>{
    //     console.log(books)
    //     axios.get(`https://www.googleapis.com/books/v1/volumes?q=dog&key=${apikey}&maxResults=40`)
    //         .then( resp=> {
    //         console.log(resp)
    //         // setResult(resp.data.items)
    //         }) 
    // },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(books)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${apikey}&maxResults=40`)
            .then( resp=> {
            console.log(resp)
            // setResult(resp.data.items)
                dispatch(fetchSuccess(resp.data.items))
            })
    }

    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Google Book Search</Link>

            </div>
            <div className="right-links">
            <Link  className="link" to='/'>JavaScript</Link>
                <form onSubmit={handleSubmit} className="link" >
                    <input 
                    type="text"
                    onChange={handleChange}
                    id="input"
                    placeholder="Search for book ..."
                    />
                    <button  type="submit" >Search</button>
                </form>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    console.log("Header currentState:", state)
    return {
        books: state.books,
        // input: state.input,
        apikey: state.apikey
    }
}

// export default Header;
export default  connect(mapStateToProps,)(Header);