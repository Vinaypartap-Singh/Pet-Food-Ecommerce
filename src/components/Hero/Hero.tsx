export default function Hero() {
  return (
    <div className="min-h-[80vh] hero flex justify-center items-start px-10 flex-col gap-y-6">
      <h3 className="text-2xl uppercase">High Quality</h3>
      <h1 className="text-7xl lg:text-9xl lg:font-bold uppercase">Pet Food</h1>
      <h5 className="text-lg">Sale! Up to 40% off today!</h5>
      <button className="bg-purple-900 text-white px-5 py-3 rounded-full">
        Shop Now
      </button>
    </div>
  );
}
