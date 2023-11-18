import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Footer() {
  return (
    <div className="bg-footer px-20 py-12">
      <div className="flex flex-row justify-between items-center text-white mb-16">
        <div className="flex flex-row gap-2">
          <img src="./X.png" alt="icon" className="h-8" />
          <h1 className="font-bold text-xl">IGSTUDIO</h1>
        </div>
        <div className="flex flex-row gap-8 max-w-[431px] max-h-[26px]">
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>Attorney</li>
          </ul>
          <ul>
            <li>Practice Area</li>
          </ul>
          <ul>
            <li>About Us</li>
          </ul>
        </div>
        <button className=" flex flex-row text-icon gap-2">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
        </button>
      </div>

      <div className="flex flex-row items-center text-white/30 justify-center gap-8">
        <span>© 2020 Acme. All right reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  );
}
