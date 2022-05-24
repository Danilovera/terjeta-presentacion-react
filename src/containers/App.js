import React from 'react';
import About from '../components/About';
import {Education} from '../components/Education'
import { Divflex }  from '../styles/AboutStyle'






const App = () => {
    return(

        <Divflex>
        
        <About />
        <Education />
        </Divflex> 
    )

}

export default App;