import React from "react";
import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazaarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Logged in Successfully!");
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
        // console.log("User", user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errprMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        toast.error(error, "Error while logging in");
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        {!userInfo ? (
          <div
            onClick={handleGoogleLogin}
            className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex flex-row items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'
          >
            <FcGoogle className='text-[32px]' />
            <span className='text-sm text-gray-900'>Sign in with Google</span>
          </div>
        ) : (
          <button
            onClick={handleSignOut}
            className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'
          >
            Sign Out
          </button>
        )}
      </div>
      {/* <div className='w-full flex items-center justify-center gap-10'>
        <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex flex-row items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
          <FaGithub className='text-[32px]' />
          <span className='text-sm text-gray-900'>Sign in with Github</span>
        </div>
        <button
          onClick={handleSignOut}
          className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'
        >
          Sign Out
        </button>
      </div> */}
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default Login;
