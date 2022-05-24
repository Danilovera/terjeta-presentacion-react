import React from "react";
import { Experiencia, Textcenter } from "../styles/EducationStyle";
import { H2styled } from "../styles/H2style";


export const Education = () => {
  return (
      
    <div>
      <Textcenter>
      <H2styled name="Mis Estudios"/>
      <div className="education-container">
        <div className="educiation-item">
            <h1>IEU SAN JOSE - <span>2020</span></h1>
            <p>Basico Bachiller</p>
            
            <div className="Education-item">
                <h1>Academia Geek<span>2022</span></h1>
                <p>Proximo a Desarrollador de software</p>
            </div>
        </div>
      </div>
      
    </Textcenter >

    <Experiencia>
    <H2styled name="Experiencia"/>
    <div className="Education-item">
                <h1>Desarrollar junior </h1>
                <p>Practico todos los dias</p>
            </div>
    </Experiencia>

    <Experiencia>
    <H2styled name="Experiencia"/>
    <div className="Education-item">
                <h1>Desarrollar junior </h1>
                <p>Practico todos los dias</p>
            </div>
    </Experiencia>
    </div>


  );
};
