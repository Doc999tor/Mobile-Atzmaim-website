import { Component } from 'preact';
import { route } from 'preact-router';
export default class Redirect extends Component {
  componentWillMount() {
    console.log('this.props.to', this.props.to);
    route(this.props.to, true);
  }

  render() {
    return null;
  }
}