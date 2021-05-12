import React, { Component } from "react";
 
class PortfolioItems extends Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
    createTasks(item) {
        return <li>
                    {item.text}
                    <button onClick={() => this.delete(item.key)} 
                    key={item.key}>Delete
                    </button>
                    <button>Compare</button>
                </li>
      }

    delete(key) {
        this.props.delete(key);
      }
 
  render() {
    var portfolioEntries = this.props.entries;
    var listItems = portfolioEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
          
      </ul>
    );
  }
};
 
export default PortfolioItems;