import chevronRight from '../../assets/Images/chevron-right.png';
import './styles.css';

const Ann = (props) =>{
    const {text,date}  = props;
    return (
        <div className='each-announcement'>
            <div>
                <p>{date}</p>
                <h2>{text}</h2>
            </div>
            <div className='img-container'>
                <img src={chevronRight} alt="chevron-right" />
            </div>
        </div>
    )
}

export default Ann;