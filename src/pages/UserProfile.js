import React, { useEffect, useState } from "react";
import Avator from "../img/avatar.png";
import Moda from "../components/Modal";
import { Link } from "react-router-dom";

export default function UserProfile() {
	const user = {
		id: 1,
		name: "Ley Roy ",
		email: "email",
		mobil_umber: "0554290614",
		profile_image: Avator,
	};
	const [userrs, setUser] = useState(user);
	const [isEdit, setIsEdit] = useState(false);
	const [newValues, setNewValues] = useState({
		id: 1,
		name: " ",
		email: "",
		mobil_umber: " ",
		profile_image: " ",
	});

	const saveUpdates = (e) => {
		e.preventDefault();
		setUser(newValues);
		setIsEdit(false);
	};

	const handleEdit = () => {
		setIsEdit(true);
		console.log(newValues);
		setNewValues({
			name: userrs.name,
			email: userrs.email,
			mobil_umber: userrs.mobil_umber,
			profile_image: userrs.profile_image,
		});

		console.log(newValues);
	};

	// if (isEdit) {
	// 	return (
	// 		// <form
	// 		// 	className=" f"
	// 		// 	onSubmit={saveUpdates}
	// 		// 	action=""
	// 		// >
	// 		// 	<input
	// 		// 		type="text"
	// 		// 		value={newValues.name}
	// 		// 		onChange={(e) =>
	// 		// 			setNewValues({ ...newValues, name: e.target.value })
	// 		// 		}
	// 		// 	/>
	// 		// 	<input
	// 		// 		type="text"
	// 		// 		value={newValues.email}
	// 		// 		onChange={(e) =>
	// 		// 			setNewValues({ ...newValues, email: e.target.value })
	// 		// 		}
	// 		// 	/>
	// 		// 	<input
	// 		// 		type="text"
	// 		// 		value={newValues.mobil_umber}
	// 		// 		onChange={(e) =>
	// 		// 			setNewValues({
	// 		// 				...newValues,
	// 		// 				mobil_umber: e.target.value,
	// 		// 			})
	// 		// 		}
	// 		// 	/>
	// 		// 	<input
	// 		// 		type="text"
	// 		// 		value={newValues.profile_image}
	// 		// 		onChange={(e) => {
	// 		// 			setNewValues({
	// 		// 				...newValues,
	// 		// 				profile_image: e.target.value,
	// 		// 			});
	// 		// 		}}
	// 		// 	/>
	// 		// 	<button type="submit">Save</button>
	// 		// </form>
	// 	);
	// }
	return (
		<div className="bg-[#140516] h-[100vh] py-9 flex items-center  justify-center">
			<div className="w-[70%] h-auto bg-[#340835] border p-2 rounded-md border-black">
				<div className="flex justify-between items-center">
					<h1 className="text-white font-extrabold text-3xl">
						About You
					</h1>
					<Link
						to={"/"}
						className="rounded py-1 h-12 text-center flex items-center justify-center mt-4 px-4 bg-sky-600"
					>
						Home
					</Link>
				</div>
				<div className="flex gap-2 flex-col items-center justify-center ">
					<div className=" w-40 bg-sky-100 h-40 rounded-full object-contain hover:scale-110 duration-300 ease-in-out border border-black">
						<img
							className=" bg-sky-100 rounded-full  border-black"
							src={Avator}
							alt=""
						/>
					</div>
					<div className=" w-[90%] m-3 bg-sky-100 px-4 py-4 border-black">
						{userrs.name}
					</div>
					<div className=" w-[90%] m-3 bg-sky-100 px-4 py-4 border-black">
						{userrs.email}
					</div>
					<div className=" w-[90%] m-3 bg-sky-100 px-4 py-4 border-black">
						{userrs.mobil_umber}
					</div>
				</div>
				<div className=" md:h-auto  text-center mb-3">
					<button
						onClick={handleEdit}
						className=" rounded py-2 h-14 overflow-clip mt-4 px-4 bg-sky-600"
					>
						Update Info!
					</button>
				</div>
			</div>
			{isEdit && (
				<Moda
					saveUpdates={saveUpdates}
					newValues={newValues}
					setNewValues={setNewValues}
					setIsEdit={setIsEdit}
				/>
			)}
		</div>
	);
}
