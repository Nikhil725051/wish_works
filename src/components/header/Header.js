import './header.css'

export default function(){
    return(<div className='header'>
            <h1>Find a place you'll love <br/> to call home.</h1>
            <div className='search'>
             <input className='searchInput' placeholder='Mumbai, India'></input>
             <button className='searchBtn'>SEARCH</button>
            </div>
    </div>)
}