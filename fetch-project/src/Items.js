import React, { useState, useEffect } from "react";


const Items = ({
    id, 
    listId,
    name
}) => {

    return (
        <article className="person">
            <div>
            <h4>
                ID: {id}
            </h4>
            <p>
                ListID: {listId}
            </p>
            <p>
                Name: {name}
            </p>
            </div>
        </article>
    )

}

export default Items;