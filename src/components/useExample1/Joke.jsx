import { use, Suspense } from 'react';

// Can use reactQuery instead of this basic function 
const createResource = (asyncFn) => {
  const promise = asyncFn();
  return {
    read: () => use(promise),
  };
};

const jokeResource = createResource(() =>
  fetch('https://api.chucknorris.io/jokes/random').then(res => res.json())
);

const JokeItem = () => {
  const joke = jokeResource.read();
  return (
    <div className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
      <h2 className='text-xl font-bold'>{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense
      fallback={
        <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>
      }
    >
      <JokeItem />
    </Suspense>
  );
};

export { Joke as UseExample1 };
