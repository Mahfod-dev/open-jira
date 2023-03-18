import mongoose from 'mongoose';
import colors from 'colors';

export const connectDB = async () => {
	if (mongoose.connections[0].readyState) {
		console.log('Already connected');
		return;
	}

	try {
		const conn = await mongoose.connect(process.env.MONGO_URL || '');

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error: any) {
		console.error(`Error: ${error.message}`);
		await mongoose.disconnect();
		console.log('MongoDB Disconnected');
	}
};

// export const disconnectDB = async () => {
// 	try {
// 		await mongoose.disconnect();
// 	} catch (error: any) {
// 		console.error(`Error: ${error.message}`.red.underline.bold);
// 		process.exit(1);
// 	}
// };
