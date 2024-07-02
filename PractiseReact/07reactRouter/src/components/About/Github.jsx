import React, { useEffect } from 'react'

function Github() {
    const [data, setData] = React.useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/AmitKumar-001')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github ID: {data.id}
        <img src={data.avatar_url} alt= "Github Image  " />
    </div>
  )
}

export default Github