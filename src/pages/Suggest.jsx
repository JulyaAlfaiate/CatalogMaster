import React, { useState } from 'react';

function Suggest() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('movie');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Suggestion submitted:', { title, type, description });
    // Reset form fields
    setTitle('');
    setType('movie');
    setDescription('');
    alert('Thank you for your suggestion!');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Suggest a Movie or Series</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="type" className="block mb-1">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Suggestion
        </button>
      </form>
    </div>
  );
}

export default Suggest;