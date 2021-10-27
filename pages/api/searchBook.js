export default async function handler(req, res) {
  async function search (term) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`);
    const data = await response.json();
    return data;
  }
  if (!req.query.term) {
    res.status(400).json({
      message: 'Term is missing.'
    })
  }
  const book = await search(req.query.term)
  res.status(200).json({
    data: book
  })
}
