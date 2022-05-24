import React from "react";
import {AboutStyle, AboutAvatar, AboutImg, AboutLocation, AboutName, AboutProfession, AboutStyled, Divflex,AboutH2 }  from '../styles/AboutStyle'


const About = () =>{
    return(

        
            <AboutStyle>
             <AboutAvatar>
                 <figure>
                    <AboutImg src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1648862413/download_a7olq6.png" alt=''/>     
                </figure>
             </AboutAvatar>
             <AboutName>
                 <h2>Danilo</h2>
             </AboutName>
             <AboutProfession>
                 <p> Estudiante Academia Geek</p>
            </AboutProfession>
            <AboutLocation>
                En mis tiempos libres programo
            </AboutLocation>
            <AboutLocation>
                Ebejico, Ant 
            </AboutLocation>
           

           
        </AboutStyle>
        
    )
}
export default About