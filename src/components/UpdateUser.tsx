import React from 'react';
import { updateUser } from '../store/slices/UserSlice.tsx';
import { useDispatch } from 'react-redux';
import { useInput } from '../customHooks/useInput.tsx';

interface UpdateUserProps{
    index:number;
    firstName?: string;
    lastName?: string;  
    handleUpdate: (index:number|undefined) => void;
}

const UpdateUser:React.FC<UpdateUserProps> = ({index, firstName, lastName, handleUpdate})  => {
    const dispatch = useDispatch();
    const [modifiedFirstName, setFirstName] = useInput(firstName);
    const [modifiedLastName, setLastName] = useInput(lastName);

    const modifyUser = (firstName: string, lastName: string) => {
        if(firstName === '' || firstName === undefined || lastName ===undefined || lastName === ''){
            alert('First name or Last namemust not be empty')
            return null;
        }
        dispatch(updateUser({index:index, firstName: firstName, lastName: lastName}))
        handleUpdate(undefined);    
    }
    return(
        <>
        <h1>Update User!</h1>
            <input type="text" value={modifiedFirstName} onChange={(event)=>setFirstName(event.target.value)} 
            placeholder="Enter First Name"/>
            
            <input type="text" value={modifiedLastName} onChange={(event)=>setLastName(event.target.value)} 
            placeholder="Enter Last Name"/>
            <button onClick={()=>modifyUser(modifiedFirstName, modifiedLastName)}>Update User</button>
            <button onClick={()=>handleUpdate(undefined)}>Cancel</button>
        </>
    )
}

export default UpdateUser;
