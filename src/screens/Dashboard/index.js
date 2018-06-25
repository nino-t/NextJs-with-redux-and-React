import React from 'react'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'

export default class Dashboard extends React.Component {
	render() {
		return (
			<MainLayout>
				<Head title="Next redux - Dashboard" />
				<div className="container">
					<h3>Dashboard</h3>
				</div>
			</MainLayout>
		)
	}
}
