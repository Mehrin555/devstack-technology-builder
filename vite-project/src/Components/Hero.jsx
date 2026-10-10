
// function Hero() {
//   return (
//     <div className="text-center py-20">

//       <h2 className="text-black font-bold text-6xl">
//         Build your ideal <br />
//         <span className="text-orange-500">
//           Development Stack
//         </span>
//       </h2>

//       <p className="mt-5 text-gray-600">
//         Explore frontend, backend, database and tooling options,
//         <br />
//         compare them side by side and put together the stack that fits you.
//       </p>

//       <div className="mt-8">
//         <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
//           Explore Technologies
//         </button>

//         <button className="ml-4 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg">
//           Learn More
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Hero;
import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side: Text and Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h2 className="text-black font-bold text-5xl md:text-6xl">
            Build your ideal <br />
            <span className="text-orange-500">
              Development Stack
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Explore frontend, backend, database and tooling options,
            compare them side by side and put together the stack that fits you.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
              Explore Technologies
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerStack}
            alt="Developer Stack"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
