import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined,  Pinterest, Twitter } from "@material-ui/icons";
import React from "react";

const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  return (

    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start bg-gray-700 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px] text-white">DenimDaze</h1>
        <p className="text-slate-400">
        Wear it with style and confidence Making your fashion statement extra special With <br/>The spirit of denimDaze
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <Pinterest/>
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
            <LocationOnOutlined className="text-white"/>
            <p className='pl-3 text-white'>YourTown</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneOutlined className="text-white"/>
            <p className='pl-3 text-white'>+91 12345678</p>
        </div>
        <div className="flex m-3">
            <EmailOutlined className="text-white"/>
            <p className='pl-3 text-white'>DenimDaze@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
