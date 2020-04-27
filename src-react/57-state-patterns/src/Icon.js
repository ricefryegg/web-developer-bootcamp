import React, { Component } from 'react'

export default class Icon extends Component {
  static defaultProps = {
    options: ['angry', 'anchor', 'archive', 'bone', 'cloud', 'car']
  }
  state = { icons: [] };

  addIcon = (e) => {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];

    this.setState({ icons: [...this.state.icons, newIcon] });
  }

  render() {
    const icons = this.state.icons.map(icon =>
      <i className={`fas fa-${icon}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button className='btn btn-lg btn-danger' onClick={this.addIcon}>Add New Icon</button>
      </div>
    )
  }
}
