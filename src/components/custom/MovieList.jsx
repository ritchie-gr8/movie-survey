import React from "react";

const MovieList = ({ formData, handleOnChange, movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <label
          key={index}
          className="flex items-start p-3 rounded-lg hover:bg-violet-50 cursor-pointer transition-colors"
        >
          <input
            type="radio"
            name="movie"
            checked={formData.selectedMovie === movie.title}
            onChange={() => handleOnChange(movie.title)}
            className="mt-1 text-violet-600 focus:ring-violet-500"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-800">{movie.title}</p>
            <p className="text-sm text-gray-600">Director: {movie.director}</p>
          </div>
        </label>
      ))}
    </>
  );
};

export default MovieList;
