import { Fade } from 'react-awesome-reveal'
import './Introduction.css'
export const Introduction = () => {
    return (
        <Fade damping={0.4}>
            <div className='h-screen'>
                <div className="flex justify-around  items-center">
                    <div className='pt-24'>
                        <div className="text-lime-600 text-5xl font-medium ">Analytics for business</div>
                        <div className="text-cyan-500 text-5xl font-medium py-3">Growth by design</div>
                        <div className="text-slate-500 text-xl font-medium">Get more than just numbers.</div>
                        <div className="text-slate-500 text-xl font-medium">Discover insights that</div>
                        <div className="text-slate-500 text-xl font-medium">drive real growth.</div>
                        <div className="text-slate-500 text-xl font-medium pt-12">Data-driven growth starts here</div>
                    </div>
                    <div className="circle">
                        <img src="/logo.png" alt="Image" className="center-image" />
                    </div>
                    <div className="image-container ">
                        <img src="/Capture.PNG" alt="Image 1" className="bottom-image" />
                        <img src="/Capture2.PNG" alt="Image 2" className="top-image" />
                        <img src="Capture3.PNG" alt="Image 3" className="third-image" />
                    </div>
                </div>

            </div>
        </Fade>
    )
}
