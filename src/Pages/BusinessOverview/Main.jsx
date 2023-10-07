import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { BottomChart } from "./BottomChart"
import { MiddleChart } from "./MiddleChart"
import { TopChart } from "./TopChart"
import { useNavigate } from "react-router-dom";
import Loading from "../Authentication/Loading";


export const Main = () => {
  const [user,loading] = useAuthState(auth);
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
  return (
    <div className="mx-5">
        <TopChart/>
        <MiddleChart/>
        <div style={{"height":"50vh"}} className="my-10">
          <h1 className="text-center text-3xl text-green-600 py-5">Users in Each Country</h1>
          <BottomChart/>
        </div>
    </div>
  )
}
