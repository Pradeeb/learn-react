import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content'
import { createContext, useState } from 'react';
import UseStateLearn from './components/UseStateLearn';

export let userContext=createContext();                        {/*Use context api use state pass*/}

function App() {

  let [user,setUser] = useState({  
    name:"valan",
    age:25,
    email:"valan@emai.com"
  });                                                           {/*Use context api use state pass*/}

  

  return (
    <div className='flex justify-center '> 
      <userContext.Provider value={{user}}>                      {/*Use context api use state pass*/}
      <div className='w-1/2 mx-auto border-2'>
        <Header user={user} />                                   {/*user={user} this is props */} 
        {/* <Content user={user} /> */}
        <UseStateLearn/>
        <Footer user={user} />
      </div>
      </userContext.Provider>
    </div>
  )
}

export default App
