import { useSearchParams } from "react-router-dom"

export function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams({ n: '3' })
  
  const string = searchParams.get("name") as string

  const number = searchParams.get("n") as string

  return (
    <>
      <h1>{number}</h1>
      <input
        type="number"
        value={number}
        onChange={e => setSearchParams({ n: e.target.value, name: string })}
      />
      <input
        value={string}
        onChange={e => setSearchParams({ n: number, name: e.target.value })}
      />
    </>
  )
}