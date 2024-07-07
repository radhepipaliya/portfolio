import React from 'react';
import PropTypes from 'prop-types'


const Navbar = (props) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">{props.title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">{props.first}</a>
                            <a class="nav-link" href="/">{props.second}</a>
                            <a class="nav-link" href="/">{props.third}</a>
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
second: "About me",
third: "Contact Us"
} 
