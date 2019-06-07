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

   componentWillMount() {
      console.log('Component WILL MOUNT!')

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