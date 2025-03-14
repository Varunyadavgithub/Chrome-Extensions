import { useState } from "react";
import { MdClose } from "react-icons/md";

function App() {
  const [color, setColor] = useState("#ffffff");

  // Change background color of the page
  const handleChangeBgColor = async () => {
    const [tab] = await chrome.tabs.query({ active: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
      args: [color],
    });
  };

  // Clear the applied background color
  const clearColor = async () => {
    const [tab] = await chrome.tabs.query({ active: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = "";
      },
    });
    setColor("#ffffff");
  };

  const closeExtension = () => {
    window.close();
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-500">
      <div className="w-80 p-6 bg-white rounded-xl shadow-xl max-w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center text-indigo-600">
            Background Color Changer
          </h1>
          <button
            onClick={closeExtension}
            className="text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer hover:bg-gray-200 p-2 rounded-full"
          >
            <MdClose className="text-3xl" />
          </button>
        </div>

        <p className="text-gray-600 text-center mb-6">
          <span className="font-semibold text-indigo-600">Experiment</span> with
          changing the background color of any website for a fun and
          personalized experience!
        </p>

        <div className="text-center mb-6">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-16 border-2 border-gray-300 rounded-4xl focus:outline-none cursor-pointer mb-4"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleChangeBgColor}
            className="cursor-pointer px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Apply Color
          </button>
          <button
            onClick={clearColor}
            className="cursor-pointer px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
