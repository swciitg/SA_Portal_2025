import rightArrow from '../assets/Images/arrow-right.png'
import emptyImage from '../assets/Images/empty.png'

const ClubCard = ({clubName,link,imageUrl}) =>{

    return (
        <div className="p-[25px] flex flex-col items-center justify-around h-[413px] w-[384px] border-2 border-rgba(0,0,0,0.3) ">
            <img src={imageUrl || emptyImage} alt={clubName} className='size-[230px]' />
            <h2 className='text-[25px] font-medium'>{clubName || 'Club Name'}</h2>
            <div className='bg-[#E9EAEC] w-40 px-3 py-2'>
                <a className='flex justify-around ' href={link} target="_blank">Know More <img src={rightArrow} alt='right-arrow' className='size-[25px]' /></a>
            </div>
        </div>
    );

}

export default ClubCard;