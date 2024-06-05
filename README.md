# Metadata Extractor API

This project provides an API for extracting metadata from a given URL using Node.js, Express, Axios, and Cheerio.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [POST /get-metadata](#post-get-metadata)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/yourusername/metadata-extractor-api.git
   cd metadata-extractor-api
  ```

Install dependencies:
  ```bash
  npm install
  ```
Create a .env file in the root directory and add the following:
  ```env
  PORT=8080
  ```
Start the server:
  ```bash
  npm start
  ```
  The server will start running on `http://localhost:8080`.

## Usage

Example Request with curl
```bash
curl -X POST http://localhost:8080/get-metadata \
-H "Content-Type: application/json" \
-d '{"url":"https://example.com"}'
```

## API Endpoints
#### GET `/`
- URL: `/`
- Method: GET
- **Description**: Returns a "Hello World!" message to ensure the server is running.

**Response**
  **200 OK**
```json
Hello World!
```
- **POST** `/get-metadata`
- **Description**: Fetches and returns metadata from a given URL.

#### POST `/get-metadata`

- URL: `/get-metadata`
- Method: POST
- Headers:
  `Content-Type: application/json`
- Body:
```json
{
  "url": "https://example.com"
}
```
**Response 200 OK**

```json
{
  "title": "Example Domain",
  "metaDescription": "Example Description",
  "ogImage": "https://example.com/og-image.jpg",
  "ogUrl": "https://example.com",
  "url": "https://example.com"
}
```
**400 Bad Request**

```json
{
  "error": "URL is required"
}
```
**500 Internal Server Error**
```json
{
  "error": "Failed to fetch URL"
}
```


## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs, improvements, or new features.

- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature-branch`).
- Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.