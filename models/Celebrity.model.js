//  Add your code here


const { Schema, celebrity } = require('mongoose');

const celebritySchema = new Schema(
    {
        name: String,
        ocupation: String,
        catchPhrase: String,
    },
    {
        timestamps: true
    }
);

module.exports = model('Book', celebritySchema);
