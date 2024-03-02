import Link from "next/link";
import Todo from "../comp/todo";

export default async function postPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate: 120
    }
  })
  const posts = await response.json();
  const allposts = posts.map((post)=>{
    return (
      <div className="bg-gray-600 m-2 p-2 rounded-xl">
          <Link href={`/posts/${post.id}`} className="">
            <h1 className="text-center text-xl text-white font-bold"> title: {post.title}</h1>
          </Link>
          <hr className="m-2" />
          <p className="text-center font-bold text-sky-400">body: {post.body}</p>
        </div>
    )
  })
  return (
    <div className="bg-gray-100">
      <h1>Post Page</h1>
      <div className="grid grid-cols-4">
        {allposts}
      </div>
    </div>
  );
}
