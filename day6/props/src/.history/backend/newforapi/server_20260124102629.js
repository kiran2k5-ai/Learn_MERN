const fetchapi = async()=>{
    try{
        const res = await fetch('http://localhost:5000/task/retrive')
        const data = await res.json()
        console.log(data)
    }
    catch{error{
        console.log(error)
    }
}
fetchapi()