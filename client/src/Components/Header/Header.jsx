import hero from '../../assets/hero.jpg';
import Button from '../Button/Button';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
  return (
    <>
        <div className="container">
            <div className="header">
                <img className='hero-section' src={hero} alt="Hero Image" />
            </div>
            <div className="button-section">
                <Button value="Login" />
                <Button value="Create an Account" />
            </div>
            <div className="header-body">
                <div className="logo">
                    e!
                </div>
                <div className="header-para">
                    Find the best restaurants, cafe's, and bars
                </div>
                <div className="search-container">
                    <Search />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Header