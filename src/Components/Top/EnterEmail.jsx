import EmailIcon from "@mui/icons-material/Email";

export default function EnterEmail() {
  return (
    <div className="relative flex items-center w-[438px] gap-4 px-6 bg-highlight rounded-full h-[74px]">
      <EmailIcon className="text-gray-500" />
      <input
        placeholder="Enter your email address"
        className="bg-highlight outline-none"
      />
      <button className="absolute right-0 flex items-center p-4 cursor-pointer bg-onHover rounded-full mr-2 font-bold ">
        Let's Talk
      </button>
    </div>
  );
}
