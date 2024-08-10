'use client';

import React from 'react';
import { Highlight } from './ui/HeroHighlight';
import { motion } from 'framer-motion';
import { ParallaxScroll } from './ui/ParallaxScroll';
import { FlipWords } from './ui/FlipWords';

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
    'https://media.discordapp.net/attachments/1050372114907156501/1074349627593195620/IMG_20230212_205140.jpg?ex=66b82e4f&is=66b6dccf&hm=2dbecfb05e42d48860ea5dce39e18c22fcb561041bee3ac2197e48c1e9dfd1f8&=&format=webp&width=596&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1026671707806765076/Lunar_Client_1.19.2-e39d2b1_master_04-10-2022_00_06_00.png?ex=66b81809&is=66b6c689&hm=4ace58b99899a2afcde7dfd17fb57ffc5ff934d09c9e48df77b0a4042013debd&=&format=webp&quality=lossless&width=1052&height=592',
    'https://media.discordapp.net/attachments/1019697361515204679/1026671708683386920/Lunar_Client_1.19.2-e39d2b1_master_04-10-2022_00_03_30.png?ex=66b81809&is=66b6c689&hm=ba7bdf3da338b9f90930551c6dc737517ba61e039da25d635cc24eaa31629b29&=&format=webp&quality=lossless&width=1052&height=592',
    'https://media.discordapp.net/attachments/1019697361515204679/1026671708339458068/Lunar_Client_1.19.2-e39d2b1_master_03-10-2022_23_57_32.png?ex=66b81809&is=66b6c689&hm=bc1222a25a17ca641b78aed44a072a8a056ba1f2ca5b7f9296585928791a81fd&=&format=webp&quality=lossless&width=1051&height=592',
    'https://media.discordapp.net/attachments/1019697361515204679/1025686198435463168/unknown.png?ex=66b7cdf6&is=66b67c76&hm=a68a30c841317001561705560153e6a8952e2c737901fc724a69aa60350ed7f0&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/929266906437935175/1026734506520084480/2022-10-03_13.15.47.png?ex=66b7a9c6&is=66b65846&hm=baf58e96020855b05d76975dc32b1b6f1ffb6adc178fa02640425a51d717e71e&=&format=webp&quality=lossless&width=1052&height=592',
    'https://media.discordapp.net/attachments/929266906437935175/1026734507224743937/2022-10-04_11.23.05.png?ex=66b7a9c6&is=66b65846&hm=9f03be71f5bcaeb639973c47f90992660c234cae920a32d919a0c13a84093c78&=&format=webp&quality=lossless&width=1052&height=592',
    'https://media.discordapp.net/attachments/929266906437935175/1026733413497057280/2022-10-04_11.21.35.png?ex=66b7a8c1&is=66b65741&hm=1593c0c3ec9b9a3ceae4efade55dcf681f3274f404db11a9137c30b513aceeed&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/929266906437935175/1004707551734149210/Screenshot_372.png?ex=66b7f312&is=66b6a192&hm=452de1d9e4c36bad93d0ad0506b36e94439f0356e5134f83954fd8d90b6ac8ea&=&format=webp&quality=lossless&width=1052&height=592',
    'https://media.discordapp.net/attachments/929266906437935175/935157790006190090/Screenshot_69.png?ex=66b80dcf&is=66b6bc4f&hm=f1a21598877b96b4150fbdf18313ea7fb65d2bb84fb89b37c87069d3f6f5c2a3&=&format=webp&quality=lossless&width=550&height=311',
    'https://media.discordapp.net/attachments/929266906437935175/964721004595257375/novaskin-minecraft-wallpaper_6.jpeg?ex=66b82873&is=66b6d6f3&hm=e6947cef04392270b2557c4fe16f55b8fe5a0e1f7fc80ffcbcf1eeda2446bf5d&=&format=webp&width=1052&height=592',
    'https://media.discordapp.net/attachments/929266906437935175/998067745742651423/Screenshot_480.png?ex=66b82f05&is=66b6dd85&hm=40df29a3688baa1d914a3915853af8b9c3256ac3478d3ac7fd652dd0c498193a&=&format=webp&quality=lossless&width=1048&height=592',
    'https://media.discordapp.net/attachments/929266906437935175/1004707552375869470/Screenshot_375.png?ex=66b7f313&is=66b6a193&hm=29eb813d5f2f76b8888ce543cb6a01fb816aa17a78b7c04ddaa3853eb0b101e0&=&format=webp&quality=lossless&width=1052&height=592',
    'https://media.discordapp.net/attachments/871663313560432730/874502696449749003/Screenshot_2021-08-10-08-06-15-078_com.mojang.minecraftpe.jpg?ex=66b8379a&is=66b6e61a&hm=3fa017eeaafeeb1219ccc47f110a1fca42689aa475ebe428f433385b6dcf9ce6&=&format=webp&width=1184&height=592',
    'https://cdn.discordapp.com/attachments/1019697361515204679/1073544456323731526/2023-02-10_15.31.27.png?ex=66b7e36f&is=66b691ef&hm=19499ff21973265c4168c5690be1f4a9bfc3c5a446abe538943c7949ca08aae9&',
    'https://media.discordapp.net/attachments/1019697361515204679/1074243190057603072/2023-02-11_20.08.35.png?ex=66b7cb2e&is=66b679ae&hm=3c4deaee049b88034c1b65b555b371f8823e2dfd7524dfe42cee33592e26e60b&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1070691319611138118/2023-02-02_18.33.37.png?ex=66b80e3f&is=66b6bcbf&hm=13a4bb203e3bd56242eb37ee2a7b9843676dae50cadd6bc710abf20abe92c730&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1019697361515204679/1069648859640373318/Screenshot_2023_0130_205914_com.mojang.minecraftpe.png?ex=66b837e1&is=66b6e661&hm=2b74ae0d5079a39ed6fe0fb54dd4fbaf5a946472e9d2b2ca88a0c09eb7d3d81c&=&format=webp&quality=lossless&width=324&height=350',
    'https://media.discordapp.net/attachments/1019697361515204679/1066776290176270377/IMG_5974.png?ex=66b7a7d7&is=66b65657&hm=fa2ed8e0c9125ae5278adfa3de6b4926f6153431619f58424831a43d98dbf925&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1063744005835333693/Screenshot_2023_0114_114753_com.mojang.minecraftpe.png?ex=66b7d48e&is=66b6830e&hm=7eaea926f2df7fc662e232461fd82a67be26e318c431dc30dbae576525e4d6c1&=&format=webp&quality=lossless&width=1440&height=432',
    'https://media.discordapp.net/attachments/1019697361515204679/1024349815334785075/Screenshot_20220927_212242.jpg?ex=66b8375b&is=66b6e5db&hm=c4727427c20962e6e5a9ff04499dcf780a8e9410117857e43157c17c8a9c47d9&=&format=webp&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1026499365981921290/Screenshot_20221003_194549.jpg?ex=66b82048&is=66b6cec8&hm=225ef9e32e3ad06ae14d63c0dcdf32b103400220e2a35552aa79ef9ba7bfadaa&=&format=webp',
    'https://media.discordapp.net/attachments/1019697361515204679/1027197576702853202/Screenshot_20221005_174515.jpg?ex=66b8078a&is=66b6b60a&hm=fce7032633f4406fc80fa09adbe2222aa907a591460a3447cdf1b6aab398b94c&=&format=webp',
    'https://media.discordapp.net/attachments/1019697361515204679/1027201715902107688/Screenshot_20221005_174909.jpg?ex=66b80b65&is=66b6b9e5&hm=fb9e842c41c58902e71d751854a5f82d951dff0c3783e0b3f99651804645fca5&=&format=webp',
    'https://media.discordapp.net/attachments/1019697361515204679/1027572753886351380/Screenshot_20221006_185523.png?ex=66b81373&is=66b6c1f3&hm=893fe27df071f1b066201e416376af448c62ee670375b741e1c0b57f88ba3287&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1029748051318951946/Screenshot_7.png?ex=66b8145b&is=66b6c2db&hm=35b354f13e114bd6282442fa94b899b092bb8ca5c56ac250f4d9e46d99ccb5d0&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1019697361515204679/1046434391557165056/2022-11-23_18.10.16.png?ex=66b823b8&is=66b6d238&hm=9a8e2c2d7db10f0ca6e39d0be612af5f8431a0717700c4ad73410413c6d46857&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1046434834395971684/2022-11-05_17.23.51_3.png?ex=66b82422&is=66b6d2a2&hm=da8e4abce96c10e5a698ac416bcc2895e23662aa95d691f9dffd8e9f1f13144d&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1055696982863257700/Screenshot_2022_1223_092823.jpg?ex=66b837ee&is=66b6e66e&hm=8bf6b9e2a242b8066ca15b76b849552c7ed7185bbe22226aeb70608b5aebf623&=&format=webp&width=1440&height=646',
    'https://media.discordapp.net/attachments/1019697361515204679/1059034051333324810/Screenshot_2023_0101_142943_com.mojang.minecraftpe.png?ex=66b7d591&is=66b68411&hm=4e20608f45f569a14ada28fbe042c590407f491f9ad1f7eb60b4b13fdce21dcf&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1060493854068969483/Screenshot_2023-01-05-14-20-19-519_com.mojang.minecraftpe.jpg?ex=66b7df1d&is=66b68d9d&hm=46c9c34c056128262f091466a3bdddc169083de3cf8cd2fb18f8c29cec47dba3&=&format=webp&width=1440&height=665',
    'https://media.discordapp.net/attachments/1019697361515204679/1066060261301178460/Screenshot_2023_0120_191322_com.mojang.minecraftpe.png?ex=66b7affc&is=66b65e7c&hm=6392956c2ede5dd8f606fe3ff18638f5064a7c70c7c5bc7b28e4ef299ab5535e&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1066405690576470097/2023-01-14_13.29.36.png?ex=66b848f1&is=66b6f771&hm=7e6dae01dda1513553f6b1918816510a40d62c5dd983e6a55194729f99a2d259&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1066405853298708650/2023-01-21_22.43.31.png?ex=66b84918&is=66b6f798&hm=aa6a8072f751c86cb9ab80b5f20de3df5431c57a9dff02a984f4a78733f29e46&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1067350941566763018/2023-01-24_13.20.54.png?ex=66b7c4c6&is=66b67346&hm=3890324616a58949f143a0ed6b25ec14595cb73c13c6a9583107dafef89cc161&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1069564317319581777/Screenshot_2023_0129_203457_com.mojang.minecraftpe.jpg?ex=66b7e924&is=66b697a4&hm=cc2bc3049ee4f82120788233bd1b46e52f00d281deb31137369c844654717da2&=&format=webp&width=1440&height=646',
    'https://media.discordapp.net/attachments/1019697361515204679/1069620853840543834/2023-01-30_19.40.17.png?ex=66b81dcc&is=66b6cc4c&hm=4eb37be79938ae87831b93e111045a0c12fe50202fda4b6a160ac3f69adf19b9&=&format=webp&quality=lossless&width=1193&height=671',
    'https://cdn.discordapp.com/attachments/1019697361515204679/1084746265763524648/Screenshot_2023_0313_121925_net.kdt.pojavlaunch.jpg?ex=66b7c56f&is=66b673ef&hm=0b86d9df4f9ff4838452546c9532028cb1be1197b834e8f41425b4afa207e0d3&',
    'https://media.discordapp.net/attachments/1019697361515204679/1085206253862662164/image.png?ex=66b82055&is=66b6ced5&hm=29285250d7023ab4b9f312797d0ea1dbc4d00a8ac5ccf07d2e72522e82cafee6&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1086281548891967639/IMG_20230317_184127.jpg?ex=66b81547&is=66b6c3c7&hm=fb8c62e44cc53154043272191c07c6dba9dd8c5fefc69659701a424171f69f2b&=&format=webp',
    'https://media.discordapp.net/attachments/1019697361515204679/1088459733335289906/20230323_191709.png?ex=66b818df&is=66b6c75f&hm=0a05a6fa0fe253fa9b61aa512db6d479ec2efb739d17b778de6039cbb204ae59&=&format=webp&quality=lossless&width=1440&height=645',
    'https://media.discordapp.net/attachments/1019697361515204679/1089127908230041650/2023-03-25_15.34.24.png?ex=66b7e428&is=66b692a8&hm=12cee6936241e167a3e699e95f8dad62813773fc851521e447e10bc99328cdd3&=&format=webp&quality=lossless&width=1188&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1089852191289917460/Screenshot_56.png?ex=66b7e3b2&is=66b69232&hm=dc5d659e17bab112818f953e69a3798e12c6068a91a519f96fdc9d33c9ae1ab4&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1019697361515204679/1102077493332168815/2023-04-30_09.10.44.png?ex=66b83326&is=66b6e1a6&hm=d3666839c8af227e1bcd522ce2ded9f2c64255fa791c866b32ff10b901928a4f&=&format=webp&quality=lossless&width=550&height=309',
    'https://media.discordapp.net/attachments/1019697361515204679/1101881053930590268/Screenshot_78.png?ex=66b824f3&is=66b6d373&hm=af01be47a0fa027c92a0f31c7b47e0558a34d95dd3f49da12659e8a07071e233&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1104774677408260096/Screenshot_123.png?ex=66b81fd8&is=66b6ce58&hm=11384af67861ceab389bb378544ea597f979e5683fc53de1992355f23788f50c&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1105145815984513134/2023-05-08_20.23.38.png?ex=66b827ff&is=66b6d67f&hm=3fc5a7a8f2984c51adea4b2c2967eecf5c9e5015e29b6decbe5cfafa0429d01e&=&format=webp&quality=lossless&width=550&height=291',
    'https://media.discordapp.net/attachments/1019697361515204679/1121469451620069446/1687449525120.jpg?ex=66b83711&is=66b6e591&hm=7f731ed73874db29a743cc257a05b56d724bceaa6d895f36e20fa523fa7ddd06&=&format=webp&width=1440&height=648',
    'https://media.discordapp.net/attachments/1019697361515204679/1121469629932523651/1687449552193.jpg?ex=66b8373b&is=66b6e5bb&hm=c35275273062dededf25d87e5c7e2fec7403a3a1e7429887193592560080bceb&=&format=webp&width=1440&height=644',
    'https://media.discordapp.net/attachments/1019697361515204679/1135543015956562040/image.png?ex=66b7ff98&is=66b6ae18&hm=d5f252dfc550b5b3388ccf234eac0793598071691f3c5e436001eb94b6a4499e&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1140167079513825360/Screenshot_488.png?ex=66b85757&is=66b705d7&hm=363f58264fdd1b6299b01fc8844b8a5be1dbdc1d5f71b9fc90643050e14bc0ed&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1151274965472137357/2023-09-13_03.15.38.png?ex=66b7e1dd&is=66b6905d&hm=af35a339230b425617c3918914aa141fa8ef786d836d5d13a770307ad25e3b31&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1151274966243881070/2023-09-13_03.20.43.png?ex=66b7e1dd&is=66b6905d&hm=5fc65ce58ebdb3094a7d3e811804547417c7921f4720a552ac30bd5edbe58d26&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1151274965891547307/2023-09-13_03.16.52.png?ex=66b7e1dd&is=66b6905d&hm=4d49f34f60da51a8828cab8c4118d9ff42e5f0684ff3f584a611783c43c3bae9&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1167497420624633949/image.png?ex=66b83b74&is=66b6e9f4&hm=7c7747433e2cbe595714f95b90ada572a4ea68dabeb3b81c862bd8309fe004cb&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1167498133308182640/image.png?ex=66b83c1e&is=66b6ea9e&hm=4c9c0d6431a752b5c3c21442461775d7a5a73024fa288f7ea4d35a47909ae801&=&format=webp&quality=lossless&width=1296&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1170665591414194177/1699178804681.png?ex=66b7e48a&is=66b6930a&hm=ef5b6adcb68b2e84a3dcc55e84701896f05291ecc20f672f1c94fb5fb026441f&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1170665592198545428/1699178804692.png?ex=66b7e48b&is=66b6930b&hm=35a0192e6eb3f7fd84739bd4a5d7d1afb19f46f056534ba07f53b348d156e126&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1172106075797979186/image.png?ex=66b7dc19&is=66b68a99&hm=bedf6cdca55f5761baaf432fa2fd2c207ac8da822c2e8e11de37fe12d8a2bf78&=&format=webp&quality=lossless&width=550&height=283',
    'https://cdn.discordapp.com/attachments/1019697361515204679/1172545420598181929/2023-11-10_20.png?ex=66b823c5&is=66b6d245&hm=a2234dcaf097afe66c40c922370cd79082e3667bde1fd75e4d305fa644535dc7&',
    'https://media.discordapp.net/attachments/1019697361515204679/1173138613542858752/Screenshot_2023_1112_112108.jpg?ex=66b851f9&is=66b70079&hm=1de0e48320146da61512e6b8b1f7ef0b70e341d1a78b361f84865eac1d246844&=&format=webp&width=1361&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1173153229283020902/image.png?ex=66b85f95&is=66b70e15&hm=5e3a73d21d13f63656a94e819c1053ae02621aebd24476c1f957b23fa239e6b0&=&format=webp&quality=lossless',
    'https://media.discordapp.net/attachments/1019697361515204679/1174638622310404116/Screenshot_94.png?ex=66b7d837&is=66b686b7&hm=f739d90212fd0c167f66f1252cc2745fa788086caf6898a4fb90fc6bd6ad8a74&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1215930727355514901/2023-11-21_16.11.45.png?ex=66b7c57c&is=66b673fc&hm=baa3e022425d1a1c726761d2ff70e4b26a4b998fa3ecb3ea6e1d7a1ec00ff11f&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1215930730111172718/2023-11-26_18.28.57.png?ex=66b7c57c&is=66b673fc&hm=6b0b5713fd7cdf16aa687f415f3ef70267a68be93d0a60fcf59d5a1730476e9b&=&format=webp&quality=lossless&width=1193&height=671',
    'https://media.discordapp.net/attachments/1019697361515204679/1175726911423516753/image.png?ex=66b7d943&is=66b687c3&hm=13a68d34f533ab0c4afcf32d6140418f54862dc07ca4919efb83958bf040e2ac&=&format=webp&quality=lossless&width=1183&height=671',
  ];

  const words = [
    'Infirals S1',
    'HalfHeart S1',
    'HalfHeart S2',
    'HalfHeart S3',
    'HalfHeart S4',
    'EraBlock S1',
    'EraBlock S2',
    'WinZestiers S1',
    'WinZestiers S2',
    'WinZestiers S3',
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
          Journey Through Our{' '}
          <Highlight className='text-black dark:text-white '>
            Minecraft Creations !
          </Highlight>
        </motion.h1>
      </div>

      <div className='flex items-center justify-center text-2xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 pb-4'>
        A Glimpse Of
        <FlipWords words={words} /> <br />
      </div>

      <h2 className='uppercase tracking-wider text-xs text-center text-cyan-50 pb-8 md:hidden block'>
        Click on the images to view Gallery
      </h2>
      <ParallaxScroll
        images={images}
        className='parallax-scroll'
      />
    </div>
  );
};

export default Gallery;
