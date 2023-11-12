import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Homepage from './components/Home/Homepage';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WorkExp from './components/WorkExp/WorkExp';

function App() {
  return (
    <div className='h-screen w-full bg-[#123456] overflow-y-auto'>
      <Homepage />
      <Projects />
      <WorkExp />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
