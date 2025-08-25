/* eslint-disable @typescript-eslint/no-explicit-any */
import { XCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
// import wav from "wav-decoder";

export const AudioFileComponent = ({
  fileName,
  limitDb,
  url,
}: {
  fileName: string;
  limitDb: number;
  url: string;
}) => {
  const [currentDb, setCurrentDb] = useState<number>(60);

  const computeDBFS = (samples: Float32Array<any>) => {
    let sumSq = 0;
    for (let i = 0; i < samples.length; i++) {
      sumSq += samples[i] * samples[i];
    }
    const rms = Math.sqrt(sumSq / samples.length);
    const dbfs = 20 * Math.log10(rms);
    return dbfs;
  };

  const analyzeWav = async (buffer: ArrayBuffer) => {
    const audioContext = new AudioContext();

    const audioBuffer = await audioContext.decodeAudioData(buffer);

    // audioBuffer contains decoded PCM data
    const channelData = audioBuffer.getChannelData(0);

    const length = channelData.length;
    const merged = new Float32Array(length);
    for (let i = 0; i < length; i++) {
      let sum = 0;
      for (let ch = 0; ch < channelData.length; ch++) {
        sum += channelData[ch];
      }
      merged[i] = sum / channelData.length;
    }

    const dBFS = computeDBFS(merged);

    setCurrentDb(dBFS);
  };

  //   useEffect(() => {
  //     const readFileContentAndWorkOnMetadata = async () => {
  //       const response = await fetch(url);
  //       const arrayBuffer = await response.arrayBuffer();

  //       analyzeWav(arrayBuffer);
  //     };

  //     readFileContentAndWorkOnMetadata();
  //   }, []);

  return (
    <div className="border-2 border-gray-400 pt-5 pb-5 pl-2 border-dashed flex justify-around">
      <span>{fileName}</span>
      <span>current DB: {currentDb.toFixed(2)}</span>
      <div className="flex">
        {currentDb <= limitDb && <XCircle color="red" />}
        {currentDb > limitDb && <CheckCircle color="green" />}
      </div>
    </div>
  );
};
