import React from 'react'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'
import { connect } from 'react-redux'
import { todoCreate } from '../../actions/Todo'

class Create extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	name: '',
	  	desc: ''
	  }

	  this.handleChange = this.handleChange.bind(this)
	  this.handleSubmit = this.handleSubmit.bind(this) 
	}

	handleChange(e){
		let target = e.target
		this.setState({
			[target.name]: target.value
		})
	}

  	handleSubmit = async e => {
  	    e.preventDefault()
	    this.props.handleSubmit(this.state)
	}	

	render() {
		const { name, desc } = this.state
		const { todos } = this.props
		return (
			<MainLayout>
				<Head title="Next redux - Create Todo" />
				<div className="container">
					<h3>Create Todo</h3>
					<div>
						<form onSubmit={this.handleSubmit} className="form-horizontal">						
							<div className="form-group">
								<label>Todo Name</label>
								  <input 
								  	type="text" 
								  	name="name"
								  	className="form-control" 
								  	placeholder="Name"
								  	onChange={this.handleChange}
								  	value={name} />
							</div>
							
							<div className="form-group">
								<label>Noted</label>
								<textarea 
									name="desc"
									onChange={this.handleChange}
									className="form-control" 
									defaultValue={desc}
									placeholder="....."/>
							</div>					

							<button type="submit" className="btn btn-primary">Save</button>
						</form>
					</div>
				</div>
			</MainLayout>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSubmit: (params) => dispatch(todoCreate(params))
	}
}

export default connect(null, mapDispatchToProps)(Create)