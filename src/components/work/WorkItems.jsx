import React, {useState} from 'react';
import '../modal/Modal';
import '../modal/useModal';

const WorkItems = ({item}) => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img'/>
            <h3 className="work__title">{item.title}</h3>
            {item.website === "" &&
                
                    <a href={item.github} className="work__button">
                Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            
            }
            {item.website !== "" && 
            <>
                <a href={item.website} className="work__button">
                    Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                
                <a href={item.github} className="work__button">
                    Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </>
            
            }
            

        </div>
    )
}

export default WorkItems;