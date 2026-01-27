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
        <input type="text" name="name" value={form.name} />
        <label htmlFor="email">email:</label>
        <input type="text" name="email" value={form.email} />
        <label htmlFor="aage">aage:</label>
        <input type="text" aage="aage" value={form.aage} />
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} />
      </form>
    </div>
  )
}

export default form
