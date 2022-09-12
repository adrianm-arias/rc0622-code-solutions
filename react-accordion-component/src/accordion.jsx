import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: null
    };
    this.languages = props.languages;
    this.handleClick = this.handleClick.bind(this);
    this.expandItem = this.expandItem.bind(this);

  }

  handleClick(id) {
    if (this.state.isExpanded !== id) {
      this.setState({ isExpanded: id });
    } else {
      this.setState({ isExpanded: null });
    }
  }

  expandItem(id) {
    let letclass = 'desc-content hidden';
    if (id === this.state.isExpanded) {
      letclass = 'desc-content';
    }
    return letclass;
  }

  generateLi() {
    const liArray = this.props.languages.map(header => {
      const li =
        <li onClick={() => this.handleClick(header.id)} key={header.id}>
          <h2 className='item-title'>{header.name}</h2>
          <div className='desc-wrapper'>
            <p className={this.expandItem(header.id)}>{header.text}</p>
          </div>
        </li>;
      return li;
    });
    return liArray;
  }

  render() {
    return (
      <ul>
        {this.generateLi()}
      </ul>
    );
  }
}
