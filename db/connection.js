require('dotenv').config();
const mongoose = require('mongoose');

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/shopping-application', {useNewUrlParser: true, useUnifiedTopology: true})
}
mongoose.connection.once('open', () => {
	console.log(`Mongoose has connected to MongoDB`);
});

// If the connection throws an error
mongoose.connection.on('error', (error) => {
	console.error(`MongoDB connection error!!! ${error}`);
	process.exit(-1);
});
//export here
		
		
// 		'mongodb://localhost/shopping-application', {useNewUrlParser: true, useUnifiedTopology: true})
// }

// mongoose.connection.once('open', function() {
// 	console.log(`Mongoose has connected to MongoDB`);
// });

// // If the connection throws an error
// mongoose.connection.on('error', function(error) {
// 	console.error(`MongoDB connection error!!! ${error}`);
// 	process.exit(-1);
// });

module.exports = mongoose;
