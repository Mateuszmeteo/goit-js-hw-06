const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imageBase = document.querySelector('.gallery')

const imageList = images => {
  const imageBody = images.map(elem => `<li><img class="picture" src="${elem.url}" alt="${elem.alt}"></li>`);
  imageBase.insertAdjacentHTML('afterbegin', imageBody.join(""))
}

imageList(images);



// const imageList = domcument.createElement("li")

// images.forEach((item) => {
//   const imageBody = newBody
// })



// const imageBase = document.querySelector('.gallery')

// const imageList = (images) => {
//   const imageBody = images.map(elem => `<li><img class="picture" src="${elem.url}" alt="${elem.alt}"></li>`);
//   imageBase.insertAdjacentHTML('afterbegin', imageBody.join(""))
// }

// imageList(images);