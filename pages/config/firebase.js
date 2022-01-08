import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAWmbYO6NIoqaRqSnUYWvvPVm0TOCG1c6k",
    authDomain: "questionnaire-app-f1ce6.firebaseapp.com",
    projectId: "questionnaire-app-f1ce6",
    storageBucket: "questionnaire-app-f1ce6.appspot.com",
    messagingSenderId: "561667696176",
    appId: "1:561667696176:web:0864975568e01cc924eff5"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
