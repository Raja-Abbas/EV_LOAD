import './App.css';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import HeroSectionComponent from './components/HeroSectionComponent';
import HowItWorks from './components/HowItWorks';
import Partnering from './components/Partnering';

export default function App() {
  return (
    <div className='flex flex-col gap-10 justify-center bg-gray-100'>
      <HeroSection/>
      <Slider/>
      <HeroSectionComponent/>
      <HowItWorks/>
      <Partnering/>
    </div>
  )
}