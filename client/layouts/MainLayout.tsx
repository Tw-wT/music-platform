import { Props } from "next/script"
import React, { JSXElementConstructor, ReactElement } from 'react'
import Navbar from "../components/Navbar"

const MainLayout: React.FC = ({children}) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default MainLayout