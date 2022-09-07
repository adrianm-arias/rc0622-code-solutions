import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: null
    };

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
    const liArray = languages.map(header => {
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

export const languages = [
  {
    id: 1,
    name: 'Hypertext Markup Language',
    text: `Hypertext Markup Language
      is the standard markup language for creating web pages and web applications.
      With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone
      technolicies for the World Wide Web.`
  },
  {
    id: 2,
    name: 'Cascading Style Sheets',
    text: `Cascading Style Sheets (CSS)
      is a style sheet language used for describing the presentation of a document
      written in a markup language like HTML. CSS is a cornerstone technology of
      the World Wide Web, alongside HTML and JavaScript.`
  },
  {
    id: 3,
    name: 'JavaScript',
    text: `JavaScript, often abbreviated as JS, is
      a high -level, interpreted programming language that conforms to the ECMAScript
      specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based
      object -orientation, and first-class functions.`
  }
];

export default Accordian;
