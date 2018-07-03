import React from 'react'
import Header from './Header'
import Alert from '../../Alert'


export const MainLayout = (props) => (
	<div>
		<Header />
		<Alert />
		{props.children}
	</div>
)
