# LFRIS Marketing Docs

This is the repo for Liferay Marketing Team's documentation site.
Link: https://mktg-docs.liferay.com/

## Getting Started

1. `git clone https://github.com/liferay/lfris-marketing-docs.gits`
2. `npm i`
3. Create `.env.development` and `.env.production` files, ask a webteam member for the necessary environment variables
4. Start development server `npm run dev` - go to `http://localhost:8000`
5. Start a production server `npm run build` then `npm run serve` and go to `http://localhost:9000`

For additional information: [Gatsby Documentation](https://www.gatsbyjs.org/docs/)

## Implementation Details

### Gatsby

This site is built with [gatsby](https://www.gatsbyjs.org/), a react-based static site generator. Please use their to [tutorial](https://www.gatsbyjs.org/tutorial/) to familiarize yourself.

We initiliazied this site with [this gatsby starter](https://github.com/diegonvs/gatsby-boilerplate), but we've made many changes. We've also based many components and implementation decisions on mktg-docs.liferay.com's sister site: [liferay.design](https://liferay.design/) and its sub-sites. [Repo Link](https://github.com/liferay-design/liferay.design/).

### Netlify

Served through netlify

### Auth

#### Logging In

Almost all pages are gated. They are only accessible through signing in to the site with an `@liferay.com` email address. Users can login through netlify by using the sign up tab and their email/ password, but it is recommended (and easier) to sign in using the `continue with google` button since `@liferay.com` emails are google accounts anyways.

#### How to Ungate/Gate a page

1. Select google doc that you wish to ungate
2. Fill the description with the following JSON Object:

```
{
  "...",
  "needsAuth": false,
}
```

#### Netlify Identity

We use `react-netlify-identity-widget` to manage our auth. [`Auth`](https://github.com/liferay/lfris-marketing-docs/blob/master/src/components/organisms/Auth/index.js) is the wrapper component that controls rendering based on if the user is logged in.

Documentation for `react-netlify-identity`: https://github.com/sw-yx/react-netlify-identity
Documentation for `react-netlify-identity-widget`: https://github.com/sw-yx/react-netlify-identity-widget
Code Demo Video: https://www.youtube.com/watch?v=vrSoLMmQ46k
Gatsby Demo Repo: https://github.com/jlengstorf/gatsby-netlify-identity-functions

### Lunr Search

Search by lunr

### Graphql

#### Google Docs

Data sourced by google docs

For making commits to the `gatsby-source-google-docs`, it's been useful to look through the google docs api documentation: https://developers.google.com/docs/api/reference/rest

##### Additional data

Users can add additional data to their files by adding a JSON object to the description field. [Documentation](https://www.gatsbyjs.org/packages/gatsby-source-google-docs/#add-extra-data). None of these are required, but if users want to take the extra step, they can use these fields.

Here is an example of what to place into the description:

```
{
	"path": "/web/general/events",
	"title": "General Events",
	"description": "This is the document for general insights into how to set up events.",
	"needsAuth": "false"
}
```

Here is a table for the available fields and what they are:
| Field | Description | Type |
| ------- | ------------------ | ------- |

#### Markdown Files

### Theme

Theme based off of lfris-www's foundations styles and clayui

### Misc plugins and packages

## To see documentation changes

### locally

### on a production site
