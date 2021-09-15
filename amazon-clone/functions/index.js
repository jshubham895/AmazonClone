const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51JZxQ9SI9BMxQpTJ8WIkaW6xv6M2opJcTboEoeBIzz0xhqjVtWUJqGJlrhHq2ZHJAhvbIrjRoZLa38ElLG9Khu6300M03dzhf2"
);
