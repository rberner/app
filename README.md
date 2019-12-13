<h1>
  <img src="https://user-images.githubusercontent.com/522079/43096167-3a1b1118-8e86-11e8-9fb2-7b4e3b1368bc.png" width="40" alt="Directus Logo"/>&nbsp;&nbsp;Directus Admin Application</h1>

> **IMPORTANT:** You do not install this App directly, it is included in the Directus Suite, located here: [`directus/directus`](https://github.com/directus/directus). This repository is only used to organize the Admin Application's code.

## Description

The Directus Admin Application is a Vue.js powered SPA designed to work with the Directus API to let the user manage all the data in the connected project. It's the GUI of working with the data in a Directus installation. 

## Installation / Usage

**IMPORTANT:** The Admin App is included in the Directus Suite out-of-the-box. You only have to install this app separately if you want to contribute to the project's development.

1. Clone the repo
2. Install the depencencies using `npm` / `yarn`
3. Run `npm run build` to compile the app to a production bundle.

## Development

You can run the application standalone using the included dev server. Run `npm run dev` in your terminal to fire up the Directus App with Hot Module Reloading and the Vue Devtools integration enabled.

By default, the application will connect to the demo API (https://demo.directus.io) when running in development mode. To connect to your own local API, provide the URL in the `API_URL` environment variable:

```
API_URL=http://localhost:8888 npm run dev
```

## Core Team

* [Ben Haynes](https://github.com/benhaynes) _(Project Lead)_
* [Rijk van Zanten](https://github.com/rijkvanzanten) _(Tech Lead)_

[Advisors, Sponsors, Partners, and Key Contributors](https://directus.io/organization.html#the-team)

## License

Directus is released under the [GPLv3](http://www.gnu.org/copyleft/gpl.html) license. [RANGER Studio LLC](https://rangerstudio.com) owns all Directus trademarks and logos on behalf of our project's community. Copyright © 2006-2019, [RANGER Studio LLC](https://rangerstudio.com).
