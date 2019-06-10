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
            <p>(watch how the lifecycle 'reacts', in console)</p>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <h4>
              <ol>
                <li>
                 When loading the page only componentWillMount & componentDidMount
            will be logged in the console, since we didn't update anything yet.
            Component WILL Mount!
            Component DID Mount!
                </li>
                <li>
                When the button is clicked to Increment the update will occur and the following
            lifecycles will be triggered: <br/>
            Component WILL RECEIVE PROPS,<br/>
            Component WILL UPDATE,<br/>
            Component DID UPDATE
                </li>
                <li>
                  After fifteen seconds, the Component WILL UNMOUNT and the last event will be logged in the console.
                </li>
              </ol>
        

         
           </h4>
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
//    componentDidMount is executed after first render only on the client side.
// This is where AJAX requests and DOM or state updates should occur.
// This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeoutor setInterval.
// We are using it to update the state so we can trigger the other lifecycle methods.
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

//    componentWillReceiveProps is invoked as soon as the props are updated before another render is called.
// We triggered it from setNewNumber when we updated the state.
// This is called when a parent component is re-rendered (or ReactDOM.render is called).
// This is where you update state that is derived from changes in props.
   componentWillReceiveProps(newProps){
     console.log('Component Will receive the PROPS')
   }

   //whenever React is rendering the view it checks to see if shouldComponentUpdate is 
   //returning false/true. So whenever you have a component that’s static do yourself a 
   //favor and return false. Or if is not static check to see if the props/state has changed.
   shouldComponentUpdate(newProps, nextState) {
     console.log('Should component UPDATE? YES...button was pressed, update count')
     return true
   }
//    componentWillUpdate is called just before rendering. This method is called right before the update call to render.
// There is nothing different about this render call compared to the call for the initial render.
// This point is very important to React.
// Your render function should not differentiate whether this is the initial render or an update.
// This is the heart of React takes render's return value and compares it to the return value last time render was called and decides what updates to make, if any.
// The reconciliation process that we'll dive into next chapter.
// After reconciliation, React will recursively mount, update, and unmount child components as needed.
// Once the process resolves to base virtual DOM components, React updates the actual DOM
   componentWillUpdate(nextProps, nextState){
     console.log('Component WILL UPDATE, press button to see')
   }

   componentDidUpdate(prevProps, prevState) {
     console.log('Component DID UPDATE, new count... :)')
   }


//    componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.
// In our example we are setting initial state in constructor function.
// The setNewnumber is used to update the state.
// All the lifecycle methods are inside Content component.
   componentWillUnmount() {
     console.log('Buh bye, Component WILL UNMOUNT')
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