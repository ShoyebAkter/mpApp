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
      <div className='textSec'>At EulerMail, your business`s data is not just another number<div className='mt-6'> We understand its value and go
the extra mile to keep it secure.</div></div>
     </div>
      <div className='flex items-center gap-10'>
        <div><img style={{"width":"70px","height":"70px"}}  src="./Icon-3.png" alt=''/></div>
        <div className='textSec'>
        Using state-of-the-art servers and advanced security tools,<div className='mt-4'> we ensure your information is
guarded like a treasure</div> 
      </div>
      </div>
      <div  className='flex  items-center gap-6 md:gap-8 lg:gap-10'>
        <div><img style={{"width":"70px","height":"70px"}}  src="./Icon-4.png" alt=''/></div>
        <div className='textSec'>Our commitment to data protection<div className='mt-4'> means you can focus on what you do best, </div> <div className='mt-4'>leaving the
worry of data safety to us</div> 
      </div>
      </div>
      <div className='flex items-center gap-10'>
      <div ><img style={{"width":"70px","height":"70px"}}  src="./Icon-5.png" alt=''/></div>
      <div className='textSec'>
      Your data's security and privacy are our top priorities
      </div>
      </div>
    </div>
  );
};

export default SecuritySec;
