import { useState } from 'react'
import './App.css'

function App() {
  const [papaCream, setPapaCream] = useState(true)
  return (
    <div className="flex h-dvh w-dvw place-content-center">
      <div className="w-[240px] text-center">
        <h1 className="mb-5 text-2xl">Welcome to KOTH.WORLD!</h1>
        {papaCream ? (
          <img src="/pfp.jpg" className="mb-5 border-4 border-b-20 border-white shadow-xl" />
        ) : (
          <img src="/papa-cream.jpg" className="mb-5 border-4 border-b-20 border-white shadow-xl" />
        )}

        <p className="mb-5">
          The King rises as the sun sets on our daylight dystopia. The Hole is open and taking applications. Look within
          and see.
        </p>
        <ul>
          <li className="mb-2">
            <a
              className="block border border-white bg-black p-1 text-xl text-[#FFFF00] underline hover:bg-white hover:text-black"
              href="https://www.instagram.com/koth.world/"
            >
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a
              className="block border border-white bg-black p-1 text-xl text-[#FFFF00] underline hover:bg-white hover:text-black"
              href="https://soundcloud.com/kingofthehole"
            >
              Soundcloud
            </a>
          </li>
          <li>
            <button
              className="block w-full cursor-help border border-white bg-black p-1 text-xl text-[#FFFF00] underline hover:bg-white hover:text-black"
              onClick={() => setPapaCream(!papaCream)}
            >
              {papaCream ? 'Where is Papa Cream?' : 'Where is King of the Hole?'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
