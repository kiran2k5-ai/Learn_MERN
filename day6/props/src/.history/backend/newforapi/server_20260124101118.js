const fetchapi = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data.geo)
        {data.map((geo)=>{console.log(geo)})}
    }catch{error}{
        console.log(error)
    }
}
fetchapi()