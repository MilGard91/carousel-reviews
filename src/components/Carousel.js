import React, {Component} from 'react';
import Auxiliary from './Auxiliary';
import './Carousel.css';

class Carousel extends Component {
  state= {
    selectButton: false,
    selectNumber: ''
  }
  
  handleClick = (person, i, event) => {
    var selection, time;
    switch(i){
      case 5:
        selection = 1;
        time = 290;
        break;
      case 4:
        selection = 2;
        time = 490;
        break;
      case 3: 
        selection = 3;
        time = 530;
        break;
      default: 
        break;
    }    
    this.setState({selectButton:true, selectNumber: selection });
    setTimeout(()=>{
        this.props.select(person);
        this.setState({selectButton: false, selectNumber: '' });
        },time);
  }

  render(){
    var carouselButtons = this.props.people.map((person, i) => {
      var buttonClasses = [
        "Button",
        i===5 && this.state.selectNumber === 1 ? "Select-1" : i===4 && this.state.selectNumber === 2 ? "Select-2" : i===3 && this.state.selectNumber === 3 ? "Select-3" : this.state.selectButton ? `Button-select-${this.state.selectNumber}`: "",
      ]
      return (
        <div
          key = {person.name + i}
          className={buttonClasses.join(" ")}
          onClick = {(event) => this.handleClick(person, i, event)}
        >
            <img src={person.picture} alt={person.name}/>
        </div>
      );
    })  
    var selectClasses = ["Selected", this.state.selectButton ? "Selected-change": ""].join(" ")  
    return(
      <Auxiliary>
        <div className = "Carousel">
          {carouselButtons}
        </div>
        <div className = {selectClasses}>
          {
            <img src={this.props.selected.picture} alt={this.props.selected.name} />
          }
        </div>
      </Auxiliary>
    )
}
}

export default Carousel;