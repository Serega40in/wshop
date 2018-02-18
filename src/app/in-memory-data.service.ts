import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Шляпка', img: 'https://i.pinimg.com/736x/d6/c2/db/d6c2db66929df76c153950fab04644bc.jpg',
       description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.', price: '3 000 руб'},
      { id: 12, name: 'Пальто', img: 'https://snowqueen.ru/media/catalog/product/cache/1/image/700x800/9df78eab33525d08d6e5fb8d27136e95/1/9/191433000_1.jpg',
       description: '', price: '3 000 руб' },
      { id: 13, name: 'Платье', img: 'https://www.famedress.ru/images/cms/thumbs/2eea1384b49cbde8bc8cb17e44cc25495a60c84f/1401_275_391.jpg',
       description: 'С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.', price: '3 000 руб' },
      { id: 15, name: 'Шарф', img: 'https://cs2.livemaster.ru/storage/bd/3e/f6aacfb54287ecf8bb0cca2db1gf--aksessuary-sharf-klassicheskij.jpg',
       description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.', price: '3 000 руб' },
      { id: 16, name: 'Кардиган', img: 'https://image01.bonprix.ru/assets/300x420/1503473765/17207425-a1aL1EJr.jpg',
       description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.', price: '3 000 руб' },
      { id: 17, name: 'Перчатки', img: 'https://cdn.vostok.ru/uploads/global/images/product/original/136-0069-01.jpg',
       description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.', price: '3 000 руб' },
      { id: 18, name: 'Сапоги', img: 'http://evagirl.ru/uploads/posts/2017-01/1483309744_2695925-f635ae49a826c0f8acc57fd9eb79b840.jpeg',
       description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.', price: '3 000 руб' },
      { id: 19, name: 'Туфли', img: 'https://img.mangus.com.ua/products/_original/kupit-tufli-na-kabluke-novye-zhenskie-modeli-2016-ot-mangus-obuv-wladna-artikul-5109redtufli-wladna-fashion-80453.jpeg',
       description: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров играет важную роль в формировании новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. С другой стороны укрепление и развитие структуры в значительной степени обуславливает создание соответствующий условий активизации. С другой стороны постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.', price: '3 000 руб' }
    ];
    return {products};
  }
}