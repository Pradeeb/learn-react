import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content'
import { createContext, useState } from 'react';
import UseStateLearn from './components/UseStateLearn';
import ReducerLearn from'./components/ReducerLearn'
import Test from './components/Test';
import UseEffectLearn from './components/UseEffectLearn'

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
        {/* <UseStateLearn/> */}
        {/* <ReducerLearn/> */}
        {/* <Test/> */}
        <UseEffectLearn/>
        <Footer user={user} />
      </div>
      </userContext.Provider>
    </div>
  )
}

export default App
