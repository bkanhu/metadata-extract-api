const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Endpoint to get metadata from URL
app.post('/get-metadata', async (req, res) => {
  console.log('Request body:', req.body);  

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Fetch the content of the URL
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Extract metadata
    const title = $('title').text();
    const metaDescription = $('meta[name="description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');
    const ogUrl = $('meta[property="og:url"]').attr('content');

    // Return the metadata as JSON
    res.json({
      title,
      metaDescription,
      ogImage,
      ogUrl,
      url
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch URL' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
