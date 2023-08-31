import React, { useState } from "react";
import Add from "../img/icon-jpg-12.jpg";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    const defaultAvatarUrl = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(()=>{
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL || defaultAvatarUrl,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr("Error uploading file");
            setLoading(false)
          }
        });
      });

    } catch (err) {
      setErr("Registration failed. Please try again");
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Our Chat</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="displayName"
            placeholder="Enter your full name"
          />
          <input type="email" name="email" placeholder="Enter your Email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <input type="file" name="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an image</span>
          </label>
          <button type="submit">Sign up</button>
          {err && <span className="error">{err}</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
