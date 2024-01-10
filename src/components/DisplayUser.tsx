import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice.tsx";

interface DisplayUserProps{
    searchName: string|undefined;
    handleUpdate: (index:number|undefined) => void;
}

const DisplayUser:React.FC<DisplayUserProps> = ({searchName,handleUpdate}) =>{
    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.users
    })


    const deleteUser = (index) =>{  
        dispatch(removeUser(index))
    }

    return(
        <>
            <table>
                <thead>
                    <th>index</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        searchName === undefined || searchName === ''?
                        (
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td><button onClick={()=>handleUpdate(index)}>Update</button></td>
                                    <td><button onClick={()=>deleteUser(index)}>Delete</button></td>
                                </tr>
                            ))
                        ) :
                        (
                            users.filter((user) => user.firstName.slice(0, searchName.length).toLowerCase() === searchName.toLowerCase()).map((user, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td><button onClick={()=>handleUpdate(index)}>Update</button></td>
                                    <td><button onClick={()=>deleteUser(index)}>Delete</button></td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    ) 
}

export default DisplayUser;