import React from 'react' 
import Link from 'next/link'

import Head from '../../../components/Head'
import { AuthLayout } from '../../../components/Layouts'
import { redirectIfAuthenticated } from "../../../lib/auth"

export default class Register extends React.Component {
	static getInitialProps(ctx) {
		redirectIfAuthenticated(ctx)
		return {}
	}

	render() {
		return (
			<AuthLayout>
				<Head title="Next Redux - Register" />
				<div className="container" style={{ paddingTop: '150px' }}>
					<div className="row">
						<div className="col-md-4 col-md-push-4">
							<div className="login-panel panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Sign Up</h3>
								</div>
								<div className="panel-body">
									<form role="form">
										<fieldset>
											<div className="form-group">
												<input 
													className="form-control" 
													placeholder="Name" 
													name="name" 
													type="text" 
													autoFocus="true" />
											</div>

											<div className="form-group">
												<input 
													className="form-control" 
													placeholder="E-mail" 
													name="email" 
													type="email" />
											</div>

											<div className="form-group">
												<input 
													className="form-control" 
													placeholder="Password" 
													name="password" 
													type="password" />
											</div>

											<div className="form-group">
												<input 
													className="form-control" 
													placeholder="Confirm Password" 
													name="password_confirmation" 
													type="password" />
											</div>											

											<button 
												type="submit" 
												className="btn btn-sm btn-success">Register</button>
										</fieldset>
									</form>

									<center>
										<hr />
										<p>
											<span style={{ marginRight: '2px' }}>Have a account?</span>
											<Link href="/auth/login">
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