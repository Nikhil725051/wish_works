import { useState, useEffect } from 'react';
import './header.css';

export default function(){

    const [coords, setCoords] = useState({
        lat: '',
        long: ''
    });

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const {coords} = position;
                console.log(position);
                setCoords({
                    lat: coords.latitude,
                    long: coords.longitude
                });

            })
        }
    }, []);
    return(<div className='header'>
            <h1>Find a place you'll love <br/> to call home.</h1>
            <div className='search'>
             <input className='searchInput' placeholder={`${coords.lat}, ${coords.long}`}></input>
             <button className='searchBtn'>SEARCH</button>
            </div>
    </div>)
}