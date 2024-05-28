import { useState } from 'react'
import {  getFacebookPageId, getFacebookPages, getFbPageToken, } from './facebook';

import { useDispatch, useSelector } from 'react-redux';
import { getInstagramAccount, getInstagramImpression, getInstagramMedia, getInstagramMediaInsight, getInstagramTotalMedia } from '../Settings/instagram';
import { setInstaFollowers, setInstaImpression, setInstaMediaComment, setInstaMediaLikes, setInstaTotalPost } from '../../features/counter/counterSlice';

const InstaModal = () => {

    
    const [pages, setPages] = useState([])
    const [selectedIndex, setIndex] = useState(null)
    const instaAccessToken=useSelector((state)=>state.counter.instaAccessToken);
    const dispatch=useDispatch()
    const getPages = async () => {
        // console.log(facebookUserAccessToken);
        const facebookPage = await getFacebookPages(instaAccessToken);
        setPages(facebookPage)
    }
    const getPageData=async(index)=>{
        setIndex(index);
        const facebookPageId = await getFacebookPageId(instaAccessToken,index);
        const facebookPageToken = await getFbPageToken(instaAccessToken,index);
        const instaId=await getInstagramAccount(facebookPageId,facebookPageToken)
        const totalInstaMedia=await getInstagramMedia(instaId,facebookPageToken)
        const totalInstaImpression=await getInstagramImpression(instaId,facebookPageToken)
        const totalInstaIMediaId=await getInstagramTotalMedia(instaId,facebookPageToken)
        const totalInstaIMediaInsight=await getInstagramMediaInsight(totalInstaIMediaId.data[0].id,facebookPageToken)
        dispatch(setInstaFollowers(totalInstaMedia.followers_count))
        dispatch(setInstaTotalPost(totalInstaIMediaId.data.length))
        dispatch(setInstaImpression(totalInstaImpression.data[0].values[1].value))
        dispatch(setInstaMediaLikes(totalInstaIMediaInsight.like_count))
        dispatch(setInstaMediaComment(totalInstaIMediaInsight.comments_count))
        console.log(totalInstaMedia)
        console.log(totalInstaImpression)
        console.log(totalInstaIMediaId)
        console.log(totalInstaIMediaInsight)
    }
  return (
    <main id="app-main" >
            
            <section >
                {
                    (pages.length === 0) ? (
                        <section className="flex justify-center items-center">
                            {
                                instaAccessToken ?
                                    <button className='p-2 bg-green-200' onClick={getPages}>Get Your Page</button>
                                    :
                                    null
                            }
                        </section>
                    ) :
                        (
                            <section>

                                {
                                    instaAccessToken ?
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

export default InstaModal
