import React from 'react'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'
import { connect } from 'react-redux'

class Edit extends React.Component {
	render() {
		const { todos } = this.props
		return (
			<MainLayout>
				<Head title="Next redux - Create Todo" />
				<div className="container">
					<h3>Edit Todo</h3>
					<div>
						<form className="form-horizontal">						
							<div className="form-group">
								<label>Todo Name</label>
								  <input 
								  	type="text" 
								  	className="form-control" 
								  	placeholder="Name" />
							</div>
							
							<div className="form-group">
								<label>Noted</label>
								<textarea className="form-control" placeholder="....."></textarea>
							</div>					

							<button type="submit" className="btn btn-primary">Save</button>
						</form>
					</div>
				</div>
			</MainLayout>
		)
	}
}

export default Edit