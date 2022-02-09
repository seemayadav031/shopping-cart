const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const cartSchema = new mongoose.Schema({
    userId: {type:ObjectId, ref:'UserProjectFive', require:true},// unique:true},
    items: [{_id:false,
      productId: {type:ObjectId, ref:'ProductProjectFive', require:true},
      quantity: {type:Number, require:true} //min 1}
    }],
    totalPrice: {type:Number, require:true}, // comment: "Holds total price of all the items in the cart",
    totalItems: {type:Number, require:true}, //comment: "Holds total number of items in the cart"},
    
  },{ timestamps: true })


  module.exports = mongoose.model('CartProjectFive', cartSchema)