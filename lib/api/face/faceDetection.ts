import client from '../client';

export type faceDetectionResponse = {
  imageURL: string;
  result: {
    width: number;
    height: number;
    faces: {
      facial_attributes: {
        gender: {
          male: number;
          female: number;
        };
        age: number;
      };
      x: number;
      y: number;
      w: number;
      h: number;
    }[];
  };
};

export async function faceDetection(imageURL: string) {
  console.log(process.env.API_KEY);
  const formData = `${encodeURIComponent('image_url')}=${encodeURIComponent(
    imageURL
  )}`;
  const response = await client.post<faceDetectionResponse>(
    '/v2/vision/face/detect',
    formData,
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }
  );
  return response.data;
}
