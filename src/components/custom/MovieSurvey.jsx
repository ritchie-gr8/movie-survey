import React, { useState } from "react";
import { movies } from "../../constants/movies";
import MovieList from "./MovieList";
import MovieSubmittedScreen from "./MovieSubmittedScreen";

const MovieSurvey = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedMovie: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    hasNameError: false,
    hasEmailError: false,
    hasValidEmailError: false,
    hasSelectedMovieError: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMovieSelection = (movie) => {
    setFormData({
      ...formData,
      selectedMovie: movie,
    });
  };

  const handleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = {
      hasNameError: formData.name.trim().length <= 0,
      hasSelectedMovieError: formData.selectedMovie.trim().length <= 0,
      hasEmailError: formData.email.trim().length <= 0,
      hasValidEmailError: !emailRegex.test(formData.email.trim()),
    };

    setErrors(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = handleValidation();
    const hasError = Object.values(formErrors).includes(true);

    if (hasError) return;

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      selectedMovie: "",
      comment: "",
    });
  };

  const handleStartOver = () => {
    handleReset()
    setIsSubmitted(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!isSubmitted ? (
          // Survey Form
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-violet-600 py-4 px-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-8h1V5h-1v2zm-2 8h1v-2h-1v2zm-2 0h1v-2h-1v2zm-2 0h1v-2H9v2zm-2 0h1v-2H7v2z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="text-xl font-bold text-white">Movie Survey</h1>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Form Content */}
              <div className="p-6 space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="กรุณากรอกชื่อของคุณ"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition
                    ${errors.hasNameError && "border border-red-500"}`}
                  />
                  {errors.hasNameError && (
                    <p className="text-sm text-red-500 mt-1">โปรดใส่ชื่อของคุณ</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    อีเมล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition
                    ${
                      (errors.hasEmailError || errors.hasValidEmailError) &&
                      "border border-red-500"
                    }`}
                  />
                  {errors.hasEmailError ? (
                    <p className="text-sm text-red-500 mt-1">โปรดใส่อีเมลของคุณ</p>
                  ) : errors.hasValidEmailError ? (
                    <p className="text-sm text-red-500 mt-1">
                      รูปแบบอีเมลไม่ถูกต้อง
                    </p>
                  ) : null}
                </div>

                {/* Movie Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    เลือกหนังที่ชื่นชอบ <span className="text-red-500">*</span>
                  </label>

                  <div
                    className={`space-y-3 rounded-lg ${
                      errors.hasSelectedMovieError && "border border-red-500"
                    }`}
                  >
                    <MovieList
                      movies={movies}
                      formData={formData}
                      handleOnChange={handleMovieSelection}
                    />
                  </div>
                  {errors.hasSelectedMovieError && (
                    <p className="text-sm text-red-500 mt-1">
                      กรุณาเลือกหนังที่คุณชอบ
                    </p>
                  )}
                </div>

                {/* Comments */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    ความคิดเห็นเกี่ยวกับหนัง
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition"
                  ></textarea>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-gray-50 flex justify-between">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 transition flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                  <span>รีเซ็ต</span>
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                  <span>ส่งแบบสำรวจ</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <MovieSubmittedScreen
            submittedData={formData}
            handleStartOver={handleStartOver}
          />
        )}
      </div>
    </div>
  );
};

export default MovieSurvey;
