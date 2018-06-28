import React from 'react' 
import Link from 'next/link'
import { connect } from 'react-redux'

import { authLogin } from '../../actions/Auth'
import Head from '../../../components/Head'
import { AuthLayout } from '../../../components/Layouts'
import { redirectIfAuthenticated } from "../../../lib/auth"

class Login extends React.Component {
	static getInitialProps(ctx) {
		redirectIfAuthenticated(ctx)
		return {}
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: '',
	  	password: ''
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
		const { alert } = this.props
		const { email, password } = this.state

		return (
			<AuthLayout>
				<Head title="Next Redux - Login" />
				<div className="container" style={{ paddingTop: '150px' }}>
					<div className="row">
						<div className="col-md-4 col-md-push-4">
							<div className="login-panel panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Sign In</h3>
								</div>
								<div className="panel-body">
			                        {
			                        	alert.message &&
			                            	<div className={`alert ${alert.type}`}>{alert.message}</div>
			                        }			                       
									<form role="form" onSubmit={this.handleSubmit}>
										<fieldset>
											<div className="form-group">
												<input 
													className="form-control" 
													placeholder="E-mail" 
													name="email" 
													type="email" 
													autoFocus="true"
													value={email}
													onChange={this.handleChange} />													
											</div>

											<div className="form-group">
												<input 
													className="form-control" 
													placeholder="Password" 
													name="password" 
													type="password"
													value={password}
													minLength="8"
													onChange={this.handleChange} />													
											</div>

											<div className="checkbox">
												<label>
													<input name="remember" type="checkbox" value="Remember Me" />Remember Me
												</label>
											</div>

											<button 
												type="submit" 
												className="btn btn-sm btn-success">Login</button>
										</fieldset>
									</form>

									<center>
										<hr />
										<p>
											<span style={{ marginRight: '2px' }}>Not have a account?</span>
											<Link href="/auth/register">
												<a>Click here</a>
											</Link>
										</p>
									</center>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AuthLayout>
		)
	}
}

const mapStateToProps = state => {
	return {
		alert: state.alert
	}
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: data => {
      dispatch(authLogin(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)