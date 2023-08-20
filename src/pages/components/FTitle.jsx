import React from "react";
const showMessage = function () {
    alert("Hello");
};
const FTitle = (props) => {
    return (
        <div onClick={showMessage}>
            Title: {props.name}
            <br />
            <p>{props.subtitle}</p>
        </div>
    );
};

export default FTitle;
