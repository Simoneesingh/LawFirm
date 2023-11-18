export default function Card({ percentage }) {
  return (
    <div className="flex flex-col border-2 border-white/20 rounded-lg max-w-[359px] max-h-[377px] p-6 gap-4 hover:bg-highlight">
      <div>
        <img src="./gift.png" alt="icon" />
      </div>
      <h4 className="text-b1 font-bold">{percentage} Success Rate</h4>
      <span className="text-white/30 text-sm font-medium">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </span>
      <button className="flex items-center p-4 cursor-pointer bg-onHover rounded-full mr-2 font-bold max-w-[121px]">
        Read More
      </button>
    </div>
  );
}
