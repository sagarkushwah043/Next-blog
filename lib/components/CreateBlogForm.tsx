"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onAddBlog: (blog: { id: string; title: string; content: string; image?: string }) => void;
}

export default function CreateBlogForm({ onAddBlog }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new blog object
    const newBlog = {
      id: uuidv4(), // generate unique id
      title,
      content,
      image: image || undefined,
    };

    onAddBlog(newBlog);

    // Reset form
    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>

      <label className="block mb-2 font-medium">Title</label>
      <input
        type="text"
        className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label className="block mb-2 font-medium">Content</label>
      <textarea
        className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <label className="block mb-2 font-medium">Image URL</label>
      <input
        type="text"
        className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full font-medium transition"
      >
        Submit
      </button>
    </form>
  );
}
