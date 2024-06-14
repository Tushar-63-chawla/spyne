const mongoose = require('mongoose');
const config = require('config');

const db="mongodb+srv://admin:admin123@mycluster.4kktj9g.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";


const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;