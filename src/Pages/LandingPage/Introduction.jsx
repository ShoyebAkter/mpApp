import { Fade, Slide } from 'react-awesome-reveal'
import './Introduction.css'
export const Introduction = () => {
    return (
        <Fade damping={1}>
            <div>
                
                <div className="flex justify-around items-center">
                    <div className='pt-24'>
                        <div style={{"color":"#649445",}} className="firstLine">Analytics for business</div>
                        <div style={{"color":"#62cbc6"}}  className=" text-5xl font-semibold py-8">Growth by design</div>
                        <div style={{"color":"#6b6b6b"}}  className="text-2xl font-medium">Get more than just numbers.</div>
                        <div style={{"color":"#6b6b6b"}}  className="text-2xl font-medium">Discover insights that</div>
                        <div style={{"color":"#6b6b6b"}}  className="text-2xl font-medium">drive real growth.</div>
                        <div style={{"color":"#6b6b6b"}}  className="text-2xl font-medium pt-12">Data-driven growth starts here</div>
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
