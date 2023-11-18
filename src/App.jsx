import AreaOfPractice from "./Components/Practices/AreaOfPractice";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer";
import Introduction from "./Components/Introduction/Introduction";
import Subscribe from "./Components/Subscribe";
import Top from "./Components/Top/Top";
import WhyChooseUs from "./Components/Introduction/WhyChooseUs";
import OurTeam from "./Components/Team/OurTeam";
import Clients from "./Components/HappyClients/Clients";

export default function App() {
  return (
    <div className="h-screen bg-background">
      <Top />
      <Introduction />
      <WhyChooseUs />
      <AreaOfPractice />
      <Clients />
      <OurTeam />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
}
