import React, { useEffect, useState } from "react";

export default function UserProfile() {
	const user = {
		id: 1,
		name: "Ley Roy ",
		email: "email",
		mobil_umber: "0554290614",
		profile_image: " ",
	};
	const [userrs, setUser] = useState(user);
	useEffect(() => console.log(userrs), []);
	return (
		<div>
			{userrs.map((user) => (
				<div>{user.name}</div>
			))}
		</div>
	);
}
