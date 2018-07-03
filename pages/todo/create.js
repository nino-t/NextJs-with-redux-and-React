import React from 'react'
import { connect } from 'react-redux'
import Create from '../../src/screens/Todo/Create'
import { redirectIfNotAuthenticated, getJwt } from '../../lib/auth'
import { authInit } from '../../src/actions/Auth'

class Index extends React.Component {
	static getInitialProps(ctx) {
		redirectIfNotAuthenticated(ctx)	
		return {
			token: getJwt(ctx)
		}
	}

	componentDidMount() {		
		const { dispatch, token} = this.props
		dispatch(authInit(token))
	}

	render() {
		return <Create />
	}
}


export default connect()(Index)