import React from 'react';
import './App.css';

class UnmountComponent extends React.Component{

  //Unmounting
  componentWillUnmount(){

  }

  render(){
    return(
      <div>
        <h1>Toggle Component</h1>
      </div>
    )
  }
}

class App extends React.Component{

  //Mounting
  constructor(props){
    super(props);
    this.state ={
      project: "RBS"
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return null;// { project: "MSS" };
  }

  componentDidMount(){
    //this is place where we can do API call
  }

  //Updating Phase
  //getDerivedStateFromProps will call again in updating phase
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }


  getSnapshotBeforeUpdate(prevProps,prevState){
    return { oldProject: prevState.name }
  }

  componentDidUpdate(prevProps, prevState, snapshot){

  }

  handleClick = () =>{
    this.setState({
      project: "MSS 2.0"
    })
  }

  handleToggle = () => {
    this.setState({
      isComponentVisible: !this.state.isComponentVisible
    })
  }

  render(){
    return(
      <div>
        <h1>React Session</h1>
        <p>{this.state.project}</p>
        <button onClick={this.handleClick}>Click me</button>
        {
          this.state.isComponentVisible ? <UnmountComponent /> : null
        }
        <button onClick={this.handleToggle}>Toggle Comp</button>
      </div>
    )
  }
}




export default App;
