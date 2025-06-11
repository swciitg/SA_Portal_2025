import rightArrow from '../assets/Images/arrow-right.png'
import emptyImage from '../assets/Images/empty.png'

const SportsClubCard = ({clubName,description,imageUrl}) =>{

    return (
        <div className="p-[7px] flex flex-col h-[458px] w-[384px] border-2 border-rgba(0,0,0,0.3) ">
            <img src={imageUrl || emptyImage} alt={clubName} className='aspect-[360/270] w-100 mb-2' />
            <h2 className='text-[25px] font-medium'>{clubName || 'Club Name'}</h2>
            <p className='text-[#00000099] text-ellipsis'>{description}</p>
        </div>
    );

}

export default SportsClubCard;