import About from '@/components/About';
import ContentCreators from '@/components/ContentCreators';
import { DiscordScroll } from '@/components/DiscordScroll';
import Ending from '@/components/Ending';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import MinecraftServer from '@/components/MinecraftServer';
export default function Home() {
  return (
    <main
      className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'
      style={{ backgroundColor: '#f7eeef' }}>
      <div className='max-w-7xl w-full '>
        <Hero />
        {/* <About />
        <MinecraftServer />
        <Gallery />
        <ContentCreators />
        <DiscordScroll />
        <Ending /> */}
      </div>
    </main>
  );
}
