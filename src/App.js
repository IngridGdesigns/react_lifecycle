import React from 'react';
import './App.css'

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 0,
         
      }

   };

   setNewNumber = () => {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div className='App'>
          
           <Content myNumber ={this.state.data}></Content>
           <p>(watch how the lifecylce 'reacts', in console)</p>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            
         </div>
      );
   }
}

class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      films: '',
    }
  }
  //Is invoked immediatley before mounting occurs, It is called
  //before render() therefore setting state in this method will
  //not trigger a re-render Do not may async calls here for initialization!!!!
   componentWillMount() {
      console.log('Component WILL MOUNT!')
    
   }

   //Make async calls for component initialization in componentDidMount
   componentDidMount() {
    
    const headers ={
      method: 'GET',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log('Component Did Mount!!!! :D')
     fetch(`https://ghibliapi.herokuapp.com/films`, headers)
     .then(res => res.json())
     .then(films => this.setState({ films }, console.log(films)))
   }

   componentWillReceiveProps(newProps){
     console.log('Component Will receive the PROPS')
   }

   shouldComponentUpdate(newProps, nextState) {
     return true
   }

   componentWillUpdate(nextProps, nextState){
     console.log('Component WILL UPDATE, press button to see')
   }

   componentDidUpdate(prevProps, prevState) {
     console.log('Component DID UPDATE ... :)')
   }
  
   render() {
  
      return (
         <div>
           <h1>Press button to increment</h1>
            <h3>{this.props.myNumber}</h3>
           
         </div>
      );
   }
}

export default App;