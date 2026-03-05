import React from 'react'

const Footer = () => {
  return (
    
         <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">E-Learning</h2>
            <p className="text-sm leading-relaxed">
              Building the future of the web with modern full-stack solutions and high-performance applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Project</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Interactive Newsletter Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-all active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} E-Learning Inc. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              {/* Simple Box Icon Placeholder */}
              <div className="w-5 h-5 bg-slate-700 rounded-sm hover:bg-blue-500 transition-all" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <div className="w-5 h-5 bg-slate-700 rounded-sm hover:bg-blue-500 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
