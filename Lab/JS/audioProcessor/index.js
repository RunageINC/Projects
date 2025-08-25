import { readFileSync } from "node:fs";
import wav from "wav-decoder";

function computeDBFS(samples) {
  let sumSq = 0;
  for (let i = 0; i < samples.length; i++) {
    sumSq += samples[i] * samples[i];
  }
  const rms = Math.sqrt(sumSq / samples.length);
  const dbfs = 20 * Math.log10(rms);
  return dbfs;
}

async function analyzeWav(filePath) {
  const buffer = readFileSync(filePath);
  const audioData = await wav.decode(buffer);

  const { channelData, sampleRate } = audioData;

  console.log(`Sample rate: ${sampleRate}`);
  console.log(`Channels: ${channelData.length}`);
  console.log(`Samples per channel: ${channelData[0].length}`);

  // Combine channels if stereo (average)
  const length = channelData[0].length;
  const merged = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let ch = 0; ch < channelData.length; ch++) {
      sum += channelData[ch][i];
    }
    merged[i] = sum / channelData.length;
  }

  const dBFS = computeDBFS(merged);
  console.log(`Estimated level: ${dBFS.toFixed(2)} dBFS`);
}

console.log("----- WITH AUDIO ------");
analyzeWav("./with_audio.wav").catch(console.error);
console.log("----- WITHOUT AUDIO ------");
analyzeWav("./without_audio.wav").catch(console.error);
console.log("----- WITH VERY LOW AUDIO ------");
analyzeWav("./withLowVolume_audio.wav").catch(console.error);
