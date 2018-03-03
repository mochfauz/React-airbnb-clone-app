import React, { Component } from 'react';
import './Flat.css';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " + this.props.flat.name;
    const style = {
      backgroundImage: "url('" + this.props.flat.imageUrl + "')" //`url('${this.props.flat.imageUrl}')`
    }

    return (
      <div className="flat" onClick={this.handleClick}>
        <div style={style} className="flat-picture"></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
