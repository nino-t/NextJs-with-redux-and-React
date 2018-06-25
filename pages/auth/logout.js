import { Component } from "react"
import { signOut } from "../../lib/auth"

export default class Logout extends Component {
  componentDidMount() {
    signOut();
    return {};
  }
  render() {
    return null;
  }
}