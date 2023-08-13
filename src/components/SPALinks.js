import React from "react";
import { Link } from "react-router-dom";

export const SPALinks = () => {
    return (
        <>
            <h1>SPA Link</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/user">User</Link>
        </>
    );
};
