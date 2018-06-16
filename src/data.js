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

export default {
  books: {
    FTLOAD: {
      title: 'For the Love of a Dog',
      slug: 'for-the-love-of-a-dog',
      link: '/books/for-the-love-of-a-dog',
      color: '#c6b2ce',
      covers: {
        grid: ftloadGrid,
        main: '',
      },
      options: [
        {type: 'HEAD_OF_ZEUS', url: 'http://headofzeus.com/books/love-dog'},
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/1788542924'},
      ],
    },

    TLC: {
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

    BIKY: {
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

    LB: {
      title: 'Life Begins',
      slug: 'life-begins',
      link: '/books/life-begins',
      color: '#c3405f',
      covers: {
        grid: lbGrid,
      },
      options: [],
    },

    TSROL: {
      title: 'The Simple Rules of Love',
      slug: 'the-simple-rules-of-love',
      link: '/books/the-simple-rules-of-love',
      color: '#248dab',
      covers: {
        grid: tsrolGrid,
      },
      options: [],
    },

    RL: {
      title: 'Relative Love',
      slug: 'relative-love',
      link: '/books/relative-love',
      color: '#df2f55',
      covers: {
        grid: rlGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBVO'}],
    },

    SAH: {
      title: 'Sisters & Husbands',
      slug: 'sisters-and-husbands',
      link: '/books/sisters-and-husbands',
      color: '#473a89',
      covers: {
        grid: sahGrid,
      },
      options: [],
    },

    AFM: {
      title: 'A Family Man',
      slug: 'a-family-man',
      link: '/books/a-family-man',
      color: '#33ce4f',
      covers: {
        grid: afmGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBP0'}],
    },

    TL: {
      title: 'The Lover',
      slug: 'the-lover',
      link: '/books/the-lover',
      color: '#fbbb01',
      covers: {
        grid: tlGrid,
      },
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00Q8NUXI2'}],
    },

    SL: {
      title: 'Single Lives',
      slug: 'single-lives',
      link: '/books/single-lives',
      color: '#e72104',
      covers: {
        grid: slGrid,
      },
      options: [],
    },

    MG: {
      title: 'Marriage Games',
      slug: 'marriage-games',
      link: '/books/marriage-games',
      color: '#dc8d4b',
      covers: {
        grid: mgGrid,
      },
      options: [],
    },

    TG: {
      title: 'The Godmother',
      slug: 'the-godmother',
      link: '/books/the-godmother',
      color: '#b5a2fe',
      covers: {
        grid: tgGrid,
      },
      options: [],
    },

    ACOS: {
      title: 'A Cast of Smiles',
      slug: 'a-cast-of-smiles',
      link: '/books/a-cast-of-smiles',
      color: '#d69aa2',
      covers: {
        grid: acosGrid,
      },
      options: [],
    },

    ASA: {
      title: 'A Summer Affair',
      slug: 'a-summer-affair',
      link: '/books/a-summer-affair',
      color: '#bf2525',
      covers: {
        grid: asaGrid,
      },
      options: [],
    },

    WOG: {
      title: 'Walls of Glass',
      slug: 'walls-of-glass',
      link: '/books/walls-of-glass',
      color: '#5f9be4',
      covers: {
        grid: wogGrid,
      },
      options: [],
    },

    AA: {
      title: 'Alice Alone',
      slug: 'alice-alone',
      link: '/books/alice-alone',
      color: '#c6b2ce',
      covers: {
        grid: aaGrid,
      },
      options: [],
    },
  },
  publishers: {
    PENGUIN: {
      name: 'Penguin',
      logo: '',
    },
    AMAZON: {
      name: 'Amazon',
      logo: '',
    },
    HEAD_OF_ZEUS: {
      name: 'Head of Zeus',
      logo: '',
    },
  },
}
