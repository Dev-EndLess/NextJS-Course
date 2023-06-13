export default async function getUser( userId: string ) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!response.ok) undefined
  // console.log('Data Fetch Failed...')

  return response.json()
}
