import React from 'react';
import PropTypes from 'prop-types'


const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">{props.first}</a>
                            <a className="nav-link" href="/">{props.second}</a>
                            <a className="nav-link" href="/">{props.third}</a>
                            <a className="nav-link" href="/">{props.four}</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    );
};

export default Navbar;

Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defaultProps = {title: "Radhe Pipaliya",
first: "Home",
second:"Project",
third: "About me", 
four: "Contact Us"
} 
