const mongoose = require('mongoose')

const uri = 'mongodb+srv://mahinvrajput999:1NHRFTWrCGpHxSja@blogger.8orzg.mongodb.net/Blogger?retryWrites=true&w=majority&appName=blogger'



  async function run() {
    await mongoose.connect(uri).then(()=>{

        console.log('connected')
        const db = mongoose.connection;
        console.log(`Connected to database: ${db.name}`);
    }).catch((err)=>{


        throw err
    });

  }

  module.exports = run