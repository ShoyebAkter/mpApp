import { GoogleAnalytics } from './GoogleAnalytics'
import { Instagram } from './Instagram'
import './Integration.css'
import { Sms } from './Sms'
import { Whatsapp } from './Whatsapp'
import { Woocommerce } from './Woocommerce'
import { Wordpress } from './Wordpress'

export const Integration = () => {
    return (
        <div className="integrationDiv ">

            <h1 className="integrationHeading ">Integration of <span style={{ "color": "#62cbc6" }}>multiple</span> platforms</h1>
            <div className='flex items-center justify-center'>
                <div className='leftIntegration '>
                    <Wordpress />
                    <Whatsapp />
                    <GoogleAnalytics />
                </div>
                <div className='integratiobImage'>
                    <img  src='/logo.png' />
                </div>
                <div className='flex flex-col justify-center rightSection'>
                    <Woocommerce />
                    <Instagram />
                    <Sms />
                </div>
            </div>
            <div className='integrationPara '>
                <div><span className='font-bold '>Seamless integration with your favorite platforms.</span> With EulerMail, you can effortlessly</div>
                <div>integrate your campaigns with multiple platforms. Whether it is social media, email, or</div>
                <div>your website,<span className='font-bold'> we make it easy to reach your audience wherever they are</span>.</div>
            </div>
        </div>
    )
}
