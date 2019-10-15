import React from "react";

const Avatar = ({image, firstName, lastName}) => (
    <div>
        <img src={image} />
        <p>{firstName}</p>
        <p>{lastName.toUpperCase()}</p>
    </div>
);

export default Avatar;