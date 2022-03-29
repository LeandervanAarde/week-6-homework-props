
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Tableitem from './Tableitem';


const Component = () => {

    const [infoData, setInfoData] = useState([]);
    const[showMissions, setShowMissions] = useState([]);

    useEffect(() =>{

        axios.get('https://api.spacexdata.com/v5/launches ')
        .then((response) =>{
            let data = response.data;
            let dataArray = [];
            
            // console.log(data[0].success);
           
            for(let i = 0; i < data.length; i++){
                    let succ = data[i].success;
                    let succstring = succ?.toString() || '';
                
                dataArray.push({
                    id: data[i].id,
                    imgUrl: data[i].links.patch.small,
                    flightnr: data[i].flight_number,
                    flightName: data[i].name, 
                    flightSuccess: succstring,
                    article: data[i].links.article,
                    youtube: data[i].links.youtube_id, 
                    wikipedia: data[i].links.wikipedia,
                });

            }
            console.log(dataArray);
            setInfoData(dataArray);
            let displayInfo = dataArray.map((item) => <Tableitem id={item.id} imgUrl={item.imgUrl} flightNr={item.flightnr} flightName={item.flightName} flightSuccess={item.flightSuccess} article={item.article} youtube={item.youtube} wikipedia={item.wikipedia}  ></Tableitem>);
            setShowMissions(displayInfo);
        });
        
      
        },[]);

        const Items = infoData.map((item) => <Tableitem id={item.id} imgUrl={item.imgUrl} flightNr={item.flightnr} flightName={item.flightName} flightSuccess={item.flightSuccess} article={item.article} youtube={item.youtube} wikipedia={item.wikipedia}  ></Tableitem>);
        console.log(Items);
       
    

           
   

    return (
        <div className='Outer'>
            <div className='Inner'>
                <h1>Space-X Launches</h1>

            {showMissions}
            
            </div>

        </div>
    );
};

export default Component;