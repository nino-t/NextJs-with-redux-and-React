import { connect } from 'react-redux'
const Alert = (props) => (
	<div className="container">
	</div>
)

const mapStateToProps = (state) => {
	return {
		alert: state.alert
	}
}

export default connect(mapStateToProps)(Alert)