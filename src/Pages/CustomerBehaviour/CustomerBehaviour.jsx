import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase.init"
import { Cohorts } from "./Cohorts"
import { Customers } from "./Customers"
import { Engagement } from "./Engagement"
import { Sales } from "./Sales"
import { useNavigate } from "react-router-dom"
import Loading from "../Authentication/Loading"
import { useState } from "react"

export const CustomerBehaviour = () => {
  const [weeksData,setWeeksData]=useState([])
  const [user,loading] = useAuthState(auth);
    const navigate=useNavigate()
    if(loading) return <Loading></Loading>
    if(!user){
        navigate('/login')
    }
  return (
    <div className="m-5 p-5">
        <div className="flex justify-center shadow-xl rounded-lg mb-5">
            <Customers/>
            <Sales/>
        </div>
        <div className="flex justify-center shadow-xl rounded-lg">
            <Engagement setWeeksData={setWeeksData}/>
            <Cohorts weeksData={weeksData}/>
        </div>
    </div>
  )
}
