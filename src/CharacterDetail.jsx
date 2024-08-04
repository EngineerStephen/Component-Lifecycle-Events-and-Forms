import React, {useEffect, useState} from "react";

export function CharacterDetail(props) {

    const [CharacterDetail, setCharacterDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<YOURPUBLICKEY>&hash=<YOUR
























export default CharacterDetail;