import TeamCard from "./TeamCard";

export default function OurTeam() {
  const names = [
    "Danial Def",
    "Sanfole",
    "Cesforila",
    "Colleen",
    "Haldone",
    "Nik Joe",
  ];
  const images = [
    "./Danial.png",
    "./Sanfole.png",
    "./Cesforila.png",
    "./Colleen.png",
    "./Haldone.png",
    "./Nik.png",
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-around bg-background p-24  gap-20">
        <h2 className="text-white font-medium text-4xl text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-3 gap-16 ">
          {names.map((name, index) => (
            <TeamCard key={name} name={name} image={images[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}
