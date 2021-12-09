import React from 'react'
import {Link} from 'react-router-dom'

import '../CSS/Header.css';

const Header = () =>{

    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Google Book Search</Link>

            </div>
            <div className="right-links">
            <Link  className="link" to='/'>JavaScript</Link>
                <form className="link" >
                    <input 
                    type="text"
                    // onChange={this.handleChange}
                    id="book"
                    placeholder="Search for book ..."
                    />
                    <button >Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;