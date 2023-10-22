import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Typical from "react-typical";
import { useForm } from "react-hook-form";

// assets ussed
import Ulogo from "../asset/Ulogo.png";
import Usericon from "../asset/Usericon.png";
import mail from "../asset/mail.png";
import call from "../asset/call.png";
import padlock from "../asset/padlock.png";
import { Link } from "react-router-dom";

// const colo = {
// 	primary: "#060606",
// 	backgroud: "#E0E0E0",
// 	disabled: "#090909",
// };

export default function Login() {
	const [isMobleScreen, setIsMobileScreen] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const toggleSignUp = () => {
		setIsMobileScreen((prev) => !prev);
	};

	return (
		<div className=" flex flex-col bg-cover bg-center items-cneter justify-center w-screen h-full md:flex-row m-0">
			<div
				className={` ${
					!isMobleScreen && "hidden"
				} relative h-[100vh] justify-between items-center container1 w-screen bg-im md:flex overflow-hidden`}
			>
				<div className="flex flex-col my-auto items-center  justify-between m-auto h-[90vh]">
					<div className=" mt-7 mx-auto ">
						<img
							src={Ulogo}
							alt=""
							className=" max-w-[27%] max-h-[27%] min-w-[130px] min-h-[130px] md:w-2/4 h-1/4"
						/>
					</div>
					<button
						onClick={toggleSignUp}
						className=" md:hidden rounded-md bg-[#FFFFFF] text-2xl font-bold py-2 px-4 w-60"
					>
						sign Up
					</button>
				</div>

				<div className="absolute mx-auto top-[50%]  p-5  flex items-center justify-center">
					<h1 className=" text-center text-[6vh] md:text-[4.5vw] text-[#FFFFFF] transition-transform ease-in-out duration-300">
						<Typical
							loop={Infinity}
							steps={[
								"Join Our Food Sales Community 👩🏾‍🏭",
								2000,
								"Sign Up Now for Gourmet 🤝",
								2000,
								"Offers and More 💯",
								2000,
							]}
						/>
					</h1>
				</div>
			</div>
			<div
				className={`w-full min-h-[100vh] flex flex-col bg-[#340835] justify-center  items-center px-3  relative `}
			>
				<div className="absolute top-0 left-0 text-white rounded-md bg-[#888488] text-2xl font-bold py-2 px-4 ">
					<Link to={"/"}>home</Link>
				</div>
				<div className="w-[94%]  sm:min-w-[85%] md:min-w-[85%] sm:w-[90%] mx-auto h-[70%]  py-5 flex-col rounded-tl-[100px] flex justify-center items-center rounded-br-[100px]  bg-[#FFFFFF] ">
					{!isMobleScreen && (
						<AiOutlineClose
							onClick={toggleSignUp}
							className="cursor-pointer -mr-[90%] md:hidden -mt-2 p-1 w-7 h-7 font-bold hover:scale-110 duration-200 text-xl text-red-700 rounded-full"
						/>
					)}
					<div className="text-4xl font-bold text-[#340835] mb-4 mt-2 ">
						Sign Up
					</div>
					<form
						onSubmit={handleSubmit((data) => console.log(data))}
						className="flex flex-col items-center justify-center w-full full"
					>
						<div className="relative w-[80%] bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={Usericon}
								alt=""
								className="absolute m-2"
							/>
							<input
								type="text"
								{...register("name", { required: true })}
								placeholder="user name..."
								className="w-[100%] py-2 pl-10 text-base font-normal pr-4 placeholder-gray-300 bg-transparent focus:outline-none "
							/>
						</div>
						{errors.name && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								user full name is required
							</p>
						)}

						<div className="relative w-[80%] mt-6 bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={mail}
								alt=""
								className="absolute m-2"
							/>
							<input
								type=""
								{...register("email", {
									required: true,
									pattern:
										/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
								})}
								placeholder="email here..."
								className="w-[100%] py-2 pl-10 text-base font-normal pr-4 placeholder-gray-300 bg-transparent focus:outline-none "
							/>
						</div>
						{errors.email?.type === "required" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								this field can't be empty
							</p>
						)}
						{errors.email?.type === "pattern" && (
							<p className="text-[.6rem] -ml-[36%] font-thin text-red-700">
								please enter the right emil{" "}
							</p>
						)}
						<div className="relative w-[80%] mt-6 bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={call}
								alt=""
								className="absolute m-2"
							/>
							<input
								{...register("number", {
									required: true,
									minLength: 10,
									maxLength: 10,
								})}
								type="number"
								placeholder="phone number..."
								className="w-[100%] py-2 pl-10 text-base font-normal pr-4 placeholder-gray-300 bg-transparent focus:outline-none"
							/>
						</div>
						{errors.number?.type === "required" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								phone No is requeid
							</p>
						)}
						{errors.number?.type === "minLength" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								phone digits cannot be less than 10
							</p>
						)}
						{errors.number?.type === "maxLength" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								phone digits cannot be less than 10
							</p>
						)}
						<div className="relative w-[80%] mt-6 bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={padlock}
								alt=""
								className="absolute m-2"
							/>
							<input
								{...register("passward", {
									required: true,
									minLength: 6,
									maxLength: 14,
								})}
								type="password"
								placeholder="passward..."
								className="w-[100%] py-2 pl-10 text-base font-normal pr-4 placeholder-gray-300 bg-transparent focus:outline-none"
							/>
						</div>
						{errors.passward?.type === "required" && (
							<p className="text-[.6rem] -ml-[36%] font-thin text-red-700">
								passward is requeid
							</p>
						)}
						{errors.number?.type === "minLength" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								passward cannot be less than 14 characters
							</p>
						)}
						{errors.number?.type === "maxLength" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								passward cannot be greater than 17 characters
							</p>
						)}
						<div className="relative w-[80%] mt-6 bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={padlock}
								alt=""
								className="absolute m-2"
							/>
							<input
								{...register("confirmpassward", { required: true })}
								type="password"
								placeholder="cocnfirm passward..."
								className="w-[100%] py-2 pl-10 text-base font-normal pr-4 placeholder-gray-300 bg-transparent focus:outline-none"
							/>
						</div>
						{errors.confirmpassward?.type ===
							"confirmpassward" && (
							<p className="text-[.6rem] -ml-[36%]  font-thin text-red-700">
								passward is requeid
							</p>
						)}
						<button
							type="submit"
							className="bg-[#29002A] w-[67%] p-2 m-4 text-md rounded-[0.600rem] font-bold text-[#F0F0F0] hover:scale-95 duration-200 ease-in-out"
						>
							Sign Up
						</button>
					</form>
					<p className="md:text-[.77rem] text-[.58rem] mb-3 font-light md:font-semibold text-[#29002A]">
						Already Have an account?
						<span className="text-sm font-extrabold cursor-pointer">
							LOGIN
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
