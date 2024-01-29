import '../styles/Header.css';
import RestaurantPhoto from '../lib/img/restaurant food.jpg';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header id='headerbg'>
            <div id="hero-description" >
                <h1 className='title'>
                    Little Lemon
                </h1>
                <p className='desc'>We are a family owned mediterrian restaurant focused on traditional recipes served with a modern twist</p>
       <button className="yellow-rounded paragraph mt-9 reservebutton" onClick={() => navigate('/book')} >Reserve</button>
            </div>
            <img className="headerimg" src={RestaurantPhoto} alt="Restaurant"  />
        </header>
    )
}