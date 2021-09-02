import React, { Component } from 'react';
import ListCategoryBar from './ListCategoryBar';
import ListBeverageCard from './ListBeverageCard';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      beverageData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/beverageCardData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ beverageData: data.beverageCardData });
      });
  }

  render() {
    return (
      <div className="list">
        <div className="listContanier">
          <ListCategoryBar />
          <div className="listProductCard">
            {this.state.beverageData.map(product => (
              <ListBeverageCard
                key={product.id}
                img={product.img}
                name={product.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
