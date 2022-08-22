import React, {Component} from 'react';
import Day from '../Day'


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentDay: new Date(),
    }
  }
  setDate =(date)=>{this.setState({currentDay: date})}
  render() {
    const {currentDay}=this.state;
  return (
       <>
      <Day  currentDay={currentDay} setDate={this.setDate}/>
    </>
  );
}
}

export default Calendar;
