import React, { Component } from "react";

class Ciao extends Component{ 
    constructor(props) {
        super(props);
        this.state ={
            isHi: true,
        }
    }
    handlerSwitch =()=>{
        const {isHi} = this.state;
        this.setState ({isHi: !isHi})

    }
    render(){
        const {fname, sname,className}= this.props;
        const {isHi} = this.state;
        return <>
        <h2 className={className}>{isHi ? "Hello": "Bye"}, {fname} {sname}</h2>
        <button onClick = {   this.handlerSwitch}>switch isHi</button>
    
        </>
        }
}



        // return React.createElement('h2', null, 'hello', name )//

export default Ciao;