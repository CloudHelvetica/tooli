# TooliTools

A free and open-source set of developer tools built on the shoulders of giants. Built with privacy in-mind for a lightweight experience.

## Key Points:

- Open-source
- Privacy respecting
  - No advertising or social trackers
  - No phoning home, your data stays local
- Self-hostable
- Zero Advertisements

<br>

<details open>
<summary>Table of Contents</summary>

- [Roadmap](#roadmap)
- [Contributing](#contributing)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Deploy](#deploy)
- [Acknowledgements](#acknowledgements)
- [Privacy Disclosure](#privacy-disclosure)
- [License](#license)

</details>

<br>

## Roadmap

There's a lot to TODO:

- [ ] Cleanup unused Astrowind artifacts
- [ ] Add document converters (e.g. Json to XML)
- [ ] Create Favicon
- [ ] Working search bar on Index

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

### Project structure

Inside AstroWind template, you'll see the following folders and files:

```
/
├── data/
|   └── ...
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
│   │   ├── blog/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── [...blog]/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── [...categories]/
|   |   |   └── [category]/
|   |   |       └── [...page].astro
│   |   ├── [...tags]/
|   |   |   └── [tag]/
|   |   |       └── [...page].astro
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

## Acknowledgements

- **Website Theme**: [Astrowind](https://github.com/onwidget/astrowind).
- **Json formatting** by [json-viewer](https://wutility.github.io/json-viewer/)

## License

Each piece of software is licensed under their respective original licenses. This repo itself is licensed under the most permissive license allowed by the constituent packages.

## Privacy Disclosure

The only data logged per-visit is [performed by github](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection), as [Tooli.Tools](https://tooli.tools) is hosted on Github pages.
