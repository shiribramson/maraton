import './Bg.css';
import close_red from './assets/close.png';

function Bg() {
    return (
    <div className='bg_container'>
    <img src={close_red} alt='close-icon' className='close-icon'/>
    </div>
    )
}

export default Bg;