import './properties.css';
import { properties } from '../../propertyData';
import PropertyCard from './propertyCard/PropertyCard';

export default function Properties(){

    return(<>
    <h2 className='heading'>Explore homes</h2>
    <div className='properties'>
        {
            properties.map((property, i) => {
                return(<PropertyCard key={i} property={property}></PropertyCard>);
            })
        }
    </div></>);
}