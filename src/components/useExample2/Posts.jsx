import { use, Suspense } from 'react';
const createResource = (asyncFn)=>{
  const promise = asyncFn();
return {
  read: () => use(promise),
}
}

    const fetchPosts = createResource(  async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       return await res.json();

      } catch (error) {
        console.error(error);
      }
    }
  )
const PostItems = () => {
const posts = fetchPosts.read()

  return (
    <ul>  



      {posts.map((post) => (
        <div key={post.id} className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
          <h2 className='text-xl font-bold'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

const Posts = () => { 

  return  <Suspense fallback={<p>Loading...</p>}>
            <PostItems/>
  </Suspense>
};

export { Posts as UseExample2 };
