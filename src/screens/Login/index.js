import React from 'react' 
import Link from 'next/link'
import { connect } from 'react-redux'

import { authLogin } from '../../actions/Auth'
import Head from '../../../components/Head'
import { AuthLayout } from '../../../components/Layouts'

import {
	Card,
	Container,
	Flex,
	FlexItem,
	Cover,
	Form,
	Button,
	Input,
	Divider
} from '../../../components/Styled'

class Login extends React.Component {
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
				<Container>
					<div style={{ margin: '23.5px 0' }}>
						<Card style={{ height: '550px' }}>
							<Flex direction="row">
								<FlexItem md='40%' height='550px'>
									<Form onSubmit={this.handleSubmit}>
										<Flex direction="column" center>
											<img src="/static/img/logo.png" width="50" />
											<h3>Rocket Todo</h3>
											<small>Create an account</small>
										</Flex>

										<div>								
					                        {
					                        	alert.message &&
					                            	<div className={`alert ${alert.type}`}>{alert.message}</div>
					                        }
				                        </div>

										<br /><br /><br />

										<Flex direction="column" center style={{ width: '60%' }}>
											<Button type="button" blue>
												Sign up with Facebook
											</Button>										

											<Divider />

											<Input 
												type="email" 
												name="email"
												autoFocus="true"
												placeholder="Email"
												onChange={this.handleChange}
												value={email} />

											<Input 
												type="password" 
												name="password"
												placeholder="Password"
												minLength="8"
												onChange={this.handleChange}
												value={password} />

											<br />

											<Button type="submit" dark>
												Get Starter
											</Button>										
										</Flex>

										<br /><br /><br /><br />

										<p style={{ fontSize: '14px', color: '#7f8c8d'}}>
											Already have an account? <a href="#">Click Here</a>
										</p>
									</Form>
								</FlexItem>
								<FlexItem md='60%' height='550px' style={{ position:'relative' }}>
									<Cover url="/static/img/team.jpg">
										<h1>Mastermind Better</h1>
										<br />
										<p>
											One morning, when Gregor Samsa woke from troubled dreams, 
											he found himself transformed in his bed into a horrible vermin.
										</p>
									</Cover>
								</FlexItem>							
							</Flex>
						</Card>
					</div>
				</Container>
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