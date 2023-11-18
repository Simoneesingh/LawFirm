import PictureCard from "./PictureCard";

export default function AreaOfPractice() {
  return (
    <div className=" flex items-center justify-center bg-background p-16 h-[1228px] ">
      <div className="flex flex-col gap-16">
        <h2 className="text-white font-bold text-4xl text-center">
          Area of Practices
        </h2>
        <div className="grid grid-cols-3 gap-4 ">
          <PictureCard span image="./BuisnessLaw.png" title="Buisness Law" />
          <PictureCard image="./Partnership.png" title="Partnership Law" />
          <PictureCard image="./RealEstate.png" title="Real Estate Law" />
          <PictureCard span image="./BuisnessLaw2.png" title="Buisness Law" />
          <PictureCard span image="./LandLord.png" title="LandLord Disputes" />
          <PictureCard image="./Elder.png" title="Elder Abuse" />
        </div>
      </div>
    </div>
  );
}
