const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "codeware-blogs", // your folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
