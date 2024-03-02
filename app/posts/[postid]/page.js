import PostDetails from "@/app/comp/postDetail";
import { Suspense } from "react";
export default async function postID({params}){  
  const postId = params.postid;
  return (
    <div>
      <h1 className="">Post Detail</h1>
      <Suspense fallback={
        <div className="flex justify-center items-center text-xl text-sky-400 font-serif font-bold">
          Loading...
        </div>
      }>
        <PostDetails postId={postId}/>
      </Suspense>
    </div>
  )
}