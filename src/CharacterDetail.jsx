import React, { useEffect } from "react";

export function CharacterDetail(props) {
    const { character } = props;

    useEffect(() => {
        if (loading) {
            axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<6feb8dbff61a54eb4f67b903f1d2363b>&hash=<773dc610dc01e0376c59cd350b0b5b16>")
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

    const handleDetailClick = () => {
        props.onCharacterDetail(character);
    }

    return (
        <div>
            <h1>Character Detail</h1>
            <button onClick={handleDetailClick}>Click Me to See Character Details</button>
            <ul>
                <li>
                    Character Name: {character.name} Description: {character.description}
                </li>
            </ul>
        </div>
    );
}

export default CharacterDetail;