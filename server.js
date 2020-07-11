//NODE SERVER SET UP

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); //allows building of paths for directories

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //process all body tags to JSON. 
app.use(bodyParser.urlencoded({ extended: true })); //url strings don't contain spaces or symbols

app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client.build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
};

app.listen(port, error => {
    if (error) throw error;
    console.log("server running on port " + port);
});

app.post("/payment", (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd"
    };

    stripe.charges.create(body, (stripeErr, stripeResponse) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr }); //failure status code
        } else {
            res.status(200).send({ success: stripeResponse });
        }
    }); 
});