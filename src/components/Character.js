// Write your Character component here
import React from "react";
import styled from "styled-components";
import axios from "axios";

const CharDiv = styled.div`
  background-color: black;
  padding: 0.25em 2em;
  margin: 6em auto;
  width: 90%;
  text-align: left;
  border: 2px solid turquoise;
  color: white;
`;

const Character = (props) => {
    return (
        <CharDiv>
            <h1>Character Name: {props.name}</h1>
            <p> Height: {props.height} centimeters tall</p>
            <p> Mass: {props.mass} Kilograms</p>
            <p> Gender: {props.gender}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin color: {props.skin_color}</p>
            <p>Born in the Year {props.birth_year}</p>
        </CharDiv>
    );
};

export default Character;