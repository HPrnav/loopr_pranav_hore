import { Heading } from "../component/Heading";
import { Button } from "../component/Button";
import { InputBox } from "../component/Inputbox";
import { BottomWarning } from "../component/Bottomwarning";
import { SubHeading } from "../component/Subheading";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="min-h-screen   bg-[#181C23] flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg  bg-[#232733] w-80 text-center p-6 shadow-lg">
          <Heading label={"Signup"} className="text-white" />
          <SubHeading
            label={"Enter your information to create an account"}
            className="text-[#A3AED0]"
          />
          <InputBox
            onChange={(e) => setfirstname(e.target.value)}
            label={"First Name"}
            placeholder={"John"}
            className="mb-4 text-white"
            inputClassName="bg-[#232733] text-white placeholder-white"
            labelClassName="text-[#A3AED0] placeholder-white"
          />
          <InputBox
            onChange={(e) => setlastname(e.target.value)}
            label={"Last Name"}
            placeholder={"David"}
            className="mb-4"
            inputClassName="bg-[#232733] text-white "
            labelClassName="text-[#A3AED0]"
          />
          <InputBox
            onChange={(e) => setusername(e.target.value)}
            label={"Email"}
            placeholder={"john@gmail.com"}
            className="mb-4"
            inputClassName="bg-[#232733] text-white "
            labelClassName="text-[#A3AED0]"
          />
          <InputBox
            onChange={(e) => setpassword(e.target.value)}
            label={"Password"}
            placeholder={"********"}
            type="password"
            className="mb-4 "
            inputClassName="bg-[#232733]  text-white  "
            labelClassName="text-[#A3AED0]"
          />
          <Button
            label={"Signup"}
            onClick={async () => {
              const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/api/auth/signup`, {
                firstname,
                lastname,
                username,
                password,
              });
              localStorage.setItem("token", response.data.token);
              navigate("/Transactions");
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mb-4"
          />
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Signin"}
            to={"/signin"}
            className="text-[#A3AED0]"
            buttonClassName="text-green-400 hover:underline"
          />
        </div>
      </div>
    </div>
  );
};

