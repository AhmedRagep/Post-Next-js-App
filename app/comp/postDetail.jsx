
export default async function PostDetails({postId}){ 
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
    next:{
      revalidate: 120
    }
  })
  const post = await response.json();
  return (
    <div>
      <div className="flex justify-center w-full h-full">
        <div className="p-4 m-4 grid-rows bg-sky-400 w-1/2 h-[50vh] border-sky-800 rounded-xl shadow-xl shadow-blue-500 hover:shadow-xl hover:shadow-blue-700">
          <h1 className="m-2 font-bold text-xl text-gray-100 text-center">Title : {post.title}</h1>
          <hr className="m-5"/>
          <p className="m-2 text-lg font-bold font-serif">Body: {post.body}</p>
        </div>
      </div>
    </div>
  )
}