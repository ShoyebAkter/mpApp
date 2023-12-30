import { GoogleAnalytics } from './GoogleAnalytics'
import { Instagram } from './Instagram'
import './Integration.css'
import { Sms } from './Sms'
import { Whatsapp } from './Whatsapp'
import { Woocommerce } from './Woocommerce'
import { Wordpress } from './Wordpress'

export const Integration = () => {
    return (
        <div className="integrationDiv p-10">
            
            <h1 className="text-5xl font-bold text-white text-center">Integration of <span style={{"color":"#62cbc6"}}>multiple</span> platform</h1>
            <div className='flex items-center justify-around'>
                <div>
                    <Wordpress />
                    <Whatsapp />
                    <GoogleAnalytics />
                </div>
                <div style={{ "paddingBottom": "100px" }}>
                    <img className='h-72' src='logo.png' />
                </div>
                <div>
                    <Woocommerce />
                    <Instagram />
                    <Sms />
                </div>
            </div>
            <div className='text-2xl text-white text-center'><span className='font-bold text-white text-2xl'>Seamless integration with your favorite platforms.</span> With EulerMail, you can effortlessly
                integrate your campaigns with multiple platforms. Whether it is social media, email, or
                your website,<span className='font-bold text-white text-2xl'> we make it easy to reach your audience wherever they are</span>.</div>
        </div>
    )
}
