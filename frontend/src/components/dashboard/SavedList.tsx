import axios from "axios";
import { useState, useContext } from "react";
//import { UserContext } from "../Context/users";

const SavedList = () => {
   // const {user, setUser}= useContext(UserContext);
    const [list, setList]= useState([]);

    const API_URL= 'http://localhost:3000/content' //`http://localhost:3000/content/${user.id}`;

    const getSavedList = async () => {
        try {
            const response = await axios.get(API_URL);
            setList(response.data);
        } catch (error) {
            console.error("Error fetching saved list:", error);
        }
    }

    return (
        <div>
            <h1>SavedList</h1>
            {list.map((item) => (
                <div key={item.id}>
                    <h2>{item.createdAt}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
            
        </div>
    )
}
export default SavedList