import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC3mGx-6GYs3NjDIQH7L1ltAf0t1yKJpz4",
	authDomain: "clone-dd1e8.firebaseapp.com",
	projectId: "clone-dd1e8",
	storageBucket: "clone-dd1e8.appspot.com",
	messagingSenderId: "396815549093",
	appId: "1:396815549093:web:df9dadaaa83565f741834c",
	measurementId: "G-NWTZ6608Q6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
