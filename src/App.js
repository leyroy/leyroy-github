import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './components';


import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

export default function App() {
	return (
		<Routes basename={process.env.PUBLIC_URL}>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="login"
				element={<Login />}
			/>
			<Route
				path="/userProfile"
				element={<UserProfile />}
			/>
		</Routes>
	);
}
