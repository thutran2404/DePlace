import axios from "axios";

// Create an Axios instance with a base URL
const apiService = axios.create({
	baseURL: "http://yourapi.com/api",
	/* other custom settings */
});

// Set up an interceptor for the request if you need to handle tokens or headers
apiService.interceptors.request.use(
	config => {
		// For example, attaching an authorization token
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error),
);

// Export the Axios instance to be used throughout your app
export default apiService;
