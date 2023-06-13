export default async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) return undefined
    // console.log('Data fetch Failed')

  return response.json()

}
