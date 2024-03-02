export const metadata = {
  title: 'Post Page'
}

import Link from "next/link"

export default function layout({children}){
  return (
    <div className="">
      <Link href={"/posts"}>
      <div className="bg-gray-500 inline-block p-2 m-2 border rounded-r-full text-white font-bold hover:border-sky-400">
        posts
      </div>
      </Link>
      <div>
        {children}
      </div>
    </div>
  )
}