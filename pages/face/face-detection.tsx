import Head from 'next/head';
import { useRef, useState } from 'react';
import useFace from '../../hooks/useFace';
import { faceDetectionResponse } from '../../lib/api/face/faceDetection';
import styles from './face-detection.module.css';
import FaceResult from '../../components/FaceResult';

export default function FaceDetection() {
  const { getFaceDetection } = useFace();
  const [result, setResult] = useState<faceDetectionResponse | null>(null);
  const inputURL = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    if (!inputURL.current) return;
    const faceResult = await getFaceDetection(inputURL.current.value);
    setResult(faceResult);
  };

  return (
    <>
      <Head>
        <title>나의 얼굴 나이는?</title>
      </Head>
      <main className={styles.container}>
        <h1>나의 얼굴 나이는?</h1>
        <div className={styles.inputBoxContainer}>
          <input
            type="text"
            name="image_url"
            className={styles.urlInput}
            placeholder="이미지 URL을 입력하세요."
            ref={inputURL}
          />
          <button className={styles.submit} onClick={onSubmit}>
            검사해보기
          </button>
        </div>
        <FaceResult faceResult={result} />
      </main>
    </>
  );
}
