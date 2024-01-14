import { Fade, Slide } from 'react-awesome-reveal'
import './Introduction.css'
export const Introduction = () => {
    return (
        <Fade damping={1}>
            <div>
                
                <div className="IntroSec">
                    <div className='pt-24'>
                        <div style={{"color":"#649445",}} className="firstLine">Analytics for business</div>
                        <div  className="secondLine ">
                            Growth by design
                             <div className="arrow ms-2"></div>
                             <div className="arrow ms-2"></div>
                             <div className="arrow ms-2"></div>
                             </div>
                        <div  className="thirdLine">Get more than just numbers.</div>
                        <div className="thirdLine">Discover insights that</div>
                        <div className="thirdLine">drive real growth.</div>
                        <div  className="sixthLine">Data-driven growth starts here <div className="arrow ms-5"></div></div>
                        
                    </div>

                    <Slide >
                        <div className="image-container ">
                            <Slide direction='right'>
                                <div >
                                    <img src="/bottom.png" alt="Image 1" className="bottom-image" />
                                </div>
                            </Slide>
                            <div>
                                <img src="/center_img.png " alt="Image 2" className="top-image" />
                                <div className="circle">
                                    <img  src="/logo.png" alt="Image" className="center-image" />
                                </div>
                            </div>
                            <div>
                                <img src="/top.png" alt="Image 3" className="third-image" />
                            </div>
                        </div>
                    </Slide>
                </div>

            </div>
            <div className='flex justify-center my-5'>
                <img src='develop.png' alt=''/>
            </div>
        </Fade>
    )
}
