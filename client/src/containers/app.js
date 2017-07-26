import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions';
import DoughnutChart from '../components/doughnut';
import MomentList from '../components/momentList';


class App extends Component {

  componentDidMount() {
    this.props.getDoughnut();
    this.props.getMomentList();
  }

  render() {
    return (
      <div>
        <DoughnutChart />
        {this.props.momentList ?
          <MomentList moments={this.props.momentList} />
          : null}
      </div>
    );
  }
}

const mapStateToProps = state =>
  ({
    summary: state.summary,
    momentList: state.momentList
  });


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getDoughnut: actions.getDoughnut,
    getMomentList: actions.getMomentList
  }, dispatch);

App.propTypes = {
  getDoughnut: PropTypes.func,
  getMomentList: PropTypes.func,
  momentList: PropTypes.arrayOf(PropTypes.object)
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
