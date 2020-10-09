import React, {Component} from 'react';
import {ThemeContext} from '../../theme/theme-context';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    static contextType = ThemeContext;

    render() {
        return(
            <header className={`navbar navbar-expand-lg navbar-${this.context.theme} bg-${this.context.theme}`}>
                <a href="/" className="navbar-brand">AlloMovie</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/films" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/favoris" className="nav-link">Favoris</NavLink>
                        </li>
                    </ul>
                </div>
                <button className="btn" onClick={() => this.context.toggleTheme()}>
                    Change Theme
                </button>
            </header>
        )
    }
}
export default Header;
