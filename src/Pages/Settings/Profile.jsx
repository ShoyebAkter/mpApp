import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Profile = () => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [address,setAddress]=useState("")
    const [companyName,setCompanyName]=useState("")
    const [imgUrl,setImageUrl]=useState("")
    const [data,setData]=useState([]);
    const [active,setActive]=useState(false)
    const [user]=useAuthState(auth)
    useEffect(()=>{
        callApi("https://emapp-backend.vercel.app/subscription/database",setData)
    },[])
    const foundObject = data.find(obj => obj.email === user.email);
    const editClicked=()=>{
      setActive(true)
if(foundObject){
      setFirstName(foundObject.firstName)
      setLastName(foundObject.lastName)
      setAddress(foundObject.address)
      setCompanyName(foundObject.companyName)
    }
    }
    
    // console.log(foundObject)
    const onSubmit=async(event)=>{
        const image = event.target.files[0];
        // console.log(event.target.files[0])
    const formData = new FormData();
        formData.append('image', image);
    const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                const img = result.data.url;
                setImageUrl(img)
                // console.log(img)
            }
        })
    }
    const update=async()=>{
        try {
            const newData={
                email:foundObject.email,
                firstName:firstName,
                lastName:lastName,
                connection:foundObject.connection,
                companyName:companyName,
                address:address,
                date:foundObject.date,
                photoUrl:imgUrl
            }
            if(firstName && lastName && companyName && address && imgUrl){
              const response = await fetch(`https://emapp-backend.vercel.app/subscription/database/${foundObject._id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newData)
            });
        
            if (!response.ok) {
              const errorMessage = await response.json();
              throw new Error(errorMessage.error || 'Failed to update data');
            }
        
            const updatedData = await response.json();
            if(updatedData){
              window.location.reload();
            }
            setActive(false)
            }
            
            // console.log(updatedData.message); // Success message
          } catch (error) {
            console.error('Error updating data:', error.message);
          }
    }
  return (
    <div style={{ width: "70%" }}>
      <div className="profileDiv">
        <div>Edit Profile</div>
        <hr className="customHr mb-10"></hr>
        <div className="flex flex-col gap-3 mb-3">
          <label>First Name*:</label>
          <input
            name="firstName"
            type="text"
            value={active ? firstName : foundObject?.firstName}
            required
            readOnly={!active}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label>Last Name*:</label>
          <input
            name="lastName"
            type="text"
            required
            value={active ? lastName :foundObject?.lastName}
            readOnly={!active}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label>Email*:</label>
          <input
            name="email"
            type="email"
            required
            value={foundObject?.email}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label>Address*:</label>
          <input
            name="address"
            type="text"
            required
            value={active ? address :foundObject?.address}
            readOnly={!active}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label>Company Name*:</label>
          <input
            name="company"
            type="text"
            required
            value={active ? companyName :foundObject?.companyName}
            readOnly={!active}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label>Connection*:</label>
          <input
            name="connection"
            type="text"
            required
            value={foundObject?.connection}
            readOnly
          />
        </div>
        {
            active &&
            <div>
        <label className="pr-2">Upload Profile Pic</label>
        <input onChange={onSubmit} type="file" name="" className="py-3 px-5 bg-gray-200 rounded-full "/>
        </div>
        }
        {!active && <div className="bg-gray-200 p-2 w-1/6 text-center mx-auto rounded-lg cursor-pointer" onClick={editClicked}>Edit Information</div>}
        {
            active &&
            <div className="flex justify-between">
            <div className="bg-gray-200 p-2 cursor-pointer" onClick={update}>Save</div>
            <div className="bg-gray-200 p-2 cursor-pointer" onClick={()=>setActive(false)}>Cancel</div>
        </div>
        }
      </div>
    </div>
  );
};

export default Profile;
