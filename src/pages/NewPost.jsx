import blogFetche from "../axios/config";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [body, setBody] =useState("")

  const createPost = async (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      userId: 1,
    }

    await blogFetche.post("/posts", {
      body: post,
    })

    navigate("/")
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-950 p-4 space-y-8">
      <h2 className="text-gray-200 text-5xl font-bold my-16">
        Criar Novo Post:
      </h2>
      <form
        className="text-white flex flex-col gap-4 w-full max-w-md border-1 px-4 py-9 space-y-5 rounded-2xl"
        onSubmit={async (e) => createPost(e)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="bg-gray-200 text-black rounded-md py-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            id="content"
            name="content"
            required
            className="bg-gray-200 text-black rounded-md py-2"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
        >
          Criar Post
        </button>
      </form>
    </main>
  );
};

export default NewPost;
