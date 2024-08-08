import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export function CharacterDetail(props) {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOUR_API_KEY>&hash=<YOUR_HASH>")
            .then((response) => {
                setCharacters(response.data.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
}, []);

    const handleDetailClick = (character) => {
        props.onCharacterDetail(character);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Character Detail</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <button onClick={() => handleDetailClick(character)}>
                            {character.name}
                        </button>
                        <p>Description: {character.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

CharacterDetail.propTypes = {
    onCharacterDetail: PropTypes.func.isRequired
};

export default CharacterDetail;
