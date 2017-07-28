import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { CardText } from 'material-ui/Card';

class TextEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Grabbing your text'
    };
  }

  componentDidMount() {
    axios.get(this.props.moment.uri)
     .then((res) => {
       this.setState({
         text: res.data
       });
     });
  }

  render() {
    return (
      <CardText>{this.state.text}</CardText>
    );
  }
}

TextEntry.propTypes = {
  moment: PropTypes.shape({
    uri: PropTypes.string,
  })
};

export default TextEntry;