import { Fade, Slide } from 'react-awesome-reveal'
import './Introduction.css'
export const Introduction = () => {
    return (
        <Fade damping={1}>
            <div className='background'>
                <div className="flex justify-around  items-center">
                    <div className='pt-24'>
                        <div className="text-lime-600 text-5xl font-medium ">Analytics for business</div>
                        <div className="text-cyan-500 text-5xl font-medium py-3">Growth by design</div>
                        <div className="text-slate-500 text-xl font-medium">Get more than just numbers.</div>
                        <div className="text-slate-500 text-xl font-medium">Discover insights that</div>
                        <div className="text-slate-500 text-xl font-medium">drive real growth.</div>
                        <div className="text-slate-500 text-xl font-medium pt-12">Data-driven growth starts here</div>
                    </div>

                    <Slide>
                        <div className="image-container ">
                            <div>
                                <img src="/bottom.png" alt="Image 1" className="bottom-image" />
                            </div>
                            <div>
                                <img src="/center_img.png " alt="Image 2" className="top-image" />
                                <div className="circle">
                                    <img src="/logo.png" alt="Image" className="center-image" />
                                </div>
                            </div>
                            <div>
                                <img src="/top.png" alt="Image 3" className="third-image" />
                            </div>
                        </div>
                    </Slide>
                </div>

            </div>
        </Fade>
    )
}
