export default function ClientCards({ name, image }) {
  return (
    <div className="flex flex-col border-2 border-white/20 bg-background rounded-lg p-4 mr-2 gap-4">
      <div>
        <img
          src={image}
          alt="Person"
          className="max-w-[105px] max-h-[102px] rounded-full"
        />
      </div>
      <div>
        <h4 className="text-b1 font-semibold text-lg">{name}</h4>
        <span className="text-b1/70 text-sm">Ceo of Hunt</span>
      </div>
      <span className="text-white/30 text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </span>
    </div>
  );
}
