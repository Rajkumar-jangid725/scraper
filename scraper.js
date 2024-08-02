import express from "express";
import axios from "axios";
const app = express();

axios.get("https://api.scraperapi.com/structured/amazon/product?", {
    params: {
        api_key : "f6184bf228c7c52f01318e3eb10dd545",
        asin: "B09ZVP2VFG",
        country: "US",
        tld: ".us"
    }
})
.then(response => {
    console.log("Response" + response.data);
    return response.data;
})
.catch(error => {
    console.error("Error" + error);
    return error;
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});