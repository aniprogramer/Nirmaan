import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../styles/createProject.css'; // Assuming custom styles (if needed)

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const CreateProject = () => {
  const mapContainerRef = useRef(null);
  const [marker, setMarker] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [selectionBox, setSelectionBox] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const imageRef = useRef(null);

  // Initialize Mapbox map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.5946, 12.9716], // Example: Bangalore
      zoom: 10,
    });

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      if (marker) marker.remove();

      const newMarker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
      setMarker(newMarker);
      setCoordinates({ lng, lat });
    });

    return () => map.remove();
  }, []);

  const handleContinue = () => {
    if (!coordinates) return;

    setLoading(true);
    setTimeout(() => {
      // Simulate image generation
      setGeneratedImage('nirmaan-website\src\assets\images\placeholder.jpg'); // Put placeholder image in `public/` folder
      setLoading(false);
    }, 2000); // 2-second mock delay
  };

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Simulate a fixed-size box from click
    const boxWidth = 100;
    const boxHeight = 100;

    setSelectionBox({
      x,
      y,
      width: boxWidth,
      height: boxHeight,
    });
  };

  const handlePromptSubmit = () => {
    if (!selectionBox || !prompt) return;

    setLoading(true);
    setFinalResult('');

    setTimeout(() => {
      // Simulate AI response
      setFinalResult('AI-generated suggestion: Solar-powered smart parking system.');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      {/* Map Section */}
      <div
        className="h-[400px] w-full rounded-md shadow-md mb-6"
        ref={mapContainerRef}
      />

      {coordinates && !generatedImage && (
        <button
          onClick={handleContinue}
          className="bg-primary text-white px-5 py-2 rounded hover:bg-navy transition"
        >
          Continue
        </button>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-4 overflow-hidden">
          <div className="bg-primary h-2.5 rounded-full animate-pulse w-full transition-all duration-500"></div>
        </div>
      )}

      {/* Image & Selection Section */}
      {generatedImage && (
        <>
          <div className="relative w-full max-w-3xl mx-auto mt-6">
            <img
              ref={imageRef}
              src={generatedImage}
              alt="Generated Site"
              className="w-full border-2 border-gray-300 rounded-md cursor-crosshair"
              onClick={handleImageClick}
            />

            {selectionBox && (
              <div
                className="absolute border-2 border-sky-500"
                style={{
                  left: selectionBox.x,
                  top: selectionBox.y,
                  width: selectionBox.width,
                  height: selectionBox.height,
                }}
              ></div>
            )}
          </div>

          {/* Prompt input */}
          <div className="mt-4">
            <label className="block text-lg font-medium mb-2 text-navy">
              Describe what you want to create:
            </label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., solar panels, smart irrigation..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
            />
            <button
              onClick={handlePromptSubmit}
              className="bg-sky text-white px-4 py-2 rounded hover:bg-navy transition"
            >
              Generate Design
            </button>
          </div>

          {/* Result */}
          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 my-4 overflow-hidden">
              <div className="bg-sky h-2.5 rounded-full animate-pulse w-full transition-all duration-500"></div>
            </div>
          )}

          {finalResult && (
            <div className="mt-4 bg-light border border-primary p-4 rounded text-secondary">
              <p>{finalResult}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CreateProject;
