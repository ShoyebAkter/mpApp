
import './Integration.css'

export const Integration = () => {
    return (
        <div className="integrationDiv p-10">

            <h1 className="text-5xl font-bold text-white text-center">Integration of <span style={{ "color": "#62cbc6" }}>multiple</span> platform</h1>
            <div className='flex items-center justify-around'>
                <img src='/diagram.png' alt='' />
            </div>
            <div className='text-2xl text-white text-center'>
                <div><span className='font-bold text-white text-2xl'>Seamless integration with your favorite platforms.</span> With EulerMail, you can effortlessly</div>
                <div>integrate your campaigns with multiple platforms. Whether it is social media, email, or</div>
                <div>your website,<span className='font-bold text-white text-2xl'> we make it easy to reach your audience wherever they are</span>.</div>
            </div>
        </div>
    )
}
