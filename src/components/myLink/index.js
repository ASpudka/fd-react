import { Component } from "react";

class MyLink extends Component{ 
    constructor(props) {
        super(props);
    }
    render(){
const {className,href}=this.props;
        return<>
        <a className = {className} href = {href}> My link</a>
        </>
    }
}
export default MyLink