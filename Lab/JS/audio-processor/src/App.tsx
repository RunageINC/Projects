import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Label } from "./components/ui/label";
import { Slider } from "./components/ui/slider";
import { HardDriveDownload, SaveAll } from "lucide-react";
import { Button } from "./components/ui/button";
import { audioList, type AudioFile } from "./audioAssets/script/fileList";
import { AudioFileComponent } from "./components/AudioFileComponent";

function App() {
  const [db, setDb] = useState<number>(100);
  const [audioTrackList, setAudioTrackList] = useState<AudioFile[]>([]);

  useEffect(() => {
    setAudioTrackList(audioList);

    console.log(audioList);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <h1 className="text-2xl">Audio Silent File Remover</h1>

      <div className="flex flex-col mt-5 h-full">
        <div className="flex flex-col gap-3 min-w-[500px]">
          <Label>
            Audio dB limit: <span className="strong">-{db} dB</span>
          </Label>
          <Slider
            defaultValue={[db]}
            step={1}
            onValueChange={(val) => setDb(val[0])}
          />
        </div>
        <div className="flex mt-5 justify-around items-stretch">
          <Button variant="secondary">
            Load Audio Files <HardDriveDownload />
          </Button>
          <Button variant="secondary" className="bg-green-700">
            Separate Audio Files <SaveAll />
          </Button>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          {audioTrackList.length > 0 &&
            audioTrackList.map((audioTrack) => (
              <AudioFileComponent
                fileName={audioTrack.name}
                limitDb={70}
                url={audioTrack.url}
              />
            ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
