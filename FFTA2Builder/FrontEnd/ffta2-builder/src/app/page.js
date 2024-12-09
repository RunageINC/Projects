import Image from "next/image";
import ffta2Wallpaper from "../assets/images/ffta2-home.jpg";

//url "https://images7.alphacoders.com/310/310764.jpg"

export default function Home() {
  return (
    <div className="flex justify-center">
      <Image src={ffta2Wallpaper} alt="Logo" />
    </div>
  );
}
