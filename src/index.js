import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './Components/Cards';
import Sdata from './Components/Sdata';
import But from './Components/But';
import './main.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <> 
        {/* <Cards
        heads={Sdata[0].heads}
        imgsrc={Sdata[0].imgsrc}
        titles={Sdata[0].titles}
        />
        
        <Cards
        heads={Sdata[1].heads}
        imgsrc={Sdata[1].imgsrc}
        titles={Sdata[1].titles}
        />

        <Cards
        heads={Sdata[2].heads}
        imgsrc={Sdata[2].imgsrc}
        titles={Sdata[2].titles}
        />     */}

        
        <But/>
    </>    
);


