const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const url = "mongodb+srv://mujigujjar:blackfin%40gothra@limo-users-data.hlgtcmt.mongodb.net/?retryWrites=true&w=majority"
// require('dotenv').config()
// mongoose.connect(url)
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));