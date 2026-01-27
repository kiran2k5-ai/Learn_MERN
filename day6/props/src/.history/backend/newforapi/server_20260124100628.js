const fetchapi = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/user')
        const data = await res.json()
        console.log(data)
        {data.map((n)=>{console.log(n)})}
    }catch{error}{
        console.log(error)
    }
}