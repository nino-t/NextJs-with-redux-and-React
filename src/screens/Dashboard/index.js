import React from 'react'
import Link from 'next/link'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'
import { connect } from 'react-redux'
import { todoDelete } from '../../actions/Todo'

class Dashboard extends React.Component {
	render() {
		const { todos, handleDelete } = this.props
		return (
			<MainLayout>
				<Head title="Next redux - Dashboard" />
				<div className="container">
					<h3 className="pull-left">Dashboard</h3>
					<Link href="/todo/create">
						<a className="btn btn-primary pull-right" style={{ marginTop: '20px' }}>Add Todo</a>
					</Link>
					<div className="clearfix"></div>
					<br />
					<div className="row">					
					{
						(todos && todos.result) &&
							todos.result.rows.map((todo, index) => (
								<div className="col-xs-12 col-sm-4 col-md-3 col-lg-3" key={index} style={{ position: 'relative' }}>
									<div className="well" style={{ height: '250px' }}>
										<div style={{ height: '60%' }}>
											<h4>
												<Link href={`/todo/show?id=${todo.id}`}>
													<a>{todo.name}</a>
												</Link>
											</h4>
											<hr/>
											<p>{todo.desc}</p>
										</div>
										<div style={{ height: '40%' }}>
											<button 
												type="button" className="btn btn-danger bn-xs" 
												onClick={() => handleDelete(todo.id) }
												style={{ width: '100%', marginBottom: '13px'}}>
												Delete
											</button>
											<Link as={`/todo/${todo.id}/edit`} href={`/todo/edit/?id=${todo.id}`}>
												<a className="btn btn-success bn-xs" 
													style={{ width: '100%' }}>
													Edit
												</a>
											</Link>
										</div>
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
		todos: state.todo.list.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleDelete: (id) => dispatch(todoDelete({id:id}))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
