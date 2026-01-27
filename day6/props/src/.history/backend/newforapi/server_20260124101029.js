const fetchapi = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data.ger)
        {data.map((n)=>{console.log(n)})}
    }catch{error}{
        console.log(error)
    }
}
fetchapi()