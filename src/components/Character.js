// Write your Character component here
import React from "react";
import styled from "styled-components";
import axios from "axios";

const CharDiv = styled.div`
  background-color: black;
  padding: 0.5em 4em;
  margin: 6em auto;
  width: 90%;
  text-align: left;
  border: 2px solid turquoise;
  color: white;
`;

const Character = (props) => {
    
    const char = props.char
    //console.log(char)
    return (
        <CharDiv>
            <h1>Character Name: {char.name}</h1>
            <p> Height: {char.height} centimeters tall</p>
            <p> Mass: {char.mass} Kilograms</p>
            <p> Gender: {char.gender}</p>
            <p>Eye Color: {char.eye_color}</p>
            <p>Hair Color: {char.hair_color}</p>
            <p>Skin color: {char.skin_color}</p>
            <p>Born in the Year {char.birth_year}</p>
        </CharDiv>
    );
};

export default Character;