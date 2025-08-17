"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content, imageFile });
    router.push("/blogs");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Create a New Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-10 rounded-2xl shadow-2xl space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold text-lg">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 font-semibold text-lg">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here..."
              rows={8}
              required
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            ></textarea>
          </div>

          {/* Fancy Image Upload */}
          <div>
            <label className="block mb-2 font-semibold text-lg">Image</label>

            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-600 rounded-2xl cursor-pointer hover:border-indigo-500 transition-all duration-300 bg-gray-800 relative overflow-hidden"
            >
              {!preview && (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <AiOutlineCloudUpload size={50} className="mb-4" />
                  <p>Click or drag image to upload</p>
                  <p className="text-sm text-gray-500 mt-1">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              )}
              {preview && (
                <div className="relative w-full h-full">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-bold text-lg shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Create Blog
          </button>
        </form>
      </div>
    </main>
  );
}
