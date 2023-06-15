import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/wrmpkBv/hat.jpg',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/N9Xbz90/jacket.jpg',
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/TmqFNhk/sneakers.jpg',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: 'girls',
    imageUrl: 'https://i.ibb.co/9wDTHKb/girls.jpg',
    route: 'shop/girls'
  },
  {
    id: 5,
    title: 'boys',
    imageUrl: 'https://i.ibb.co/mvCrT8b/boys.jpg',
    route: 'shop/boys'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
        
      ))}
    </DirectoryContainer>
  );
}

export default Directory;