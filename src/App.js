import './App.css';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';

export default function App() {
  return (
    <div className='flex flex-col gap-10 justify-center'>
      <HeroSection/>
      <Slider/>
    </div>
  )
}