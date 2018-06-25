import React from 'react'
import Header from './Header'

export const MainLayout = (props) => (
	<div>
		<Header />
		{props.children}
	</div>
)
