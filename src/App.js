import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './components';
import Login from "./Login";

export default function App() {
	return (
		<div className="flex flex-col w-screen h-auto bg-gray-100">
			<Login />
		</div>
	);
}
