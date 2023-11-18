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
    <div className="flex flex-col items-center justify-center bg-background p-20 gap-20">
      <h2 className="text-white font-bold text-4xl text-center">Our Team</h2>
      <div className="grid grid-cols-3 gap-12">
        {names.map((name, index) => (
          <TeamCard key={name} name={name} image={images[index]} />
        ))}
      </div>
    </div>
  );
}
