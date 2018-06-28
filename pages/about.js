import React from 'react'
import Head from '../components/Head'
import { MainLayout } from '../components/Layouts'

export default class About extends React.Component {
	render() {
		return (
			<MainLayout>
				<Head title="Next redux - About" />
				<div className="container">
					<h3>About</h3>
				</div>
			</MainLayout>
		)
	}
}
