import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {favoriteColor: "red"}
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({favoriteColor: "yellow"})
    //     }, 1000)
    // }
    // static getDerivedStateFromProps(props, state){
    //     return {favoriteColor:props.favcol}
    // }
    shouldComponentUpdate () {
        return true;
    }
    changeColor = () =>{
        this.setState({favoriteColor:"blue"})
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite color was " + prevState.favoriteColor
      }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite color is " + this.state.favoriteColor
      }
  render() {
    return (
      <div>
        <h1>My favorite Color is {this.state.favoriteColor}</h1>
        <button type='button' onClick={this.changeColor}>Change color</button>  
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}
