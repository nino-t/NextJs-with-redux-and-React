import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Edit from '../../src/screens/Todo/Edit'
import { redirectIfNotAuthenticated, getJwt } from '../../lib/auth'
import { authInit } from '../../src/actions/Auth'
import { todoView } from '../../src/actions/Todo'

class Index extends React.Component {
	static getInitialProps(ctx) {
		redirectIfNotAuthenticated(ctx)	
		return {
			token: getJwt(ctx)
		}
	}

	componentDidMount() {		
		const { dispatch, token, router } = this.props
		dispatch(authInit(token))
		dispatch(todoView({id: router.query.id}))
	}

	render() {	
		return <Edit todo={this.props.todo} />
	}
}


const mapStateToProps = state => {
	return {
		todo: state.todo.active.todo
	}
}
export default connect(mapStateToProps)(withRouter(Index))