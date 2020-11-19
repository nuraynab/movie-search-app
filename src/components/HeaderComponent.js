import React from 'react';
import {Navbar, Logo} from "../styles/HeaderStyledComponents";

function Header(){
    return(
        <Navbar>
            <Logo href = '/'> <span> Search Movie </span> </Logo>
        </Navbar>
    )
}

export default Header;