import React from "react";
import preloader from '../../../assect/images/loader_svg.svg';


let Preloader = (props) => {
    return  <div style={{backgroundColor: 'white'}} >
        <img src={preloader} />
    </div>
}

export default Preloader;