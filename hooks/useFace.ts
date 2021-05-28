import { faceDetection } from '../lib/api/face/faceDetection';

export default function useFace() {
  const getFaceDetection = async (imageURL: string) => {
    const result = await faceDetection(imageURL);
    result.imageURL = imageURL;
    return result;
  };

  return { getFaceDetection };
}
