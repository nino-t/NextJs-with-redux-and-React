import { Component } from "react"
import { signOut } from "../../lib/auth"
import { authLogout } from '../../src/actions/Auth'
import { connect } from 'react-redux'

class Logout extends Component {
  componentDidMount() {
    signOut()
    return {}
  }
  render() {
  	if (this.props.handleLogout) {
  		this.props.handleLogout()
  	}
  	
    return null;
  }
}

const mapDispatchToProps = dispatch => {
	return {
		handleLogout: dispatch(authLogout())
	}
}

export default connect(null, mapDispatchToProps)(Logout)