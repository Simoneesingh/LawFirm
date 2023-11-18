export default function Subscribe() {
  return (
    <div className="flex items-center justify-center bg-background p-24 ">
      <div className=" bg-highlight px-20 py-12 max-w-[1400px]">
        <div className="flex flex-col gap-10">
          <h2 className="text-white font-bold text-5xl text-center ">
            Subscribe Our Newsletter
          </h2>
          <div className="flex flex-row gap-2 items-center justify-center">
            <input
              className="w-[276px]  h-[53px] px-4 italic"
              type="text"
              placeholder="Name:"
            />
            <input
              className="w-[276px] h-[53px] px-4 italic"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="bg-icon w-[116px] h-[53px] px-2 font-bold text-lg">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
