import React from 'react';
import { useDispatch } from 'react-redux'; 
import { addUser } from '../store/slices/UserSlice.tsx';
import { useInput } from '../customHooks/useInput.tsx';

const AddUser:React.FC = ()  => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useInput('');
    const [lastName, setLastName] = useInput('');
    const addNewUser = () => {
        if(firstName === '' || lastName === '') {     
             alert('Please enter first name and last name');
            return null;
        }
        dispatch(addUser({firstName: firstName, lastName: lastName}))
    }
    return(
        <>
        <h1>Add User!</h1>
            <input type="text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} 
            placeholder="Enter First Name"/>
            
            <input type="text" value={lastName} onChange={(event)=>setLastName(event.target.value)} 
            placeholder="Enter Last Name"/>
            <button onClick={addNewUser}>Add User</button>
           
        </>
    )
}

export default AddUser;