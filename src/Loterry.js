import React, { Component } from 'react';
import Ball from './Ball';
import './Loterry.css'
class Loterry extends Component{
static defaultProps={
    title:"Lottery",
    numBalls:6,
    maxBall:40
}
constructor(props){
    super(props);
    this.state={nums:Array.from({length:this.props.numBalls})};
    this.handleClick=this.handleClick.bind(this);
}
generate(){
this.setState(curState=>({
    nums:curState.nums.map(n=>  Math.floor(Math.random()*this.props.maxBall)+1)
}));
  
}
handleClick(){
this.generate();
}
render(){
    return(
        <section className='Loterry'>
            <h1>{this.props.title}</h1>
            <div>
                {this.state.nums.map(n=> <Ball num={n}/>)}
            </div>
            <button onClick={this.handleClick}>Generate</button>
        </section>
    )
}
}
export default Loterry;