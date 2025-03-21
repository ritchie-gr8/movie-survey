import React from "react";

const MovieSubmittedScreen = ({ submittedData, handleStartOver }) => {
  return (
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
      {/* Confirmation Content */}
      <div className="p-6 space-y-6 py-6">
        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
          <div className="text-lg font-medium text-green-800 flex items-center gap-2 mb-4">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-green-700 font-medium">ส่งแบบสำรวจสำเร็จ!</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <p className="text-sm font-medium text-gray-500">ชื่อ</p>
              <p className="text-sm text-gray-800 col-span-2">
                {submittedData.name}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <p className="text-sm font-medium text-gray-500">อีเมล</p>
              <p className="text-sm text-gray-800 col-span-2">
                {submittedData.email}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <p className="text-sm font-medium text-gray-500">หนังที่เลือก</p>
              <p className="text-sm font-medium text-purple-700 col-span-2">
                {submittedData.selectedMovie}
              </p>
            </div>
            {submittedData.comment && (
              <div className="mt-4 pt-4 border-t border-[#E5E5E5] w-full">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  ความคิดเห็น:
                </p>
                <p className="text-sm text-gray-800 break-words whitespace-pre-wrap overflow-hidden max-w-full">
                  {submittedData.comment}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Action Button */}
      <div className="px-6 py-4 pt-0 bg-gray-50">
        <button
          type="button"
          onClick={handleStartOver}
          className="w-full px-4 py-2 border border-gray-800 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition flex items-center justify-center space-x-1"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          <span>ทำแบบสำรวจใหม่</span>
        </button>
      </div>
    </div>
  );
};

export default MovieSubmittedScreen;
