const fetchapi = async()=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        {data.map((n)=>{console.log(n)})}
    }catch{error}{
        console.log(error)
    }
}