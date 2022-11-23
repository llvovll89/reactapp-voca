import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to='/'>Voca <span className="sub-logo">App</span></Link>
            </div>
            <div className="pages">
                <Link to='/createword'>ADD Word</Link>
                <Link to="/createday">ADD Day</Link>  
            </div>
        </div>
    )
}