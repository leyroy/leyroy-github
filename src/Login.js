import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Typical from "react-typical";
import { useForm } from "react-hook-form";

// assets ussed
import signup from "./asset/signup.png";
import Ulogo from "./asset/Ulogo.png";
import Usericon from "./asset/Usericon.png";
import mail from "./asset/mail.png";
import call from "./asset/call.png";
import padlock from "./asset/padlock.png";

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
		<div className="flex flex-col items-start justify-start w-screen mins-h-[100vh] md:flex-row m-0">
			<div
				className={` ${
					!isMobleScreen && "hidden"
				} relative top-0 h-[100vh] w-screen flex-grow md:flex overflow-hidden`}
			>
				<div className=" absolute w-auto top-7 sm:top-28 left-[10%] right-[10%] gap-[30em] sm:gap-[24rem] flex items-center justify-center flex-col m-auto">
					<img
						src={Ulogo}
						alt=""
						className="w-1/4 h-1/4"
					/>
					<button
						onClick={toggleSignUp}
						className=" sm:hidden rounded-md bg-[#FFFFFF] text-2xl font-bold py-2 px-4 w-60"
					>
						sign Up
					</button>
				</div>

				<div className="absolute mx-auto sm:left-[10%] sm:right-[0%] top-[30%] sm:top-[40%] md:top-[37%] p-5  flex items-center justify-center flex-col gap-10">
					{/* <p className="text-3xl font-bold leading-10 text-white capitalize md:text-4xl">
						Join Our Food Sales Community{" "}
						<span className="text-teal-500">
							Sign Up Now for Gourmet{" "}
							<p className="font-extrabold text-rose-600">
								Offers and More
							</p>
						</span>
					</p> */}
					<h1 className=" text-center text-[6vh] md:text-[4.5vw] text-[#FFFFFF]">
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
				<div />
				<img
					src={signup}
					alt=""
					className="w-full h-full overflow-hidden"
				/>
				<div />
			</div>

			<div
				className={`w-full min-h-[100vh] flex  bg-[#340835] md:flex justify-center  items-center px-3  relative flex-grow `}
			>
				<div className="w-auto m-auto p-6 flex-col rounded-tl-[100px] flex justify-center items-center rounded-br-[100px]  bg-[#FFFFFF] ">
					{!isMobleScreen && (
						<AiOutlineClose
							onClick={toggleSignUp}
							className="cursor-pointer -mr-[90%] md:hidden -mt-2 p-1 w-7 h-7 font-bold hover:scale-110 duration-200 text-xl text-red-700 rounded-full"
						/>
					)}
					<div className="text-4xl font-bold text-[#340835] mb-6">
						Sign Up
					</div>
					<form
						onSubmit={handleSubmit((data) => console.log(data))}
						className="flex flex-col items-center justify-center gap-6 md:w-[360px] min-w-[290px] sm:w-full"
					>
						<div className="relative bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={Usericon}
								alt=""
								className="absolute m-2"
							/>
							<input
								type="text"
								{...register("name", { required: true })}
								placeholder="user name..."
								className="w-auto py-2 pl-10 placeholder-gray-300 bg-transparent px- focus:outline-none "
							/>
						</div>
						{errors.name && (
							<p className="text-[.6rem] font-thin text-red-700">
								user full name is requied
							</p>
						)}

						<div className="relative bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
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
								className="w-auto px-2 py-2 pl-10 placeholder-gray-300 bg-transparent focus:outline-none "
							/>
						</div>
						{errors.email?.type === "requied" && (
							<p className="text-[.6rem] font-thin text-red-700">
								this field can't be empty
							</p>
						)}
						{errors.email?.type === "pattern" && (
							<p className="text-[.6rem] font-thin text-red-700">
								please enter the right emil{" "}
							</p>
						)}
						<div className="relative bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
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
								className="w-auto px-2 py-2 pl-10 placeholder-gray-300 bg-transparent focus:outline-none "
							/>
						</div>
						{errors.number?.type === "required" && (
							<p className="text-[.6rem] font-thin text-red-700">
								phone No is requeid
							</p>
						)}
						{errors.number?.type === "minLength" && (
							<p className="text-[.6rem] font-thin text-red-700">
								phone digits cannot be less than 10
							</p>
						)}
						{errors.number?.type === "maxLength" && (
							<p className="text-[.6rem] font-thin text-red-700">
								phone digits cannot be less than 10
							</p>
						)}
						<div className="relative bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
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
								className="w-auto px-2 py-2 pl-10 placeholder-gray-300 bg-transparent focus:outline-none "
							/>
						</div>
						{errors.passward?.type === "required" && (
							<p className="text-[.6rem] font-thin text-red-700">
								passward is requeid
							</p>
						)}
						{errors.number?.type === "minLength" && (
							<p className="text-[1rem] font-thin text-red-700">
								passward cannot be less than 14 characters
							</p>
						)}
						{errors.number?.type === "maxLength" && (
							<p className="text-[1rem] font-thin text-red-700">
								passward cannot be greater than 17 characters
							</p>
						)}
						<div className="relative bg-[#F0F0F0] hover:scale-105 duration-500 ease-in-out rounded-md">
							<img
								src={padlock}
								alt=""
								className="absolute m-2"
							/>
							<input
								{...register("confirmpassward", { required: true })}
								type="password"
								placeholder="ocnfirm passward..."
								className="w-auto px-2 py-2 pl-10 placeholder-gray-300 bg-transparent focus:outline-none"
							/>
						</div>
						{errors.confirmpassward?.type === "passward" && (
							<p className="text-[1rem] font-thin text-red-700">
								passward is requeid
							</p>
						)}
						<button
							type="submit"
							className="bg-[#29002A] w-[80%] p-2 mt-2 text-md rounded-[0.600rem] font-bold text-[#F0F0F0] hover:scale-95 duration-200 ease-in-out"
						>
							{" "}
							Sign Up
						</button>
						<p className="text-sm font-semibold text-[#29002A]">
							Already Have an account?{" "}
							<span className="font-bold cursor-pointer">
								LOGIN
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
