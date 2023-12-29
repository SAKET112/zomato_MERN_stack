import './Search.css';

const Search = () => {
  return (
    <div className='mainContainer'>
        <div className="logo">
          <span>Z!</span>
        </div>
        <div className="heading">
            Find the best restaurants, cafes, and bars
        </div>
        <div className="dropdown">
                <select>
                   <option>-----SELECT YOUR CITY-----</option>
                   <option>Delhi</option>
                   <option>Amsterdam</option>
                </select>
                <select id="restSelect">
                    <option>-----SELECT YOUR RESTAURANTS-----</option>
                    <option>Wow Momos</option>
                    <option>Pret A Manger</option>
                </select>
           </div>
    </div>
  )
}

export default Search