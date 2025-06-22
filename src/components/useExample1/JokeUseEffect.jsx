import { use, Suspense } from "react";
const fetchJoke = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
const JokeItem = () => {
  const joke = use(fetchJoke());
  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  return (
    <Suspense>
      <JokeItem />;
    </Suspense>
  );
};
export default Joke;
