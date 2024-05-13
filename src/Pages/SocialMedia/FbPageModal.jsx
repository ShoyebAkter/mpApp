import { useState } from 'react'
import {  getFacebookPageId, getFacebookPages, getFbPageToken, getPageImpression, getPageLikes, getPageTotalFollowers, getPageTotalPost} from './facebook';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { setFbFollowers,setFbPageImpression,setFbPageLikes,setTotalFbPost } from '../../features/counter/counterSlice';
const FbPageModal = () => {
    
    const [pages, setPages] = useState([])
    const [selectedIndex, setIndex] = useState(null)
    const fbAccessToken=useSelector((state)=>state.counter.fbAccessToken);
    const dispatch=useDispatch()
    const getPages = async () => {
        // console.log(facebookUserAccessToken);
        const facebookPage = await getFacebookPages(fbAccessToken);
        setPages(facebookPage)
    }
    const getPageData=async(index)=>{
        setIndex(index);
        localStorage.setItem("index",index)
        const facebookPageId = await getFacebookPageId(fbAccessToken,index);
        const facebookPageToken = await getFbPageToken(fbAccessToken,index);
        const facebookPageFollowers = await getPageTotalFollowers(facebookPageId,facebookPageToken);
        const fbPageTotalPost= await getPageTotalPost(facebookPageId,facebookPageToken)
        const fbPageImpression =await getPageImpression(facebookPageId,facebookPageToken)
        const fbPageLikes =await getPageLikes(facebookPageId,facebookPageToken)
        // console.log(fbPageLikes)
        dispatch(setFbFollowers(facebookPageFollowers))
        dispatch(setTotalFbPost(fbPageTotalPost.length))
        dispatch(setFbPageImpression(fbPageImpression))
        dispatch(setFbPageLikes(fbPageLikes))
    }
    // console.log(fbFollowers)
  return (
    <main id="app-main" >
            
            <section >
                {
                    (pages.length === 0) ? (
                        <section className="flex justify-center items-center">
                            {
                                fbAccessToken ?
                                    <button className='p-2 bg-green-200' onClick={getPages}>Get Your Page</button>
                                    :
                                    null
                            }
                        </section>
                    ) :
                        (
                            <section>

                                {
                                    fbAccessToken ?
                                        <div>
                                            <h1 className="text-xl font-semibold ">Select your Page</h1>
                                            {pages.map((page, index) => (
                                                <div
                                                    className={`${index === selectedIndex ? 'bg-black text-white' : 'bg-slate-200 text-black'
                                                        } p-2 mb-1 cursor-pointer border-solid  border-2 border-slate-800`}
                                                    onClick={()=>getPageData(index)}
                                                    key={index}
                                                >
                                                    {page.name}
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        null
                                }
                            </section>
                        )
                }
                
            </section>
        </main>
  )
}

export default FbPageModal
FbPageModal.propTypes = {
    facebookUserAccessToken:PropTypes.string.isRequired,

  }