import './SecuritySec.css';

const SecuritySec = () => {
  return (
    <div className='masterDiv'>
      <div className='flex items-center gap-10 pb-10'>
      <div ><img style={{"width":"70px","height":"70px"}} src="./Icon-1.png" alt=''/></div>
      <div className='mainHeading'>  Your data is <span className='spanSec'>secure</span> </div>
      </div>
     <div className='flex items-center gap-10'>
     <div><img style={{"width":"70px","height":"70px"}}  src="./Icon-2.png" alt=''/></div>
      <div className='textSec'>Lorem ipsum dolor sit amet, consectetur <div className='mt-6'> adipiscing elit.</div></div>
     </div>
      <div className='flex items-center gap-10'>
        <div><img style={{"width":"70px","height":"70px"}}  src="./Icon-3.png" alt=''/></div>
        <div className='textSec'>
        Ut enim ad minim veniam, quis nostrud <div className='mt-4'> exercitation ullamco laboris nisi
        ut aliquip</div> <div className='mt-4'> ex ea commodo consequat.</div>
      </div>
      </div>
      <div  className='flex items-center gap-10'>
        <div><img style={{"width":"70px","height":"70px"}}  src="./Icon-4.png" alt=''/></div>
        <div className='textSec'>
        Duis aute irure dolor in reprehenderit in <div className='mt-4'> voluptate velit esse cillum
        dolore eu fugiat</div> <div className='mt-4'>nulla pariatur.</div> 
      </div>
      </div>
      <div className='flex items-center gap-10'>
      <div ><img style={{"width":"70px","height":"70px"}}  src="./Icon-5.png" alt=''/></div>
      <div className='textSec'>
        Excepteur sint occaecat cupidatat non <div className='mt-4'>proident, sunt in culpa qui
        officia deserunt</div>  <div className='mt-4'>mollit anim id est laborum</div> 
      </div>
      </div>
    </div>
  );
};

export default SecuritySec;
