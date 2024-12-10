import React, { useState } from 'react';
import {Close} from '@material-ui/icons'

const Annoucne = () => {
  const [announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] w-auto font-bold text-white flex items-center justify-center');
  const handleClose = ()=>{
    setAnnounceStyle(announceStyle + " hidden")
  }
 
  return <div className={announceStyle}>
     <h2> Hurry up 50% off Sale!</h2>
     <Close className='cursor-pointer' onClick={handleClose}/>
  </div>;
};

export default Annoucne;
