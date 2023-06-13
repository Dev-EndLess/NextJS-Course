import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
  params: {
      id: string
  }
}

export const GET = async (request: Request, { params: { id } }: Props) => {

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`)

  const todo: Todo = await response.json()

  if (!todo.id) return NextResponse.json({ "message": "Todo not Found" })
  
  return NextResponse.json(todo)
}