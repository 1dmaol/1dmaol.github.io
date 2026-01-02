export const Button = ({ icon = null, title = null, onClick, className, variant }) => {

	switch (variant) {
		case "small":
			return (
				<div onClick={onClick} className={"bg-white dark:bg-slate-800 rounded-full p-2 px-3 hover:scale-105 transition cursor-pointer shadow-lg items-center justify-center gap-2 flex" + (className ? " " + className : "")}>
					{title && <span className="text-xs font-[500]">
						{title}
					</span>}
					{icon}
				</div>
			)
		case "secondary-small":
			return (
				<div onClick={onClick} className={"bg-slate-100 dark:bg-slate-700 rounded-full p-2 px-3 hover:scale-105 transition cursor-pointer shadow-lg items-center justify-center gap-2 flex" + (className ? " " + className : "")}>
					{title && <span className="text-xs font-[500]">
						{title}
					</span>}
					{icon}
				</div>
			)
		case "secondary":
			return (
				<div onClick={onClick} className={"bg-slate-100 dark:bg-slate-700 rounded-full p-2 px-4 hover:scale-105 transition cursor-pointer shadow-lg items-center justify-center gap-2 flex" + (className ? " " + className : "")}>
					{title && <span className="text-md font-[500]">
						{title}
					</span>}
					{icon}
				</div>
			)
		case "tertiary":
			return (
				<div onClick={onClick} className={"p-2 px-4 opacity-70 cursor-pointer items-center justify-center gap-2 flex underline" + (className ? " " + className : "")}>
					{title && <span className="text-md font-[500]">
						{title}
					</span>}
					{icon}
				</div>
			)
		case "tertiary-small":
			return (
				<div onClick={onClick} className={"p-2 px-3 opacity-70 cursor-pointer items-center justify-center gap-2 flex underline" + (className ? " " + className : "")}>
					{title && <span className="text-sm font-[500]">
						{title}
					</span>}
					{icon}
				</div>
			)
		default:
			return (
				<div onClick={onClick} className={"bg-white dark:bg-slate-800 rounded-full p-2 px-4 hover:scale-105 transition cursor-pointer shadow-lg items-center justify-center gap-2 flex" + (className ? " " + className : "")}>
					{title && <span className="text-md font-[500]">
						{title}
					</span>}
					{icon}
				</div>
			)
	}
}