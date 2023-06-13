async function getUserPosts( userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

  if(!response.ok) {
    console.log('Data Fetch Failed...')
  }

  return response.json()
}

export default getUserPosts
