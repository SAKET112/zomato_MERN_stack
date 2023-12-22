import { useState } from 'react'
import './Search.css'

const Search = () => {

    const [location, setLocation] = useState("");
    const [restaurants, setRestaurants] = useState("");

  return (
    <>
        <div className="container">
                <input
                    type="text" 
                    placeholder='Please type a location'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <input
                    style={{padding:"20px 200px 20px 15px"}} 
                    type="text" 
                    placeholder='Search for restaurants'
                    value={restaurants}
                    onChange={e => setRestaurants(e.target.value)}
                />
        </div>
    </>
  )
}

export default Search