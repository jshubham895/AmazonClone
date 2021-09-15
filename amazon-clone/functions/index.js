const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51JZxQ9SI9BMxQpTJ8WIkaW6xv6M2opJcTboEoeBIzz0xhqjVtWUJqGJlrhHq2ZHJAhvbIrjRoZLa38ElLG9Khu6300M03dzhf2"
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "inr"
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	});
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-dd1e8/us-central1/api
