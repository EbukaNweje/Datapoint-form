import React, { useState} from 'react'
import "./DpForm.css"
import "./Mobile.css"
import Logo from "../img/logo.png"
import imgAvatar from "../img/avatar.png"
import HCJ from "../img/HCJ.jpg"
import Nodejs from "../img/nodejs.png"
import Reactimg from "../img/react-icon-29.jpg"
import { app } from "../base"
import { useHistory } from "react-router-dom";
import firebase from "firebase";


const DpForm = () => {
     const [avatar, setAvatar] = useState("");
     const [percent, setPercent] = useState(0.00001);
     const [fullname, setFullname] = useState("")
     const [address, setAddress] = useState("")
     const [phonenumber, setPhonenumber] = useState("")
     const [education, setEducation] = useState("")
     const [email, setEmail] = useState("")
     const [course, setCourse] = useState("")
     const [image, setImage] = useState(imgAvatar);

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        setImage(save);


     const fileRef = await app.storage().ref();
     const storeRef = fileRef.child("avatar/" + file.name).put(file);

    storeRef.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storeRef.snapshot.ref.getDownloadURL().then((URL) => {
          setAvatar(URL);
          console.log(URL);
        });
      }
    );
    }

    const handleSubmit = async(e) => {
         e.preventDefault();

       await app.firestore().collection('datapoint').add({
          fullname,
          address,
          phonenumber,
          education,
          email,
          course,
          avatar,
     })
     .then(() => {
          alert("Your Form Submitted 👍")
     })

     .catch((error) =>{
          alert(error.message)
     });

     setFullname(" ")
     setAddress(" ")
     setPhonenumber(" ")
     setEducation(" ")
     setEmail(" ")
     setCourse(" ")
     setAvatar(" ")
         
    }

    return (
        <form class="Container" onSubmit={handleSubmit}>
            <div class="Wrapper">
                <div class="Logo"><img src={Logo}/></div>
                <h5>PLEASE FILL FIELD ACCURATELY</h5>
                <form class="FormContainer">
                   <div class="ProfilePic">
                        <div class="ProfileImage"><img src={image}/></div>
                        <label htmlFor="pix" class="fileLabel"
                        value={avatar}
                        onChange={(e) => setFullname(e.target.value)}
                        >Upload Photo</label>
                <input
                class="uploadInput"
                  placeholder=""
                  type="file"
                  id="pix"
                  onChange={uploadImage}
                />
                   </div>

                   <div class="InputForm">
                        <label>Full Name:</label>
                        <input 
                        type="text" 
                        placeholder="Enter your full name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        />
                   </div>
                   <div class="InputForm">
                        <label>Address:</label>
                        <input 
                        type="text" 
                        placeholder="Enter your Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                   </div>
                   <div class="InputForm">
                        <label>Phone Number:</label>
                        <input 
                        type="text" 
                        placeholder="Enter your Phone Number"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        />
                   </div>
                   <div class="InputForm">
                        <label>Education:</label>
                        <input 
                        type="text" 
                        placeholder="Enter your Education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        />
                   </div>
                   <div class="InputForm">
                        <label>Email:</label>
                        <input 
                        type="Email" 
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                   </div>
                   <div class="InputForm">
                        <label>Course:</label>
                        <select 
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        >
                            <option>Choose your Course</option>

                            <option>Bcs</option>
                            <option>CCTV and Solar</option>
                            <option>Software Development</option>
                            <option>Mobile Phone Repairs</option>
                            <option>PAbX Services and Maintenance</option>
                        </select>
                   </div>

                   <div class="slidImg">
                        <img src={HCJ} style={{
                            "width": " 100px",
                            "height":"50px",
                            "marginLeft": "-20px"
                        }}/>    
                        <img src={Nodejs}/>    
                        <img src={Reactimg}/>    
                   </div>

                   <button type="submit" class="btn" 
                   onClick={handleSubmit}
                   >Sumbit</button>
                </form >
            </div>
        </form>
    )
}

export default DpForm
