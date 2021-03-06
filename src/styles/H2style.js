import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight: 300;
letter-spacing: 8px;
margin: 1em 0 0 0;
color: #448AFF;
text-align: center;
`;

export const H2styled= ({name})=>{

    return(<StyledH2>{name}</StyledH2>)
}
    


