export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=KF4S7BsxstT2T4F0ZZUudI2EUZ6Uqq2T`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = await data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
