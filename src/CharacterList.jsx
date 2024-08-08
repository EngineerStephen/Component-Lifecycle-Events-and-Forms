import { useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";

export function CharacterList(props) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6feb8dbff61a54eb4f67b903f1d2363b&hash=773dc610dc01e0376c59cd350b0b5b16")
                .then((response) => {
                    setCharacters(response.data.data.results);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                    setLoading(false);
                });
        }
    }, [loading]);

    const handleOrderClick = () => {
        props.onCharacterSelect(characters);
    }

    const handleCharacterClick = (characterName) => {
        alert(`You clicked on ${characterName}`);
    }

    return (
        <div>
            <h1>Marvel Character List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <button onClick={handleOrderClick}>Click Me to See Marvel Characters</button>
                    <ul>
                        {characters.map(character => (
                            <li key={character.id} onClick={() => handleCharacterClick(character.name)}>
                                Character Name: {character.name} Description: {character.description || 'No description available'}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

CharacterList.propTypes = {
    onCharacterSelect: PropTypes.func.isRequired
};

export default CharacterList;