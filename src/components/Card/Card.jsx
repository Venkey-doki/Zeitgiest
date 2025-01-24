import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

// include the following in the head section of index.html
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
function Card( ) {
    return(
            <main>
            <div className = "card">
                <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                <div className="card-content">
                <h2>
                    Card Heading
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                </p>
                <Link to="WorkshopInfo" className="button">
                    Find out more 
                    <span className="material-symbols-outlined">
                    arrow_right_alt
                    </span>
                </Link>
                </div>
            </div>
            </main>
    );
}

export default Card;