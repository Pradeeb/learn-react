import { useState } from "react";

function LearnMyform() {

    //******************************  Single input **********************/
    const [name, setName] = useState("");

    function handleSubmit(x) {
        x.preventDefault();  //stop reload after submit its must
        console.log("Form submited" , name)
    }

    //******************************  multi input **********************/
 
    const [user,setUser]=useState({phone:"+91"})

    function handleSubmitTwo(x){
        x.preventDefault();
        console.log("User detail => ",user)
    }

    //code simplyfy 
    function inputValueHandle(x){
        const name=x.target.name;
        const value=x.target.value;

        setUser((previousValue)=>{
            return{ ...previousValue,[name]:value}
        })
    }


    return (
        <div>
            <p>*************************this is FORM section**************************</p>
            <h4>Single input form</h4>
            <form onSubmit={handleSubmit}> {/*onSbmit its use for submit form */}
                <label>enter your name <input type="text" onChange={(x) => { setName(x.target.value) }} /></label>
                <br />
                <input type="submit" value="submit" />{/*form must use submit button*/}
            </form>

            <h4>multi input form input form</h4>
            <form onSubmit={handleSubmitTwo}> {/*onSbmit its use for submit form */}
                {/* <label>enter your name <input type="text" onChange={(x) => { setUser( (previusValue)=>{ return{...previusValue,name: x.target.value}}) }} /></label><br/>
                 <label>enter your age <input type="text" onChange={(x) => { setUser((previusValue)=>{ return {...previusValue,age: x.target.value}}) }} /></label><br/>
                <label>enter your mail <input type="text" onChange={(x) => { setUser((previusValue)=>{return {...previusValue,mail: x.target.value}}) }} /></label>
               */}
 
               {/* form value get smplyfy compare above code */}
                <label>enter your name <input type="text" name="name" onChange={inputValueHandle} /></label><br/>
                <label>enter your age <input type="text" name="age" onChange={inputValueHandle} /></label><br/>
                <label>enter your mail <input type="text" name="mail"  onChange={inputValueHandle} /></label><br/>
                <label>enter your mobile no <input type="text" name="phone"  onChange={inputValueHandle} value={user.phone} /></label><br/>
                {/* input formate options */}
                <label>chose Yes or No<select name="show"  onChange={inputValueHandle}>
                   <option value="">Chose Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                    </select></label>
                <br />
                <input type="submit" value="submit" />{/*form must use submit button*/}
            </form>
        </div>
    );
}

export default LearnMyform; 