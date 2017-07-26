import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions';
import DoughnutChart from '../components/doughnut';

injectTapEventPlugin();

class App extends Component {

  componentDidMount() {
    this.props.getDoughnut();
  }

  render() {
    return (
      <MuiThemeProvider>
        <DoughnutChart />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state =>
  ({
    summary: state.summary
  });


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getDoughnut: actions.getDoughnut
  }, dispatch);

App.propTypes = {
  getDoughnut: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
