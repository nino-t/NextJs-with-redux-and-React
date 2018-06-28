import React from 'react'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'
import { connect } from 'react-redux'
import { todosFetch } from '../../actions/Todo'

import { redirectIfNotAuthenticated } from "../../../lib/auth"

class Dashboard extends React.Component {
	componentWillMount() {
		console.log('_ctx', this.props)

		let params = {}
		params.token = this.props.token
		this.props.initialTodo(params)
	}

	render() {
		const { todos } = this.props
		return (
			<MainLayout>
				<Head title="Next redux - Dashboard" />
				<div className="container">
					<h3 className="pull-left">Dashboard</h3>
					<a className="btn btn-primary pull-right" style={{ marginTop: '20px' }}>Add Todo</a>
					<div className="clearfix"></div>
					<br />
					<div className="row">					
					{
						(todos && todos.result) &&
							todos.result.rows.map((todo, index) => (
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
									<div class="well">
										<h4>{todo.name}</h4>
										<hr/>
										<p>{todo.desc}</p>
									</div>
								</div>
							))
					}					
					</div>
				</div>
			</MainLayout>
		)
	}
}

const mapStateToProps = state => {
	return {
		loading: state.todo.loading,
		todos: state.todo.list.todos,
		token: state.authentication.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initialTodo: (params) => dispatch(todosFetch(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)