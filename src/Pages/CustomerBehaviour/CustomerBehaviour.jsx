import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase.init"
import { Cohorts } from "./Cohorts"
import { Customers } from "./Customers"
import { Engagement } from "./Engagement"
import { Sales } from "./Sales"
import { useNavigate } from "react-router-dom"
import Loading from "../Authentication/Loading"
import { useState } from "react"
import { CiUser } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";

export const CustomerBehaviour = () => {
  const [weeksData, setWeeksData] = useState([])
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  if (loading) return <Loading></Loading>
  if (!user) {
    navigate('/login')
  }
  return (
    <div className="flex justify-between">
      <div style={{ "background": "#439541" }} className="px-3 pt-10">
        <div style={{ "color": "#f8f8f8", "cursor": "pointer" }} className="flex flex-col justify-center items-center mb-5"> <CiUser /> Sales</div>
        <div style={{ "color": "#f8f8f8", "cursor": "pointer" }} className="flex flex-col justify-center items-center"><LuUsers/> Site data</div>
      </div>
      <div className="mx-auto mt-3 py-2">
        <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex justify-around rounded-2xl mb-5 p-5">
          <Customers />
          <Sales />
        </div>
        <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} className="flex justify-around rounded-2xl mb-5 p-5">
          <Engagement setWeeksData={setWeeksData} />
          <Cohorts weeksData={weeksData} />
        </div>
      </div>
    </div>
  )
}
