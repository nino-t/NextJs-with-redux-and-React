import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

class Header extends React.Component {
	render() {
		const { loggedIn } = this.props
		return (
			<div>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Next Redux</a>
						</div>
				
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav">
								<li>
									<Link href="/">
										<a>Dashboard</a>
									</Link>
								</li>
								<li>
									<Link href="/about">
										<a>About</a>
									</Link>
								</li>
							</ul>

							<span>
								{
									(loggedIn) ?
										<ul className="nav navbar-nav navbar-right">
											<li>
												<Link href="/auth/logout">
													<a>Logout</a>
												</Link>
											</li>							
										</ul>
									:
									<ul className="nav navbar-nav navbar-right">
										<li>
											<Link href="/auth/register">
												<a>Sign Up</a>
											</Link>
										</li>
										<li>
											<Link href="/auth/login">
												<a>Sign In</a>
											</Link>
										</li>
									</ul>
								}
							</span>							
						</div>
					</div>
				</nav>			
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.authentication.loggedIn
	}
}

export default connect(mapStateToProps)(Header)