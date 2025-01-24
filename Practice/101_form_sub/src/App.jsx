import { useState } from 'react';
import './App.css'

function App() {

  const hitMe = () => {
    alert("Button Clicked!!!");
  }

  // const [name, setName] = useState("Masayeakh");

  const [form, setForm] = useState([]);

  let handleChange = (e) => {
    // setName(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form);
    console.log(e.target.value)
    console.log(e.target.name)
  }

  return (
    <>
      <button onClick={hitMe}>Click Me</button>

      <form >
        <label htmlFor="">First Name</label>
        <input type="text" name="firstName" value={form.firstName ? form.firstName : ""} onChange={handleChange} />

        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" value={form.lastName ? form.lastName : ""} onChange={handleChange} id="" />

        {/* <label htmlFor="">Password</label>
        <input type="password" name="" value={""} id="" /> */}

        <button>Submit</button>
      </form>

      <div>
        First Name : {form.firstName ? form.firstName : "none"}
        First Name : {form.lastName ? form.lastName : "none"}
      </div>

    </>
  )
}

export default App
