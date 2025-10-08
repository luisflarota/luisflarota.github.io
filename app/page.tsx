"use client";

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [showLuna, setShowLuna] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header with picture */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mb-6">
          <Image
            src="final.png"
            alt="Luis Larota"
            width={120}
            height={120}
            className="rounded-lg w-24 h-24 sm:w-32 sm:h-32 object-cover"
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Luis Larota</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
              <a href="mailto:fernando.larota@gmail.com" className="hover:text-blue-400 transition-colors" title="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/luisflarota" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/lflarota/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/luisflarota" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="X (Twitter)">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <Link href="/kindle-library" className="hover:text-blue-400 transition-colors" title="Kindle Library">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </Link>
              <Link href="/posts" className="hover:text-blue-400 transition-colors" title="Posts">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          from mining rocks in peru to mining data! now building, refactoring and cleaning up code repos (yeah, with ai) 
          for supply chain at tesla. live in sf with my sister and 
          brother-in-law (they live with me, not the other way) and <span 
            className="cursor-pointer hover:underline relative inline-block animate-pulse hover:animate-none" 
            onMouseEnter={() => setShowLuna(true)}
            onMouseLeave={() => setShowLuna(false)}
            onClick={() => setShowLuna(!showLuna)}
          >luna</span>. <span className="text-green-400">teach me how to package macOS apps with embedded LLMs (open weights) while keeping the DMG under 50MB for efficient distribution!</span>
        </p>
        <p className="text-sm text-gray-300 mt-4">
          <span className="text-green-400 font-bold">also about me:</span> my initials = LLM 
        </p>
        
        {/* Luna Image Tooltip */}
        {showLuna && (
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/luna.jpeg"
              alt="Luna the dog"
              width={1000}
              height={1000}
              className="rounded-lg shadow-lg border-2 border-gray-600"
            />
          </div>
        )}
      </div>

      {/* Experience - Responsive Timeline */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Experience</h2>
        
        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-600"></div>
          <div className="flex justify-between items-start">
            <div className="relative flex flex-col items-center w-1/5">
              <div className="w-4 h-4 bg-white border-2 border-gray-600 rounded-full mb-4"></div>
              <div className="text-center">
                <h3 className="font-bold text-sm"><a href="https://tesla.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Tesla Inc</a></h3>
                <p className="text-gray-400 text-xs">SDE</p>
                <p className="text-xs text-gray-500">Feb 2024 - Present</p>
              </div>
            </div>
            
            <div className="relative flex flex-col items-center w-1/5">
              <div className="w-4 h-4 bg-white border-2 border-gray-600 rounded-full mb-4"></div>
              <div className="text-center">
                <h3 className="font-bold text-sm"><a href="https://tesla.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Tesla Inc</a></h3>
                <p className="text-gray-400 text-xs">Battery Responsible Sourcing Intern</p>
                <p className="text-xs text-gray-500">Sept 2023 - Dec 2023</p>
              </div>
            </div>
            
            <div className="relative flex flex-col items-center w-1/5">
              <div className="w-4 h-4 bg-white border-2 border-gray-600 rounded-full mb-4"></div>
              <div className="text-center">
                <h3 className="font-bold text-sm"><a href="https://riotinto.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Rio Tinto</a></h3>
                <p className="text-gray-400 text-xs">Data Engineering Intern</p>
                <p className="text-xs text-gray-500">June 2023 - Aug 2023</p>
              </div>
            </div>
            
            <div className="relative flex flex-col items-center w-1/5">
              <div className="w-4 h-4 bg-white border-2 border-gray-600 rounded-full mb-4"></div>
              <div className="text-center">
                <h3 className="font-bold text-sm"><a href="https://sdsmt.edu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">South Dakota School of Mines & Technology</a></h3>
                <p className="text-gray-400 text-xs">MSc. in Mining Engineering</p>
                <p className="text-xs text-gray-500">Jan 2022 - June 2023</p>
              </div>
            </div>
            
            <div className="relative flex flex-col items-center w-1/5">
              <div className="w-4 h-4 bg-white border-2 border-gray-600 rounded-full mb-4"></div>
              <div className="text-center">
                <h3 className="font-bold text-sm"><a href="http://timining.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">TiMining</a></h3>
                <p className="text-gray-400 text-xs">Data Engineer</p>
                <p className="text-xs text-gray-500">Nov 2020 - Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          <div className="space-y-6">
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full"></div>
              <div className="ml-8">
                <h3 className="font-bold text-base"><a href="https://tesla.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Tesla Inc</a></h3>
                <p className="text-gray-400 text-sm">SDE</p>
                <p className="text-sm text-gray-500">Feb 2024 - Present</p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full"></div>
              <div className="ml-8">
                <h3 className="font-bold text-base"><a href="https://tesla.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Tesla Inc</a></h3>
                <p className="text-gray-400 text-sm">Battery Responsible Sourcing Intern</p>
                <p className="text-sm text-gray-500">Sept 2023 - Dec 2023</p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full"></div>
              <div className="ml-8">
                <h3 className="font-bold text-base"><a href="https://riotinto.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Rio Tinto</a></h3>
                <p className="text-gray-400 text-sm">Data Engineering Intern</p>
                <p className="text-sm text-gray-500">June 2023 - Aug 2023</p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full"></div>
              <div className="ml-8">
                <h3 className="font-bold text-base"><a href="https://sdsmt.edu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">South Dakota School of Mines & Technology</a></h3>
                <p className="text-gray-400 text-sm">MSc. in Mining Engineering</p>
                <p className="text-sm text-gray-500">Jan 2022 - June 2023</p>
              </div>
            </div>
            
            <div className="relative flex items-start">
              <div className="absolute left-2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full"></div>
              <div className="ml-8">
                <h3 className="font-bold text-base"><a href="http://timining.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">TiMining</a></h3>
                <p className="text-gray-400 text-sm">Data Engineer</p>
                <p className="text-sm text-gray-500">Nov 2020 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-500 pt-6 sm:pt-8 border-t border-gray-800">
        <p className="text-center sm:text-left">luis larota | fernando.larota@gmail.com</p>
      </footer>
    </div>
  )
}