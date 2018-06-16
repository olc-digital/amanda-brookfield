import ftloadGrid from './assets/covers/grid/For-the-Love-of-a-Dog.jpg'
import tlcGrid from './assets/covers/grid/The-Love-Child.jpg'
import bikyGrid from './assets/covers/grid/Before-I-Knew-You.jpg'
import lbGrid from './assets/covers/grid/Life-Begins.jpg'
import tsrolGrid from './assets/covers/grid/The-Simple-Rules-of-Love.jpg'
import rlGrid from './assets/covers/grid/Relative-Love.jpg'
import sahGrid from './assets/covers/grid/Sisters-and-Husbands.jpg'
import afmGrid from './assets/covers/grid/A-Family-Man.jpg'
import tlGrid from './assets/covers/grid/The-Lover.jpg'
import slGrid from './assets/covers/grid/Single-Lives.jpg'
import mgGrid from './assets/covers/grid/Marriage-Games.jpg'
import tgGrid from './assets/covers/grid/The-Grandmother.jpg'
import acosGrid from './assets/covers/grid/A-Cast-of-Smiles.jpg'
import asaGrid from './assets/covers/grid/A-Summer-Affair.jpg'
import wogGrid from './assets/covers/grid/Walls-of-Glass.jpg'
import aaGrid from './assets/covers/grid/Alice-Alone.jpg'

import pubPenguin from './assets/penguin.jpg'
import pubHeadOfZeus from './assets/logo-head-of-zeus.jpg'
import pubAmazon from './assets/amazon.jpg'

export default {
  books: {
    ftload: {
      title: 'For the Love of a Dog',
      slug: 'for-the-love-of-a-dog',
      link: '/books/for-the-love-of-a-dog',
      color: '#e1482d',
      covers: {
        grid: ftloadGrid,
        main: '',
      },
      options: [
        {type: 'HEAD_OF_ZEUS', url: 'http://headofzeus.com/books/love-dog'},
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/1788542924'},
      ],
    },

    tlc: {
      title: 'The Love Child',
      slug: 'the-love-child',
      link: '/books/the-love-child',
      color: '#d05d31',
      covers: {
        grid: tlcGrid,
      },
      options: [
        {
          type: 'PENGUIN',
          url: 'https://www.penguin.co.uk/books/179105/the-love-child/',
        },
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0718192346'},
      ],
    },

    biky: {
      title: 'Before I Knew You',
      slug: 'before-i-knew-you',
      link: '/books/before-i-knew-you',
      color: '#46556a',
      covers: {
        grid: bikyGrid,
      },
      options: [
        {
          type: 'PENGUIN',
          url: 'https://www.penguin.co.uk/books/56780/before-i-knew-you/',
        },
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141039949'},
      ],
    },

    lb: {
      title: 'Life Begins',
      slug: 'life-begins',
      link: '/books/life-begins',
      color: '#c3405f',
      covers: {
        grid: lbGrid,
      },
      options: [
        {
          type: 'PENGUIN',
          url: 'https://www.penguin.co.uk/books/55361/life-begins/',
        },
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141021837'},
      ],
    },

    tsrol: {
      title: 'The Simple Rules of Love',
      slug: 'the-simple-rules-of-love',
      link: '/books/the-simple-rules-of-love',
      color: '#248dab',
      covers: {
        grid: tsrolGrid,
      },
      options: [
        {
          type: 'PENGUIN',
          url:
            'https://www.penguin.co.uk/books/55360/the-simple-rules-of-love/',
        },
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141021829'},
      ],
    },

    rl: {
      title: 'Relative Love',
      slug: 'relative-love',
      link: '/books/relative-love',
      color: '#df2f55',
      covers: {
        grid: rlGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBVO'}],
    },

    sah: {
      title: 'Sisters & Husbands',
      slug: 'sisters-and-husbands',
      link: '/books/sisters-and-husbands',
      color: '#473a89',
      covers: {
        grid: sahGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340770120'}],
    },

    afm: {
      title: 'A Family Man',
      slug: 'a-family-man',
      link: '/books/a-family-man',
      color: '#33ce4f',
      covers: {
        grid: afmGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBP0'}],
    },

    tl: {
      title: 'The Lover',
      slug: 'the-lover',
      link: '/books/the-lover',
      color: '#fbbb01',
      covers: {
        grid: tlGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00Q8NUXI2'}],
    },

    sl: {
      title: 'Single Lives',
      slug: 'single-lives',
      link: '/books/single-lives',
      color: '#e72104',
      covers: {
        grid: slGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/034071266X'}],
    },

    mg: {
      title: 'Marriage Games',
      slug: 'marriage-games',
      link: '/books/marriage-games',
      color: '#dc8d4b',
      covers: {
        grid: mgGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340671521'}],
    },

    tg: {
      title: 'The Godmother',
      slug: 'the-godmother',
      link: '/books/the-godmother',
      color: '#b5a2fe',
      covers: {
        grid: tgGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340671505'}],
    },

    acos: {
      title: 'A Cast of Smiles',
      slug: 'a-cast-of-smiles',
      link: '/books/a-cast-of-smiles',
      color: '#d69aa2',
      covers: {
        grid: acosGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340624493'}],
    },

    asa: {
      title: 'A Summer Affair',
      slug: 'a-summer-affair',
      link: '/books/a-summer-affair',
      color: '#bf2525',
      covers: {
        grid: asaGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340623411'}],
    },

    wog: {
      title: 'Walls of Glass',
      slug: 'walls-of-glass',
      link: '/books/walls-of-glass',
      color: '#5f9be4',
      covers: {
        grid: wogGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340623403'}],
    },

    aa: {
      title: 'Alice Alone',
      slug: 'alice-alone',
      link: '/books/alice-alone',
      color: '#c6b2ce',
      covers: {
        grid: aaGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0340624485'}],
    },
  },
  articles: [
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
  ],
  shortStories: [
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
  ],
  publishers: {
    PENGUIN: {
      name: 'Penguin',
      logo: pubPenguin,
    },
    AMAZON: {
      name: 'Amazon',
      logo: pubAmazon,
    },
    HEAD_OF_ZEUS: {
      name: 'Head of Zeus',
      logo: pubHeadOfZeus,
    },
  },
}
