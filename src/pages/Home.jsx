import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

  return (
    <main className="flex justify-center items-center">
      <div className="max-w-[1000px] m-[2rem] px-auto py-[2rem] space-y-8">
        <h1 className="text-white text-6xl font-semibold text-center">
          Últimos posts
        </h1>
        {posts.length === 0 ? (
          <p className="text-gray-400">Carregando...</p>
        ) : (
          posts.map((post) => (
            <div className="text-white border-b-2 py-8 space-y-4" key={post.id}>
              <h2 className="text-4xl">{capitalizeFirstLetter(post.title)}</h2>
              <p className="text-2xl font-extralight">{capitalizeFirstLetter(post.body)}</p>
              <Link
                to={`/posts/${post.id}`}
                className="text-gray-100 hover:underline underline-offset-2 hover:texte-white hover:cursor-pointer"
              >
                Ler mais
              </Link>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
