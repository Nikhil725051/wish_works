import './properties.css';
import PropertyCard from './propertyCard/PropertyCard';

export default function Properties(){

    const properties = [{
        img: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },
    {
        img: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg',
        name: "Forest Hills, NY 11375",
        des: "3 bedrooms, 2 bathrooms",
        desText: "This beautifully renovated townhouse is located in Brighton Village. This gated community features a pool, playground, and dog friendly area. This townhome has a new roof, new water heater, a 4 year old HVAC, and Nest thermostats. The spacious first floor has hardwood floors and upgraded lighting throughout. Renovated kitchen boasts a large 70 inch quartz island perfect for entertaining. Stainless steel appliances and farmhouse sink compliment the kitchen. Family room features a gas fireplace. Separate dining area with access to patio and greenspace. Spacious laundry room with storage. Primary suite features his and hers walk in closets, his and her vanities and free standing shower and bathtub. The 2 car garage is a true extension of the home featuring a ventilation system and premium flooring perfect for the car enthusiast or woodworker. 2 miles to East Atlanta Village. 2 Miles to East Lake Golf Course. 4 miles to Grant Park. Easy access to I-20."
    },]

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