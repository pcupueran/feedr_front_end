import React from 'react';

export default class Dietary extends React.Component {
  render() {
    const { name } = this.props
    return (
      <span className="dietary">{ name }</span>
    );
  }
}
