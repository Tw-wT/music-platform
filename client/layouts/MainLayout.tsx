import { Container } from "@mui/material"
import { ScriptProps } from "next/script"
import React, { JSXElementConstructor, ReactElement } from 'react'
import Navbar from "../components/Navbar"

const MainLayout: React.FC<ScriptProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			{console.log(children)}
			<Container style={{margin: '90px 0'}}>
				{children}
			</Container>
		</>
	)
}

export default MainLayout