import { Button } from "../atoms/Button"

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={
        "grid w-full auto-rows-[12.5vh] grid-cols-3 gap-4" + " " + className
	}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  img,
  ...props
}) => (
  <div
    key={name}
    className={
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer " +
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] " + 
      // dark styles
      "dark:bg-background transform-gpu dark:bg-[#1E293B88] shadow-lg " +
      className
    }
    {...props}
  >
	<div>
		<img src={img} className="absolute opacity-15 inset-0 h-full w-full object-cover" />
	</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="text-sm text-neutral-400 line-clamp-1 text-center">{description}</p>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
