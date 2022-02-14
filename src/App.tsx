import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Counter from './components/Counter';
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import {User} from './components/context/User';
import List from './components/Generics/List';
function App() {
  const personName={first:'Ammar', last:'Ashraf'}
  const personArrayList=[
    {first:'Ammar', last:'Ashraf'},
    {first:'Moed', last:'Ashraf'},
    {first:'Muhammad', last:'Ashraf'}
  ]
  return (
    <div className="App">
      {/* <Greet name='Rizwan' messageCount={10} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList personsList={personArrayList}/> */}
      {/* <PersonList personsList={personArrayList}/> */}
      {/* <Status status='error'/> */}
      {/* <Counter/> */}
      {/* <ThemeContextProvider> */}
            {/* <Box/> */}
      {/* </ThemeContextProvider> */}
      {/* <UserContextProvider>
          <User/>
      </UserContextProvider> */}

      {/* <List
      items={['bat', 'ball','racket', 'baseball','hockey']}
      onClick={(item)=>console.log('On Click inside parent called',item)}
      /> */}
      {/* <List
      items={[{id:1,name:'bat'},{id:2,name:'ball'},{id:3,name:'racket'}]}
      onClick={(item)=>console.log('On Click inside parent called',item)}
      /> */}
      <List
      items={[1,2,3,4,5]}
      onClick={(item)=>console.log('On Click inside parent called',item)}
      />
    </div>
  );
}

export default App;
