import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

function AppRouter() {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <image class="navbar-brand" url="../assets/WitkowskyMedia_black.svg">Navbar</image>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to={'/'} className="nav-link"> Filmer </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/about'} className="nav-link"> Om oss </Link>
                        </li>
                        <li class="nav-item">
                             <Link to={'/contact'} className="nav-link"> Kontakt </Link>
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
