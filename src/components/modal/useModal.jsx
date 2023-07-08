import React, {useState} from 'react';

import ReactDom from 'react-dom';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle(){
        setIsShowing(!isShowing);
    }

    return{
        isShowing,
        toggle,
    }
}

export default useModal;