// auth.js
import { auth, googleProvider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
// import {auth}
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export { signInWithGoogle };
