import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { pickingStudent } from './actions';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>Hot Seat!</h1>
        </header>
        <div id='board'>
          <h2>Today's person is...</h2>
          <h2 id='today'>{this.props.currentStudent}</h2>
          <button onClick={() => this.props.pickingStudents(this.props.cold)}>
            Start
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cold: state.cold,
    currentStudent: state.currentStudent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pickingStudents: students => {
      dispatch(pickingStudent(students));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
