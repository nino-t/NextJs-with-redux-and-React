import React from 'react'
import { connect } from 'react-redux'
import Edit from '../../src/screens/Todo/Edit'
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
		return <Edit />
	}
}


export default connect()(Index)