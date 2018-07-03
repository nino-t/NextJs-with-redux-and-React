import React from 'react'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'
import { connect } from 'react-redux'

class Show extends React.Component {
	render() {
		let { todo } = this.props
		if(todo.todo)
			todo = todo.todo

		return (
			<MainLayout>
				<Head title="Next redux - Create Todo" />
				<div className="container">
					<h3>Show Todo</h3>
					<div>
						<table className="table table-hover">
							<tbody>
								<tr>
									<td width="25%">Name</td>
									<td width="5%">:</td>
									<td>{(todo.name)? todo.name:''}</td>
								</tr>
								<tr>
									<td width="25%">Desc</td>
									<td width="5%">:</td>
									<td>{(todo.desc)? todo.desc:''}</td>
								</tr>								
							</tbody>
						</table>					
					</div>
				</div>
			</MainLayout>
		)
	}
}

const mapStateToProps = state => {
	return {
		todo: state.todo.active
	}
}
export default connect(mapStateToProps)(Show)