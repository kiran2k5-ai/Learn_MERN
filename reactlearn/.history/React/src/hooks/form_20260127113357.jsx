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
        <label htmlFor="name"></label>
      </form>
    </div>
  )
}

export default form
