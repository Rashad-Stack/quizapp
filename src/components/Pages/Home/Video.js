import React from 'react'

function Video() {
	return (
		<a href="#!">
			<div className="w-full max-w-sm h-fit bg-white border-2 border-gray-300 rounded-md cursor-pointer p-3 hover:shadow-lg">
				<img src="https://github.com/learnwithsumit/react-quiz/blob/lesson-4/src/assets/images/3.jpg?raw=true" alt="Video title" className="w-full object-cover" />
				<p className="text-base font-semibold truncate mt-2">#23 React Hooks Bangla - Rect useReducer hook Bangla</p>
				<div className="flex justify-between pr-2">
					<p className="text-sm font-normal">10 Questions</p>
					<p className="text-sm font-normal ">Score : Not taken yet</p>
				</div>
			</div>
		</a>
	)
}

export default Video