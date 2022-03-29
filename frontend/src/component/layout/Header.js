import React from 'react'
import { Link } from 'react-router-dom'
import { FaIdBadge, FaSearch, FaCartPlus } from 'react-icons/fa';
import "./header.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                {/* logo */}
                <div className='navbar-logo'>
                    <Link className="navbar-menuItem" to="/"  >
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </div>

                {/* menus */}
                <div className='menu'>
                    <ul className='navbar-menu'>
                        <li>
                            <Link className="navbar-menuItem" to="/"  >
                                <b>Products</b>
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-menuItem" to="/"  >
                                <b>Contact</b>
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-menuItem" to="/"  >
                                <b>About</b>
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* icons */}
                <div className='icons'>
                    <ul className='navbar-icons'>
                        <li>
                            <Link className="navbar-iconItem" to="/search"  >
                                <FaSearch />
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-iconItem" to="/login"  >
                                <FaIdBadge />
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-iconItem" to="/cart"  >
                                <FaCartPlus />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header