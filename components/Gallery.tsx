'use client';

import React from 'react';
import { Highlight } from './ui/HeroHighlight';
import { motion } from 'framer-motion';
import { ParallaxScroll } from './ui/ParallaxScroll';

const Gallery = () => {
  const images = [
    'https://media.discordapp.net/attachments/1019697361515204679/1271408936674918491/2023-12-03_13.20.27.png?ex=66b73b58&is=66b5e9d8&hm=2206f7a164d5ec411bbfe5d7ff05e6fbe9d87c635194f9c6c897cd75b21a9969&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697216857837660/1138491883128111235/2023-08-08_20.45.34.png?ex=66b78531&is=66b633b1&hm=fb7ea645bceae803e6bc531ecf1f13d66ff8dd676055fae3054884bdec47c022&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1019697361515204679/1065696057121583174/image.png?ex=66b7ae4b&is=66b65ccb&hm=4a639eaac42495e2a82d29d44c5195a47527eef18b9f38e32e592dd2bdd008bb&=&format=webp&quality=lossless&width=1263&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1065694887476990092/Screenshot_89.png?ex=66b7ad34&is=66b65bb4&hm=83176949c1e508d9969d1436a2dc92cef9b9961df4c4c4f9e58bcf4bc561fcd0&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1065531523475972126/Screenshot_84.png?ex=66b7150f&is=66b5c38f&hm=e608a636c51e2a3ed2d8ef689417e8416040a7f0ad12e389f957fabae25d246c&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697216857837660/1100528120785817610/sad.png?ex=66b72d6e&is=66b5dbee&hm=1800883c9eae35760ac92fab252ddfddd091d503793c6092068e1fad5fd6cc10&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1019697361515204679/1131255820340953109/2023-07-19_21.29.24.png?ex=66b79015&is=66b63e95&hm=38f086689bfc22ac1174761b7059e0f4fb63ab98a67c4ef6f83184c353ef017d&=&format=webp&quality=lossless&width=593&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1101492970680750171/2023-04-28_18.26.05.png?ex=66b76444&is=66b612c4&hm=713f3a2460d49c7960bf9d5f897a6bb3dc3d84e2fe002652ee6738d458dc3764&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1101212922904051742/2023-04-27_23.55.25.png?ex=66b7b0f4&is=66b65f74&hm=6bd625af43f3f9f9ff9498bcd49cdff3b0de56f8b0a5e2cb1b7087729f4a55b9&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1131255820793946232/2023-07-19_21.30.32.png?ex=66b79015&is=66b63e95&hm=37c2e8e466c1db2fc634662ff2d13785ac97a37acdb92e5352949e03a7d4cb16&=&format=webp&quality=lossless&width=586&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1101492969913204846/2023-04-28_18.28.46.png?ex=66b76444&is=66b612c4&hm=068d808ff9ec736c3bc13fea9fafa1fa8b06e9fd5810c9b67c80205fad621573&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1131255821368578150/2023-07-19_21.31.52.png?ex=66b79015&is=66b63e95&hm=2447418920d493f3aeec16321368e0749ec686ad5f4db80309fa76adfcf3a10a&=&format=webp&quality=lossless&width=570&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1101492968541671455/2023-04-28_18.26.45.png?ex=66b76444&is=66b612c4&hm=375c7a4b8c07a63aec68c6f6644cccebc471474008fb2da6608645eb5c1818f3&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1059677630317731900/Screenshot_55.png?ex=66b789f2&is=66b63872&hm=5d152199ef6a052e6c5ce62fd62e8de07abf0cf59ec1fe71d4684bf9ee665444&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1089227359711928420/2023-03-25_22.06.37.png?ex=66b79807&is=66b64687&hm=f2ed065bf885f1ba1a24113110640a7364ad1dfa5faa5c1bdfda7daf1ac7174c&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1068102019363111032/image.png?ex=66b73485&is=66b5e305&hm=9b956272ce86d1dc54cdcba03c43719a2c76dfa87d21b8b5bb8a09b012b724f9&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1065531526613303308/Screenshot_78.png?ex=66b71510&is=66b5c390&hm=3d3b9eec66ccba536af5fe943adaf3b9b31197c4d1ac6c1acc1fed88cc905605&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1065694886508109914/Screenshot_91.png?ex=66b7ad34&is=66b65bb4&hm=7f7b57fd0baebbe10de1eeeeca9aa38dcf401b6b00bf570475b99a5f05520416&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1065531521521426472/Screenshot_87.png?ex=66b7150f&is=66b5c38f&hm=2698d91a79c5449cc2d557acabdeff800326438ecf3604055121aacb43707674&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1059677630317731900/Screenshot_55.png?ex=66b789f2&is=66b63872&hm=5d152199ef6a052e6c5ce62fd62e8de07abf0cf59ec1fe71d4684bf9ee665444&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1059677628522573824/Screenshot_60.png?ex=66b789f2&is=66b63872&hm=635e9247ac1381a1d5a78ad02bca31df3b37474b0b6c0adc07f5857ad8ffadce&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1131255823549595689/2023-07-19_21.26.38.png?ex=66b79016&is=66b63e96&hm=ee9a14011531b3783dc7f796ecdbe2146a7c52975acf0646b3d0f126933baed7&=&format=webp&quality=lossless&width=585&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1271408936024539210/2023-11-21_15.59.48.png?ex=66b73b57&is=66b5e9d7&hm=a8a319fe4605315d987063ccd1ada1def69cc3ca7bd15974e7086eb2e19ccd4f&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1271408937308131338/2023-11-26_16.30.09.png?ex=66b73b58&is=66b5e9d8&hm=8774efea03106ffd6c6f882e0271c9fbf768266346850752e98f4c164b3c61e9&=&format=webp&quality=lossless&width=1193&height=671',
    'https://cdn.discordapp.com/attachments/1050778610430136344/1271505278352752723/sb_tani.png?ex=66b79511&is=66b64391&hm=ae43f5f5fa67cc88e626f70a4061735d866183ad256bbb9b430d16306fdfdd60&',
    'https://media.discordapp.net/attachments/1050778610430136344/1271549907697668247/Screenshot_7_-_Copy.png?ex=66b7bea2&is=66b66d22&hm=8dd581ecd8bede1ef8fb81b7b4bc81cadab03d19e059a5f339af8599fb64dafa&=&format=webp&quality=lossless&width=1188&height=671',
    'https://media.discordapp.net/attachments/1050778610430136344/1271549929831006299/Screenshot_137.png?ex=66b7bea7&is=66b66d27&hm=7b6ee318345af09bb30281f01e3d677aea31cfa1bd3876bb721c0e5b5fcf5c57&=&format=webp&quality=lossless&width=1188&height=671',
    'https://media.discordapp.net/attachments/1050778610430136344/1271549930133000293/Screenshot_255.png?ex=66b7bea7&is=66b66d27&hm=6b58d77f7e3e9b7ba49b9002c4cd506581dda3cb95e4e093648066b1b92d76dd&=&format=webp&quality=lossless&width=1188&height=671',
    'https://media.discordapp.net/attachments/1050778610430136344/1271549909933494386/Screenshot_101.png?ex=66b7bea2&is=66b66d22&hm=ce7ff3cf4dff0ef4cb1909cb1e28e4583fbb91db1c01d0dd6d90ec89e9118e2c&=&format=webp&quality=lossless&width=1188&height=671',
    'https://media.discordapp.net/attachments/1050778610430136344/1271549908251443210/Screenshot_27.png?ex=66b7bea2&is=66b66d22&hm=af8a6404b32f6ea68cc6fe3188f90ae4d33ef10aae24496240ace46439f456ea&=&format=webp&quality=lossless&width=1188&height=671',
    'https://media.discordapp.net/attachments/1050778610430136344/1157894635021144074/minesteal_end.png?ex=66b79329&is=66b641a9&hm=b6cc0bbe2425578b204a2f1b921ce00f9d88a728a13c24a6e5b33ae54bcb5599&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1050778610430136344/1159329903443976324/day12.png?ex=66b785dc&is=66b6345c&hm=57f5686b3eab7fc927f75d9d1768e623533797f8511976b1914e7f7dd87a58ca&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1095348942788644925/1161880442941747250/2023-10-11_19.56.13.png?ex=66b792bc&is=66b6413c&hm=14ccd57daa980855dfa2e067299f5cb8d85a01bc748f1fbe8cf0c0d51f836312&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1164890750232834118/1258091844986732554/2024-07-03_18.30.41.png?ex=66b79056&is=66b63ed6&hm=62e4af5e08a8514124569b864b42699283f2fd93ddf8022dcfc61c2ccec718c6&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1164890750232834118/1258091845796499486/2024-07-03_18.31.12.png?ex=66b79056&is=66b63ed6&hm=5e4b651e6c981747c57d945b9f0a90dd4e4feabcd47ab863da239bd93603d2c2&=&format=webp&quality=lossless&width=1193&height=671',
  ];

  return (
    <div className='w-full pt-36'>
      <div className='py-10'>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className='text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
          A Glimpse Into Our{' '}
          <Highlight className='text-black dark:text-white '>
            Minecraft Adventures !
          </Highlight>
        </motion.h1>
      </div>

      <h2 className='uppercase tracking-wider text-xs text-center text-cyan-50 pb-8 md:hidden block'>
        Click on the images to view them in full screen.
      </h2>
      <ParallaxScroll
        images={images}
        className='parallax-scroll'
      />
    </div>
  );
};

export default Gallery;
