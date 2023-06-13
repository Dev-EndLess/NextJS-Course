import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.DATA_API_KEY as string

// * * * GET * * * //
export const GET = async (request: Request) => {
  const origin = request.headers.get('origin')

  const response = await fetch(DATA_SOURCE_URL)

  const todos: Todo[] = await response.json()
  
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json'
    }
  })
}

// * * * POST * * * //
export const POST = async (request: Request) =>  {
  const { userId, title, isCompleted }: Partial<Todo> = await request.json()

  if (!userId || !title || typeof(isCompleted) !== 'boolean') return NextResponse.json({ "message": "Missing required Data"})

  const response = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
    body: JSON.stringify({
      userId, title, isCompleted
    })
  })

  const newTodo: Todo = await response.json()

  return NextResponse.json(newTodo)
}

// * * * UPDATE * * * //
export const PUT = async (request: Request) =>  {
  const { id, userId, title, isCompleted }: Todo = await request.json()

  if (!id || !userId || !title || typeof(isCompleted) !== 'boolean') 
  return NextResponse.json({ "message": "Missing required Data"})

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
    body: JSON.stringify({
      userId, title, isCompleted
    })
  })

  const updatedTodo: Todo = await response.json()

  return NextResponse.json(updatedTodo)
}

// * * * DELETE * * * //
export const DELETE = async (request: Request) =>  {
  const { id }: Partial<Todo> = await request.json()

  if (!id) return NextResponse.json({ "message": "Todo id required"})

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    }
  })

  return NextResponse.json({ "message": `Todo ${id} Deleted` })
}