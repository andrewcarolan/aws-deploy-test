import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

const s3Client = new S3Client({ region: "us-east-1" });

const file = "./100cat.jpeg";
const fileStream = fs.createReadStream(file);

const bucketParams = {
  Bucket: "joyful-moments",
  Key: path.basename(file),
  Body: fileStream,
};

const doUpload = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};

doUpload();
