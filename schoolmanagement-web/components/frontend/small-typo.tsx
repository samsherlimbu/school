import React from 'react'

const SmallTypo = ({title}:{title:string}) => {
  return (
    <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 mb-8 shadow-sm">
          <div className="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-rose-500"
            >
              <path
                d="M8 0L9.67316 6.32684L16 8L9.67316 9.67316L8 16L6.32684 9.67316L0 8L6.32684 6.32684L8 0Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>

  )
}

export default SmallTypo
