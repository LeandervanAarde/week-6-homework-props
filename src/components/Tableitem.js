import React from 'react';

const Tableitem = (props) => {
    let baseUrl ="https://www.youtube.com/watch?v=";
    let youtubeLink = props.youtube;
    let finalLink = baseUrl + youtubeLink;
    let success = props.flightSuccess;
    
  
    return (
        <div className='tableitem' key={props.id}>
                <p> Flight: {props.flightNr}</p>
                <img src={props.imgUrl} alt="small prop"/>
                <p>Name: {props.flightName}</p>
                <p className='success' id='succ'>Success: {success}</p>
               <a href={finalLink} target="_blank"><div className='btn'>Go to youtube</div></a>
               <a href={props.article} target="_blank"><div className='btn'>Go to article</div></a>
               <a href={props.wikipedia} target="_blank"><div className='btn'>Go to Wikipedia</div></a>
               
        </div>
        
    );
    
};

export default Tableitem;