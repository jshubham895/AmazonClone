import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-dd1e8.cloudfunctions.net/api"
	// "http://localhost:5001/clone-dd1e8/us-central1/api"
	// The API URL
});

export default instance;
