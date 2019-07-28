import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tags from '../Tags';
import { connect } from 'react-redux';
import { getFormats } from '../../../selectors/searchFormSelectors';
import { removeCardFormat, pushAvailFormat } from '../../../actions/searchFormActions';

class FormatTags extends PureComponent {
  render() {
    return (
      <Tags options={this.props.formats} handleDelete={this.props.handleDelete} />
    );
  }
}

const mapStateToProps = state => ({
  formats: getFormats(state)
});

const mapDispatchToProps = dispatch => ({
  handleDelete(format) {
    console.log('TRUE');
    dispatch(removeCardFormat(format));
    dispatch(pushAvailFormat(format));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormatTags);