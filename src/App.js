import './App.css';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import HeroSectionComponent from './components/HeroSectionComponent';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div className='flex flex-col gap-10 justify-center'>
      <HeroSection/>
      <Slider/>
      <HeroSectionComponent/>
      <HowItWorks/>
    </div>
  )
}