# Podcaster App

## Getting Started

### Prerequisites

Make sure you have [Node.js v18+](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your machine.

## Development Mode

To run the application in development mode with live reloading, use the following command:

```sh
pnpm run dev
```

## Production Mode

To build and run the application in production mode, follow these steps:

```sh
pnpm run build

pnpm run preview
```

## Proxy Server

Some external resources might require CORS headers. This project uses the https://cors-anywhere.herokuapp.com/ proxy server to bypass CORS restrictions. Make sure to review the proxy usage policy at https://github.com/Rob--W/cors-anywhere/ and consider setting up your own proxy server if needed.
