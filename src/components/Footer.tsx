import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span>© 2025 <span className='text-tedx'>TEDxGLAU</span></span>
          <span>•</span>
          <span>All Rights Reserved</span>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Designed & Developed by <span className='text-tedx'>TEDxGLAU Web Team</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer