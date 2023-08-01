function fetchImage(searchInfo, page) {
  const KEY = '37145039-d4ad8d6ab2b85cf5d231e1aa0';

  return fetch(
    `https://pixabay.com/api/?q=${searchInfo}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Sorry, we couldn't find any matches`));
  });
}

export default fetchImage;
