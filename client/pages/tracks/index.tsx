import { Button, Card, Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import React from 'react'
import MainLayout from "../../layouts/MainLayout"

const Index = () => {
	const router = useRouter()

	const tracks

	return (
		<MainLayout>
			<Grid container justifyContent='center'>
				<Card style={{ width: "900px" }}>
					<Box p={3}>
						<Grid container justifyContent='space-between'>
							<h1>Список треков</h1>
							<Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
						</Grid>
					</Box>
				</Card>
			</Grid>
		</MainLayout>

	)
}

export default Index