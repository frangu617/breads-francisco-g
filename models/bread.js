/// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker'
    }
})
breadSchema.methods.getBakedBy = function () {
    return `${this.name} bread was baked by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}
breadSchema.statics.findByBaker = function (baker) {
    return this.find({ baker: baker })
}

breadSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        await Bread.deleteMany({ baker: doc._id })
    }
    
})
// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
