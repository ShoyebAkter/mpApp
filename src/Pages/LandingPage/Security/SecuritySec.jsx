import './SecuritySec.css';
import { IoLockClosedOutline } from "react-icons/io5";
import { BsDatabaseFillLock } from "react-icons/bs";
import { GrDocumentLocked } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";

const SecuritySec = () => {
  return (
    <div className='masterDiv'>
      <div className='flex items-center gap-10'>
      <div className='clockStyle'><IoLockClosedOutline size={40}/></div>
      <div className='mainHeading'>  Your data is <span className='spanSec'>secure</span> </div>
      </div>
     <div className='flex items-center gap-10'>
     <div><BsDatabaseFillLock  size={40}/></div>
      <div className='textSec'>Lorem ipsum dolor sit amet, consectetur <div className='mt-6'> adipiscing elit.</div></div>
     </div>
      <div className='flex items-center gap-10'>
        <div><HiClipboardDocumentList size={40}/></div>
        <div className='textSec'>
        Ut enim ad minim veniam, quis nostrud <div className='mt-4'> exercitation ullamco laboris nisi
        ut aliquip</div> <div className='mt-4'> ex ea commodo consequat.</div>
      </div>
      </div>
      <div  className='flex items-center gap-10'>
        <div> <MdOutlineSecurity size={40}/></div>
        <div className='textSec'>
        Duis aute irure dolor in reprehenderit in <div className='mt-4'> voluptate velit esse cillum
        dolore eu fugiat</div> <div className='mt-4'>nulla pariatur.</div> 
      </div>
      </div>
      <div className='flex items-center gap-10'>
      <div ><GrDocumentLocked size={40}/></div>
      <div className='textSec'>
        Excepteur sint occaecat cupidatat non <div className='mt-4'>proident, sunt in culpa qui
        officia deserunt</div>  <div className='mt-4'>mollit anim id est laborum</div> 
      </div>
      </div>
    </div>
  );
};

export default SecuritySec;
