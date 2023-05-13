import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const Bucket = process.env.AWS_BUCKET_NAME;
const s3Client = new S3Client({ region: "us-east-1" });

export const upload = async ({Key, Body}: {Key: string, Body: Buffer }) =>
{
    const uploadCommand = new PutObjectCommand({
        Bucket,
        Key,
        Body
    });
    
    try {
        return await s3Client.send(uploadCommand);
    }catch (e) {
        console.log(e);
        return e;
    }
}
