
async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {

  })

  if(!response.ok) {
    console.log('Data fetch Failed')
  }

  return response.json()

}

export default getAllUsers
