export default function TeamCard({ name, number, image }) {
  return (
    <div className="flex items-center bg-background hover:bg-onHover hover:text-black rounded-lg mr-12 px-4 py-2 gap-2 w-[344px] h-[109px] ">
      <img
        src={image}
        alt="Person"
        className="max-w-[68px] max-h-[68px] rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-lg text-b1">{name}</h4>
        <span className="text-sm text-b1/30">{number} Cases</span>
      </div>
    </div>
  );
}
