import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

import logo from '../assets/WitkowskyMedia_black.svg'

function AppRouter() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img className="navbar-brand" src={logo} alt="Witkowsky Mediga Logo" height="60" width="60"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link mr-5"> Filmer </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className="nav-link mr-5"> Om oss </Link>
                        </li>
                        <li className="nav-item">
                             <Link to={'/contact'} className="nav-link mr-5"> Kontakt </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </Router>
    )
}

export default AppRouter
