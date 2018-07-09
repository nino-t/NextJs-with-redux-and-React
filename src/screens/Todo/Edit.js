import React from 'react'
import Head from '../../../components/Head'
import { MainLayout } from '../../../components/Layouts'
import { connect } from 'react-redux'
import { todoUpdate } from '../../actions/Todo'

class Edit extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	id: 0,
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

	componentWillReceiveProps(nextProps) {
		const { todo } = nextProps
		if (todo.id) {
			this.setState({
				id: todo.id,
				name: todo.name,
				desc: todo.desc
			})
		}
	}
 
	render() {
		const { name, desc } = this.state

		return (
			<MainLayout>
				<Head title="Next redux - Create Todo" />
				<div className="container">
					<h3>Edit Todo</h3>
					<div>
						<form method="POST" className="form-horizontal" onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label>Todo Name</label>
								  <input
								  	type="text" 
								  	name="name"
								  	onChange={this.handleChange}
								  	className="form-control" 
								  	placeholder="Name"
								  	value={name} />
							</div>
							
							<div className="form-group">
								<label>Noted</label>
								<textarea 
									className="form-control" 
									name="desc"
									onChange={this.handleChange} 
									placeholder="....." 
									value={desc}></textarea>
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
		handleSubmit: (params) => dispatch(todoUpdate(params))
	}
}
export default connect(null, mapDispatchToProps)(Edit)