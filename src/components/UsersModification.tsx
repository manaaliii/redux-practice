import React, {useState} from "react";
import DisplayUser from "./DisplayUser.tsx";
import { useSelector } from "react-redux";
import UpdateUser from "./UpdateUser.tsx";

interface UserType{
    firstName: string;
    lastName: string;
}

interface UserTaskProps{
    index: number|undefined;
    handleIndexUpdate: (index:number|undefined)=>void;
}

const UsersModification:React.FC<UserTaskProps> = ({index, handleIndexUpdate}) =>{
    const [user, setUser] = useState<undefined|UserType>(undefined);
    const [search, setSearch] = useState<undefined|string>(undefined);
    const users = useSelector((state) => {
        return state.users
    })
    console.log(index)

    const handleUpdate = (clickedIndex:number|undefined) => {
        handleIndexUpdate(clickedIndex);
        setSearch(undefined);
        setUser(clickedIndex === undefined ? undefined : users[clickedIndex]);
    }

    return(
        <>  
            {index === undefined ?
             (
                <>
                <br />
                <br />
                <input placeholder="enter first name to search" onChange={(event)=>setSearch(event.target.value)} />
                <DisplayUser searchName={search} handleUpdate={handleUpdate} /> 
                </>
             ):
            <UpdateUser index={index} firstName={user?.firstName} lastName={user?.lastName} handleUpdate={handleUpdate} />
        }

        </>
    ) 
}

export default UsersModification;