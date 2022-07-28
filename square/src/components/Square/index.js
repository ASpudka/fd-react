import React, {component} from "react";
import Board from "../Board";

class Square extends Comment{
  render(){
    return(<>
    <button className ='square'>
      {this.props.value}
    </button>
    </>)
  }

}
export default Square;