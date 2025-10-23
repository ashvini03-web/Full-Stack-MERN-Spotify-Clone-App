import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {
    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME, // Match the .env file name
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY // Match the .env file name
    })
}

export default connectCloudinary;