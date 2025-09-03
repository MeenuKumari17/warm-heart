import React, { useState } from "react";

const colors = [
  { name: "Pastel Red", value: "#ffadad" },
  { name: "Pastel Blue", value: "#a0c4ff" },
  { name: "Pastel Green", value: "#b5ead7" },
  { name: "Pastel Purple", value: "#cdb4db" },
  { name: "Pastel Pink", value: "#ffc6ff" },
  { name: "Pastel Yellow", value: "#fff3b0" },
  { name: "Pastel Orange", value: "#ffd6a5" },
  { name: "Pastel White", value: "#fef9f9" },
  { name: "Gradient 1", value: "linear-gradient(45deg,#ffadad,#ffd6a5,#fff3b0)" },
  { name: "Gradient 2", value: "linear-gradient(45deg,#a0c4ff,#cdb4db,#ffc6ff)" },
  { name: "Gradient 3", value: "linear-gradient(45deg,#b5ead7,#cdb4db,#ffadad)" },
];

const candleTypes = ["Bubble", "Rose", "Teddy", "Laddu", "Jar", "Peony"];

const CustomCandleOrder = () => {
  const [color, setColor] = useState("");
  const [customColor, setCustomColor] = useState("");
  const [candleType, setCandleType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [scent, setScent] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [additional, setAdditional] = useState("");
  const [name, setName] = useState("");

  const handleSendWhatsApp = () => {
    const whatsappNumber = "919911956680";
    const finalColor = customColor || color || "Not specified";

    const text =
      `🌟 Custom Candle Order Request 🌟\n` +
      `Candle Type: ${candleType || "Not specified"}\n` +
      `Color: ${finalColor}\n` +
      `Occasion: ${occasion || "Not specified"}\n` +
      `Preferred Scent: ${scent || "Not specified"}\n` +
      `Quantity: ${quantity || 1}\n` +
      `Custom Message/Text: ${message || "N/A"}\n` +
      `Additional Details: ${additional || "N/A"}\n` +
      `Your Name: ${name || "N/A"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section
      id="custom-order"
      className="w-full py-20"
      style={{
        background: "linear-gradient(135deg, #FFD6A5 0%, #FFADAD 50%, #FFC6FF 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14 text-center text-white drop-shadow-lg">
          Custom Candle Orders
        </h2>

        <div className="grid md:grid-cols-2 gap-12 bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl p-10">
          {/* Left: Customization Options */}
          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Candle Type:</label>
              <select
                value={candleType}
                onChange={(e) => setCandleType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">Select Type</option>
                {candleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Select Color:</label>
              <div className="flex flex-wrap gap-3 mb-3">
                {colors.map((c) => (
                  <div
                    key={c.name}
                    onClick={() => {
                      setColor(c.name);
                      setCustomColor("");
                    }}
                    style={{
                      background: c.value.includes("gradient") ? c.value : undefined,
                      backgroundColor: !c.value.includes("gradient") ? c.value : undefined,
                    }}
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 transition transform hover:scale-110 hover:shadow-lg"
                  ></div>
                ))}
                {customColor && (
                  <div
                    style={{ backgroundColor: customColor }}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer transition transform hover:scale-110 hover:shadow-lg"
                    title={`Custom: ${customColor}`}
                    onClick={() => setColor(customColor)}
                  ></div>
                )}
              </div>
              <input
                type="text"
                placeholder="Enter custom color (name or hex #xxxxxx)"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Occasion:</label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">Select Occasion</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Festival</option>
                <option>Corporate Gift</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Preferred Scent:</label>
              <select
                value={scent}
                onChange={(e) => setScent(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">Select Scent</option>
                <option>Lavender</option>
                <option>Vanilla</option>
                <option>Sandalwood</option>
                <option>Rose</option>
                <option>Jasmine</option>
                <option>Mixed</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Right: Custom Message & Details */}
          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Custom Message/Text:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your custom message"
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Additional Details:</label>
              <textarea
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
                placeholder="Any other requirements"
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handleSendWhatsApp}
                className="bg-gradient-to-r from-pink-400 to-yellow-300 hover:from-pink-500 hover:to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
              >
                💕 Send Custom Order Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCandleOrder;
