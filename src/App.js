import React from 'react';

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
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

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
     .then(res => console.log(res))
   }


  
   render() {
   
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
            
         </div>
      );
   }
}

export default App;