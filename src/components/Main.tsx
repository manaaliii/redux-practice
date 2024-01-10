import React, {useState} from 'react';
import AddUser from './AddUser.tsx';
import UsersModification from './UsersModification.tsx';

const Main:React.FC = () => {
    
    const [index, setIndex] = useState<undefined|number>(undefined);

    const handleIndexUpdate = (clickedIndex:number|undefined) => {
        setIndex(clickedIndex);
    }
    return(
        <>
            { index === undefined && <AddUser /> }
            <UsersModification index={index} handleIndexUpdate={handleIndexUpdate}/>
        
        </>
    )
}

export default Main;