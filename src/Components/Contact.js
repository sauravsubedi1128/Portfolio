import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

function Contact() {
  return (
    <div className="text-white mt-24 px-2">
      <h1 className="font-bold">Contact</h1>
      <p className="bg-white h-[2px] w-[95%]"></p>
      <div className="px-2 mt-4 flex justify-start items-center gap-1">
        <div className="bg-slate-800 p-2 rounded-full">
          <FiPhoneCall size={22} />
        </div>
        <div>
          <strong>Phone</strong> <br />
          <div className="text-xs">9862458844</div>
        </div>
      </div>
      <div className="px-2 mt-4 flex justify-start items-center gap-1">
        <div className="bg-slate-800 p-2 rounded-full">
          <AiOutlineMail size={22} />
        </div>
        <div>
          <strong>Email</strong> <br />
          <div className="text-xs">saurav_subedi@gmail.com</div>
        </div>
      </div>
      <div className="px-2 mt-4 flex justify-start items-center gap-1">
        <div className="bg-slate-800 p-2 rounded-full">
          <AiOutlineHome size={22} />
        </div>
        <div>
          <strong className="capitalize">address</strong> <br />
          <p className="text-xs">Syuchatar, Kathmandu</p>
        </div>
      </div>
      <div className="px-2 mt-4 flex justify-start items-center gap-1">
        <div className="bg-slate-800 p-2 rounded-full">
          <AiOutlineHome size={22} />
        </div>
        <div>
          <strong>Linkedin</strong> <br />
          <div className="text-xs">
            https://www.linkedin.com/in/saurav-subedi-56b616284/
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
