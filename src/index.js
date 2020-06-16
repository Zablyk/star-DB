const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};



fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    console.log('Now lady and gentelman', body);
  });