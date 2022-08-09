import Video from './Video'

function Videos() {
	return (
		<div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] my-12 mx-auto justify-items-center gap-5 gap-y-5">
			<Video />
			<Video />
			<Video />
			<Video />
			<Video />
			<Video />
			<Video />
		</div>
	)
}

export default Videos