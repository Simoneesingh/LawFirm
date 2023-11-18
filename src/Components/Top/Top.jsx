import HomeBanner from "./HomeBanner";
import NavBar from "./NavBar";

export default function Top() {
  return (
    <div className=" px-32 py-4 bg-black h-screen overflow-hidden">
      <NavBar />
      <HomeBanner />
    </div>
  );
}
