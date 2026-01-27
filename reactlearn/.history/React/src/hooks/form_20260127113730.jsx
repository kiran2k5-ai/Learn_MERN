import { useState,React } from "react"

const form = () => {
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        age : "",
        dept : ""
    })
    const handleChange = () => {}
    const handleSubmit = () => {}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange}/><br />
        <label htmlFor="email">email:</label>
        <input type="text" name="email" value={form.email} onChange={handleChange}/><br />
        <label htmlFor="age">age:</label>
        <input type="text" name="age" value={form.age} onChange={handleChange}/><br />
        <label htmlFor="dept">dept:</label>
        <input type="text" name="dept" value={form.dept} onChange={handleChange}/><br />
        <button type="submit"></Sub></button>
      </form>
    </div>
  )
}

export default form
