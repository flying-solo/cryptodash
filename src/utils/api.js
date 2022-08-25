import axios from "axios";
import {toast} from "react-toastify";

export const handleLogin = async (loginurl,logindata) =>{
    try{
        const res = await axios.post(loginurl,logindata);
        if(res.status===200){
          handleSuccess("User Logged in Successfully !");
          return true;
        }
    }catch(err){
        handleError(err.response.data);
        return false;
    }
};

export const handleSignup = async (signupurl,signupdata)=>{
  try{
    const res = await axios.post(signupurl,signupdata);
    if(res.status===201){
      handleSuccess(res.data);
      return true;
    }
  }catch(err){
    handleError(err.response.data);
    return false;
  }
}

const handleError = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }