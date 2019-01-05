import ftloadCover from './img/covers/for-the-love-of-a-dog.jpg'
import tlcCover from './img/covers/the-love-child.jpg'
import bikyCover from './img/covers/before-i-knew-you.jpg'
import lbCover from './img/covers/life-begins.jpg'
import tsrolCover from './img/covers/the-simple-rules-of-love.jpg'
import rlCover from './img/covers/relative-love.jpg'
import sahCover from './img/covers/sisters-&-husbands.jpg'
import afmCover from './img/covers/a-family-man.jpg'
import tlCover from './img/covers/the-lover.png'
import slCover from './img/covers/single-lives.jpg'
import mgCover from './img/covers/marriage-games.jpg'
import tgCover from './img/covers/the-grandmother.jpg'
import acosCover from './img/covers/a-cast-of-smiles.jpg'
import asaCover from './img/covers/a-summer-affair.jpg'
import wogCover from './img/covers/walls-of-glass.jpg'
import aaCover from './img/covers/alice-alone.jpg'

export const books = {
  'for-the-love-of-a-dog': {
    title: 'For the Love of a Dog',
    id: 'for-the-love-of-a-dog',
    link: '/books/for-the-love-of-a-dog',
    color: '#e1482d',
    coverImage: ftloadCover,
    options: [
      {type: 'HEAD_OF_ZEUS', url: 'http://headofzeus.com/books/love-dog'},
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/1788542924'},
    ],
  },

  'the-love-child': {
    title: 'The Love Child',
    id: 'the-love-child',
    link: '/books/the-love-child',
    color: '#d05d31',
    coverImage: tlcCover,
    options: [
      {
        type: 'PENGUIN',
        url: 'https://www.penguin.co.uk/books/179105/the-love-child/',
      },
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0718192346'},
    ],
  },

  'before-i-knew-you': {
    title: 'Before I Knew You',
    id: 'before-i-knew-you',
    link: '/books/before-i-knew-you',
    color: '#46556a',
    coverImage: bikyCover,
    options: [
      {
        type: 'PENGUIN',
        url: 'https://www.penguin.co.uk/books/56780/before-i-knew-you/',
      },
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141039949'},
    ],
  },

  'life-begins': {
    title: 'Life Begins',
    id: 'life-begins',
    link: '/books/life-begins',
    color: '#c3405f',
    coverImage: lbCover,
    options: [
      {
        type: 'PENGUIN',
        url: 'https://www.penguin.co.uk/books/55361/life-begins/',
      },
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141021837'},
    ],
  },

  'the-simple-rules-of-love': {
    title: 'The Simple Rules of Love',
    id: 'the-simple-rules-of-love',
    link: '/books/the-simple-rules-of-love',
    color: '#248dab',
    coverImage: tsrolCover,
    options: [
      {
        type: 'PENGUIN',
        url: 'https://www.penguin.co.uk/books/55360/the-simple-rules-of-love/',
      },
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141021829'},
    ],
  },

  'relative-love': {
    title: 'Relative Love',
    id: 'relative-love',
    link: '/books/relative-love',
    color: '#df2f55',
    coverImage: rlCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBVO'}],
  },

  'sisters-and-husbands': {
    title: 'Sisters & Husbands',
    id: 'sisters-and-husbands',
    link: '/books/sisters-and-husbands',
    color: '#473a89',
    coverImage: sahCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340770120'}],
  },

  'a-family-man': {
    title: 'A Family Man',
    id: 'a-family-man',
    link: '/books/a-family-man',
    color: '#33ce4f',
    coverImage: afmCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBP0'}],
  },

  'the-lover': {
    title: 'The Lover',
    id: 'the-lover',
    link: '/books/the-lover',
    color: '#fbbb01',
    coverImage: tlCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00Q8NUXI2'}],
  },

  'single-lives': {
    title: 'Single Lives',
    id: 'single-lives',
    link: '/books/single-lives',
    color: '#e72104',
    coverImage: slCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/034071266X'}],
  },

  'marriage-games': {
    title: 'Marriage Games',
    id: 'marriage-games',
    link: '/books/marriage-games',
    color: '#dc8d4b',
    coverImage: mgCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340671521'}],
  },

  'the-godmother': {
    title: 'The Godmother',
    id: 'the-godmother',
    link: '/books/the-godmother',
    color: '#b5a2fe',
    coverImage: tgCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340671505'}],
  },

  'a-cast-of-smiles': {
    title: 'A Cast of Smiles',
    id: 'a-cast-of-smiles',
    link: '/books/a-cast-of-smiles',
    color: '#d69aa2',
    coverImage: acosCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340624493'}],
  },

  'a-summer-affair': {
    title: 'A Summer Affair',
    id: 'a-summer-affair',
    link: '/books/a-summer-affair',
    color: '#bf2525',
    coverImage: asaCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340623411'}],
  },

  'walls-of-glass': {
    title: 'Walls of Glass',
    id: 'walls-of-glass',
    link: '/books/walls-of-glass',
    color: '#5f9be4',
    coverImage: wogCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340623403'}],
  },

  'alice-alone': {
    title: 'Alice Alone',
    id: 'alice-alone',
    link: '/books/alice-alone',
    color: '#c6b2ce',
    coverImage: aaCover,
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340624485'}],
  },
}

export const metaDescriptions = {
  home:
    'Meet me, Amanda Brookfield and my page - turning emotional bestselling novels. My latest, ‘For the Love of a Dog’, is a poignant, uplifting memoir about finding happiness after divorce. @ABrookfield1',
  books:
    'My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope.',
  author:
    'Read about my personal life-story and how I became a bestselling Penguin novelist. Discover the truth behind my literary inspirations and my private fears. Learn some secret writing tips.',
  blog:
    'My blog is a welcoming space where I share candid, funny real-life experiences and thoughts about my personal struggles and milestones, as well as issues we all face in our everyday lives.',
  events:
    'Get up-to-date news of my latest book events and public appearances. Come and meet me and my amazing dog, Mabel, for signings of my new memoir bestseller ‘For the Love of a Dog.’',
}
export const articles = [
  {
    title: 'How I Found My Voice',
    link: '/books/articles/how-i-found-my-voice',
  },
  {title: 'Under One Roof', link: '/books/articles/under-one-roof'},
  {title: 'Losing My Father', link: '/books/articles/losing-my-father'},
  {
    title: 'Gap Year - A Mother’s Story',
    link: '/books/articles/gap-year-a-mothers-story',
  },
]
export const shortStories = [
  {
    title: 'The House Sitter',
    link: '/books/short-stories/the-house-sitter',
  },
  {title: 'Afterlife', link: '/books/short-stories/afterlife'},
  {
    title: 'The Farewell',
    link: '/books/short-stories/the-farewell',
  },
  {
    title: 'Guardian Angel',
    link: '/books/short-stories/guardian-angel',
  },
]
export const publishers = {
  // PENGUIN: {
  //   name: 'Penguin',
  //   logo: pubPenguin,
  // },
  // AMAZON: {
  //   name: 'Amazon',
  //   logo: pubAmazon,
  // },
  // HEAD_OF_ZEUS: {
  //   name: 'Head of Zeus',
  //   logo: pubHeadOfZeus,
  // },
}
