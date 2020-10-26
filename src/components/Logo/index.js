import React from 'react';

import logo from '../../img/logo.svg';

function Logo(props) {
    return(
        <>
            <img src={logo} alt="Logo" className={props.className}/>
        </>
    )

}
export default Logo;