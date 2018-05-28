import ftloadGrid from './assets/covers/grid/For-the-Love-of-a-Dog.jpg'

export default {
  books: {
    FTLOAD: {
      title: 'For the Love of a Dog',
      link: '/books/for-the-love-of-a-dog',
      covers: {
        grid: ftloadGrid,
      },
      options: [
        {type: 'HEAD_OF_ZEUS', url: 'http://headofzeus.com/books/love-dog'},
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/1788542924'},
      ],
    },
    TLC: {
      title: 'The Love Child',
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
      options: [
        {
          type: 'PENGUIN',
          url: 'https://www.penguin.co.uk/books/56780/before-i-knew-you/',
        },
        {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141039949'},
      ],
    },
    RL: {
      title: 'Relative Love',
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBVO'}],
    },
    AFM: {
      title: 'A Family Man',
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBP0'}],
    },
    TL: {
      title: 'The Lover',
      options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00Q8NUXI2'}],
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
