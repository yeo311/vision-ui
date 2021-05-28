import React from 'react';
import { faceDetectionResponse } from '../../lib/api/face/faceDetection';

export type FaceResultProps = {
  faceResult: faceDetectionResponse | null;
};

export default function FaceResult({ faceResult }: FaceResultProps) {
  if (!faceResult) return null;

  return (
    <div
      style={{
        width: faceResult.result.width,
        height: faceResult.result.height,
        marginTop: '20px',
      }}
    >
      <div
        style={{
          width: faceResult.result.width,
          height: faceResult.result.height,
          backgroundImage: `url(${faceResult.imageURL})`,
          position: 'relative',
        }}
      >
        {faceResult.result.faces.map((face, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  left: `${face.x * 100}%`,
                  top: `${face.y * 100}%`,
                  width: `${face.w * 100}%`,
                  height: `${face.h * 100}%`,
                  position: 'absolute',
                  border: '2px solid #9bff71',
                }}
              ></div>
              <div
                style={{
                  left: `${(face.x + face.w) * 100}%`,
                  top: `${face.y * 100}%`,
                  position: 'absolute',
                  backgroundColor: '#0000007d',
                  color: 'white',
                  padding: '5px',
                  borderRadius: '10px',
                }}
              >
                <p style={{ fontSize: '0.7rem' }}>
                  {face.facial_attributes.gender.female <
                  face.facial_attributes.gender.male
                    ? '남자'
                    : '여자'}{' '}
                  / {Math.floor(face.facial_attributes.age)} 세
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
