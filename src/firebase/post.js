import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config"; // Import the Firestore instance from your firebase.js file

const postCollectionRef = collection(db, "posts");

// Function to add a new post to Firestore
const addPost = async (content, userId, userName, userPhotoURL) => {
    try {
        const post = {
            content,
            userId,
            userName,
            userPhotoURL,
            createdAt: new Date().toISOString(),
        };

        const docRef = await addDoc(postCollectionRef, post);
        return { ...post, id: docRef.id };
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};

// Function to get all posts from Firestore
const getAllPosts = async () => {
    try {
        const querySnapshot = await getDocs(postCollectionRef);
        const posts = [];
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() });
        });
        return posts;
    } catch (error) {
        console.error("Error getting posts:", error);
        throw error;
    }
};

export { addPost, getAllPosts };
