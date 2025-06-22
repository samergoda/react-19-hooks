import { use, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// this is first example of using use() hook and can use reactQuery instead of this basic function
// const createResource = (asyncFn) => {
//   const promise = asyncFn();
//   return {
//      read: () => use(promise),
//   };
// };

const Joke = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>}>
        <JokeItem />
      </Suspense>
    </ErrorBoundary>
  );
};

// this is second example with throw Error to catch error in ErrorBoundary
const jokeResource = fetch("https://api.chucknorris.io/jokes/random").then((res) => {
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
});

const JokeItem = () => {
  const joke = use(jokeResource);
  console.log(joke);
  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{joke.value}</h2>
    </div>
  );
};

export { Joke as UseExample1 };
