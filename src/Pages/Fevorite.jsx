
import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';

function Favorite() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storefavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storefavorites);
    }, []);

    return (
        <div className="favorite">
            <Sidebar />
            <div className="favorite-content">
                <h1>Favorite Tweets</h1>
                {favorites.map((tweet) => (
                    <div key={tweet.id}>
                        <p>{tweet.tweet}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default Favorite;
