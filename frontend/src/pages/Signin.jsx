import { useState } from "react";
import { BottomWarning } from "../component/Bottomwarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/Inputbox";
import { SubHeading } from "../component/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    // Validate inputs
    if (!username || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/auth/signin`,
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
        navigate("/Transactions");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("User not found");
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#181C23] flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-gray-600 w-80 text-center p-6 shadow-lg">
          <Heading label={"Signin"} className="text-white" />
          <SubHeading
            label={"Please fill the information correctly"}
            className="text-[#A3AED0]"
          />
          <InputBox
            label={"Username"}
            onChange={(e) => setusername(e.target.value)}
            placeholder={"jos@gmail.com"}
            className="mb-4 bg-[#232733] text-white border border-[#353B48] focus:border-green-500"
            inputClassName="bg-[#232733] text-white"
            labelClassName="text-[#A3AED0]"
          />
          <InputBox 
            label={"Password"}
            onChange={(e) => setpassword(e.target.value)}
            placeholder={"********"}
            type="password"
            className="mb-4 bg-gray-400 text-white border border-[#353B48] focus:border-green-500"
            inputClassName="bg-[#232733] text-white"
            labelClassName="text-[#A3AED0]"
          />
          <Button
            label={"Signin"}
            onClick={handleSignin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mb-4"
          />
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Signup"}
            to={"/signup"}
            className="text-[#A3AED0]"
            buttonClassName="text-green-400 hover:underline"
          />
        </div>
      </div>
    </div>
  );
};