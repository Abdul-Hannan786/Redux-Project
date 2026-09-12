import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="px-10 py-4 bg-(--c2) flex items-center justify-between">
        <h2 className="text-[22px] font-semibold">Media Search</h2>
        <div className="flex items-center gap-5 text-base font-medium">
          <Link
            className="bg-(--c4) text-(--c1) active:scale-95 transition-all rounded px-4 py-1.5"
            to={"/"}
          >
            Search
          </Link>
          <Link
            className="bg-(--c4) text-(--c1) active:scale-95 transition-all rounded px-4 py-1.5"
            to={"/collection"}
          >
            Collection
          </Link>
        </div>
      </div>
  )
}

export default Header