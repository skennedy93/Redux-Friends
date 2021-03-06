import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './friends';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/actions';
import FriendForm from './FriendForm'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: 0,
      email: ''
    }
  }
  componentDidMount(){
    this.props.fetchFriends();
  }
  addFriend = event => {
    event.preventDefault();
    console.log('submit');
  }
   handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div className="App">
     <Friends friends={this.props.friends} />
     <FriendForm handleSubmit={this.addFriend} handleChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error
  }}

export default connect(mapStateToProps, { fetchFriends })(App);