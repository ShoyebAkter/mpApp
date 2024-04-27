import { Link } from "react-router-dom"

export const SocialMedia = () => {
  
  return (
    <div className="">
      
      <div
        className="fixed h-full w-[200px] text-center bg-gray-900 pt-32"
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Euler Mail</h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
             
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <Link to="/socialmedia/facebook"><span className="text-[15px] ml-4 text-gray-200 font-bold">Facebook</span></Link>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold"><Link to="/socialmedia/instagram">Instagram</Link></span>
        </div>
        
      </div>
      
    </div>
  )
}
