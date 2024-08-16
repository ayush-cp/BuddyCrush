import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export const createUser = async (userData)=>{
    try {
        // const userCollectionRef = 
        const userDocRef = doc(db, 'users', userData.uid);
        const userRef = await getDoc(userDocRef);
        if(userRef.exists()){
            console.log("User already exists ", userRef.data())
            return userRef.data()
        }else{

            // const docRef = await addDoc(collection(db, 'users'), userData)
             const docRef = await setDoc(userDocRef, userData)
            console.log("User created successfully ", docRef)
            return userData;
        }
    } catch (error) {
        console.log("Error occured while creating user, ", error);
        throw error;
    }
}