import React from 'react';

const date = new Date();
const year = date.getFullYear()

function Footer() {
    return (
        <p>Copyright &copy; {year}</p>
    )
}


export default Footer;