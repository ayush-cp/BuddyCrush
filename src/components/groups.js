import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {db} from "../Firebase"

export const createGroup = async(groupData)=>{
    try{
        const categoryRef = collection(db, 'Category', groupData.category, 'groups')
        const docRef = await addDoc(categoryRef, groupData)
        console.log("group created with data and id ", docRef)
        return groupData;

    }catch(error){
        console.error("Error adding group:", error);
        throw error;
    }
}
