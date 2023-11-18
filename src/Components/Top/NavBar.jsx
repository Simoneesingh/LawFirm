export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center text-white py-4">
        <div className="flex flex-row gap-2">
          <img src="./X.png" alt="icon" className="h-8" />
          <h1 className="font-bold text-xl">IGSTUDIO</h1>
        </div>
        <div className="flex flex-row gap-6 max-w-[431px] max-h-[26px]">
          <ul>Home</ul>
          <ul>Attorney</ul>
          <ul>Practice Area</ul>
          <ul>About Us</ul>
        </div>
        <button className="border-2 border-b1 py-2 px-6">Contact Now</button>
      </div>
    </div>
  );
}
