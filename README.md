This simple React app powers mattpaustin.com, my personal website where I link to a bunch of other stuff related to me.

Check it out and, if you feel so inclined, reach out!

## Setup

```sh
npm install
cp .env.example .env.local
```

## Scripts

- `npm start` runs the local development server.
- `npm run build` creates a production build.
- `npm test` starts the Create React App test runner.

The public links on the home page can be overridden with `REACT_APP_*` values in `.env.local`.
