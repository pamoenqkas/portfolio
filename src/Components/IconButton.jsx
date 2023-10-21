import { useRef } from "react"
import { useState } from "react"

export default function IconButton({ children, text, color, ...props }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex-col xl:flex-row p-3 m-2 xl:p-5 text-lg xl:text-xl items-center text-center align-middle rounded-lg 
        text-white ${color || " bg-gray-600 dark:bg-gray-500 "}
      `}

      // <button className='p-5 m-2 text-2xl xl:p-3 bg-pink-500 dark:bg-gray-500 text-white dark:text-gray-100 rounded-xl'>
      //               <FaEnvelope className="m-2" /> P
      //               </button>
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="rounded-xl overflow-x-hidden transition-all duration-300 ease-out  "
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  )
}