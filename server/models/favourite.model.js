const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,'Email cannot be blank']
    },
    giphy:[{id : {
            type : String}, 
          image :{
              type: String
          },
          url :{
            type: String
        }
    }]
})

const Favourite = mongoose.model('Favourite',favouriteSchema);

module.exports = Favourite;