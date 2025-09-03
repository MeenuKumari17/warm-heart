import { Link } from "react-router-dom";

export default function OurCollection() {
  const collections = [
    {
      title: "All Seasons 💕",
      desc: "Spring florals, summer citrus, autumn spices, winter warmth",
      link: "/all-seasons",
    },
    {
      title: "Party & Celebration ✨",
      desc: "Birthday, anniversary, and special occasion candles",
      link: "/party-celebration",
    },
    {
      title: "Premium Gifting 🎀",
      desc: "Elegant gift sets and luxury candles for loved ones",
      link: "/premium-gifting",
    },
    {
      title: "Self-Love 🌸",
      desc: "Aromatherapy and mindfulness candles for inner peace",
      link: "/self-love",
    },
  ];

  return (
    <section
      id="collection"
      className="relative py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-100 font-[Manrope]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        * {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight">
          Our Collection
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Discover candles for every mood, occasion, and moment of self-care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {collections.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group relative flex flex-col justify-between p-8 w-full rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 min-h-[300px] bg-gradient-to-br from-pink-50 via-white to-yellow-50 bg-[length:200%_200%] animate-[gradientMove_6s_ease_infinite]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100/40 to-yellow-100/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="relative z-10">
              <span className="inline-block text-pink-600 font-medium group-hover:underline tracking-wide">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
