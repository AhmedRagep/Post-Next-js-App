import Link from "next/link"

export const metadata = {
  title: 'Articale Page'
}

export default function Articals(){
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <p>Articles</p>
      <Link
        href="/posts">
        <button className="p-4 border rounded-xl transition bg-red-500 font-bold hover:bg-slate-500">Posts</button>
      </Link>
    </div>
  )
}