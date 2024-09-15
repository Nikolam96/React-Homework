import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sayHello } from "../actions/SayHelloActions";

class Hello extends React.Component {
  componentDidMount() {
    this.props.getGreeting();
  }

  render() {
    return (
      <div id="hello">
        <h2>{this.props.greeting}</h2>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    greeting: state.SayHelloReducer.greeting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGreeting: () => {
      dispatch(sayHello());
    },
  };
};

export default connect(MapStateToProps, mapDispatchToProps)(Hello);

Hello.propTypes = {
  greeting: PropTypes.string,
  getGreeting: PropTypes.func,
};
