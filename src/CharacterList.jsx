import React, { useEffect, useState} from "react";
import axios from "axios";



export function CharacterList(props) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOURPUBLICKEY>&hash=<YOURHASH>")
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
                            <li key={character.id} onclick={handleCharacterClick(Character.names)}>
                                Character Name: {character.name} Description : {character.description} 
                                
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}


export default CharacterList;


