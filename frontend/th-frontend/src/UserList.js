import React , {useState , useEffect} from 'react';
import Database from './db.js';
import uuid from 'react-uuid';

const UserList = () => {
    const [users , setUsers] = useState([]);
    
    useEffect(() => {
        async function getUsers () {
            const usersList = await Database.findAll();
            setUsers(usersList);
        }
        getUsers();
    } , [])
    
    return(
        <div>
            {users.map(u => (
                <div key = {uuid()}>
                    <p>
                   {u.id} {u.email} {u.firstName} {u.lastName} {u.state} 
                   </p>
                    </div>
            ))}
        </div>
    )

}

export default UserList;
