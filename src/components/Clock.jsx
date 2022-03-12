import React from "react";
//se refiere A THIS NO ES TIPO FUNCION ES TIPO CLASE
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        console.log('constructor called!')
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentDidMount(){
        console.log('componentDidMount called!')
        this.timerId =setInterval(() =>{
        this.tick()
        },1000);

    }
    render() {
        console.log('render called!')
        return (
            <div>
              <h1>Hello World!</h1>
              <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
            </div>
          );
        
    }
}


/*
function Clock(props){
   return (
        <div>
          <h1>Hello World!</h1>
          <h2>Son las {props.date.toLocaleTimeString()}</h2>
        </div>
      );
    

}
*/
export default Clock;
