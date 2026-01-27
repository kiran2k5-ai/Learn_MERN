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
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
        <label htmlFor="email">email:</label>
        <input type="text" name="email" value={form.email} onChange={handleChange}/>
        <label htmlFor="age">age:</label>
        <input type="text" name="age" value={form.age} />
        <label htmlFor="dept">dept:</label>
        <input type="text" name="dept" value={form.dept} />
      </form>
    </div>
  )
}

export default form
