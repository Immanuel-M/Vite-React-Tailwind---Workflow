import './App.css'
import myPhoto from './assets/Clay-Profile-Photo.png'
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-4">
      
      {/*Avatar */}
      <img
        src={myPhoto}
        alt="Immanuel Morris"
        className="rounded-full w-36 h-36 mb-6"
    />  

      {/*Paragraph - 1 - Blue background */}
      <div className = "bg-blue-500 text-white p-6 rounded-lg mb-4 max-w-md">
        <p>Hi, I'm Immanuel Morris, a software developer and AI engineer based in 
          the Inland Empire. I work on AI-powered tools and systems designed to support
          students and educators in the community college space.
        </p>
      </div>  

      {/*Paragraph 2 - Different background with LinkedIn link */}
      <div className = "bg-gray-100 text-gray-800 p-6 rounded-lg max-w-md">
        <p>I'm passionate about bridging technology and education. Its an area I'm deeply commited to.
          Feel free to connect with me on <a href="https://www.linkedin.com/in/immanuel-morris-35a6611a" target="_blank" 
        className="text-blue-600 hover:underline">LinkedIn</a> to learn more about my work.</p>
      </div>
    </div>
  )
}

export default App