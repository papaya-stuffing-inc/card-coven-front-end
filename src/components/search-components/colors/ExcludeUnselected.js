import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkExclude } from '../../../actions/searchFormActions';
import { getExclude } from '../../../selectors/searchFormSelectors'; 

class ExcludeUnselected extends PureComponent {
  static propTypes = {
    exclude: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" name="exclude" value={this.props.exclude} onChange={() => this.props.handleChange()} />
        <h4>Exclude Unselected Colors</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exclude: getExclude(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange() {
    dispatch(checkExclude());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExcludeUnselected);