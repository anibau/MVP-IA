import axios from "axios";
import { useState,  } from "react";

const SavedList = () => {
    const [list, setList]= useState([]);
    const API_URL= 'http://localhost:3000/ai/savedList';

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
            
        </div>
    )
}
export default SavedList