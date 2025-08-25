const audioModules = import.meta.glob("../*.wav", {
  eager: true,
  import: "default",
});

export type AudioFile = {
  name: string;
  url: string;
};

export const audioList: AudioFile[] = Object.entries(audioModules).map(
  ([path, url]) => {
    const fileName = path.split("/").pop();
    return {
      name: fileName || "",
      url: url as string,
    };
  }
);
