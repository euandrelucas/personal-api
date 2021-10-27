export default async function handler(req, res) {
    // faça uma função que retorne uma imagem de abraço
    async function hug () {
        const response = await fetch('https://api.tenor.com/v1/search?key=LIVDSRZULELA&q=hug');
        const data = await response.json();
        const item = data.results[Math.floor(Math.random()*data.results.length)];
        const gif = item.media[0].gif.url;
        return gif;
    }
    const book = await hug()
    res.status(200).json({
      data: book
    })
  }
  