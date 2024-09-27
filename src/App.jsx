import { useState } from "react"


const App = () => {

  const [error, seterror] = useState(false)
  const [username, setusername] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(username);
    
  } 
  

  return (
    <div><h1>hello</h1>
    <form onSubmit={SubmitHandler}>
      <input onInput={(e) => e.target.value.length < 5 ? seterror(true) : seterror(false)}
       type="username" placeholder="username" name="username" onChange={(e) => setusername(e.target.value)} 
       value = {username} />
      
       {error && (
        <p>username must be minimum 5 char</p>
       )}
       <button>Submit</button>
    </form>
    </div>
  )
}

export default App