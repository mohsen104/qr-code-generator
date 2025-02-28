import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("Hello World");
  const [size, setSize] = useState("200");
  const [format, setFormat] = useState("");
  const [dark, setDark] = useState("#000000");
  const [light, setLight] = useState("#ffffff");

  const url = `https://quickchart.io/qr?text=${text}&size=${size}&format=${format}&dark=${dark.slice(
    1
  )}&light=${light.slice(1)}`;

  const [image, setImage] = useState(url);

  useEffect(() => {
    setImage(url);
  }, [text, size, format, dark, light]);

  return (
    <div className="bg-slate-100 w-screen h-screen flex flex-col gap-2 items-center justify-center">
      <div className="w-80 rounded-lg bg-white text-blue-600 shadow-md flex flex-col gap-4 items-center px-8 pb-8 pt-4">
        <div
          style={{ backgroundColor: light }}
          className="rounded border-2 border-gray-200 w-full h-[180px] flex items-center justify-center"
        >
          {!!text.trim().length ? (
            <img src={image} className="w-[170px] h-[170px]" />
          ) : (
            <div className="w-full h-[170px] flex items-center justify-center text-center text-red-600">
              <p>Please enter a valid input.</p>
            </div>
          )}
        </div>
        <a
          href={image}
          download={`qr-code.${format || "png"}`}
          target="_blank"
          className="w-full"
        >
          <button
            disabled={!text.trim().length}
            className="border-2 border-blue-500 bg-blue-500 text-white rounded px-2 py-1 w-full disabled:opacity-50"
          >
            Download
          </button>
        </a>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="w-full border-2 border-gray-200 px-3 py-1.5 rounded focus:outline-none font-normal placeholder:font-medium text-black"
          placeholder="text ..."
        />
        <div className="flex items-center justify-between w-full ">
          <select
            onChange={(e) => setSize(e.target.value)}
            value={size}
            className="cursor-pointer focus:outline-none bg-blue-500 border-2 border-blue-500 text-white px-2.5 py-1.5 rounded-md"
          >
            <option value="100" className="bg-white text-blue-500">
              100x100
            </option>
            <option value="200" className="bg-white text-blue-500">
              200x200
            </option>
            <option value="300" className="bg-white text-blue-500">
              300x300
            </option>
            <option value="400" className="bg-white text-blue-500">
              400x400
            </option>
            <option value="900" className="bg-white text-blue-500">
              900x900
            </option>
          </select>
          <select
            onChange={(e) => setFormat(e.target.value)}
            value={format}
            className="cursor-pointer focus:outline-none border-2 border-blue-500 px-2.5 py-1.5 rounded-md"
          >
            <option value="" className="bg-white text-blue-500">
              PNG
            </option>
            <option value="svg" className="bg-white text-blue-500">
              SVG
            </option>
          </select>
        </div>
        <div className="flex items-center w-full">
          <p className="text-sm w-24">Foreground :</p>
          <input
            type="color"
            value={dark}
            onChange={(e) => setDark(e.target.value)}
            className="cursor-pointer w-10 h-6"
          />
        </div>
        <div className="flex items-center w-full">
          <p className="text-sm w-24">Background :</p>
          <input
            type="color"
            value={light}
            onChange={(e) => setLight(e.target.value)}
            className="cursor-pointer w-10 h-6"
          />
        </div>
      </div>
      <p className="text-xs">Made By Mohsen 😎</p>
    </div>
  );
}

export default App;
