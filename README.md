# Overview

Website for Duke Street Medicine written in Node.js, Express, HTML, CSS. 

Check it out at https://dukestreetmedicine.herokuapp.com/

# Authors
- [Katherine Barbano](https://github.com/katherine-barbano)

Add your Github username here.

# Running app locally

1. Download and install Node.js from https://nodejs.org/en/
2. Install Express framework for Node using 

```
    npm install express
```

3. Start the app using

```
    npm start
```

4. Open the app locally at http://localhost:3000/

# Deployment

## Heroku Deployment

The app is currently deployed (for free) at https://dukestreetmedicine.herokuapp.com/

Automatic deploys are currently enabled on the Heroku app. This means that pushing a new commit to this Git repo
will also automatically deploy the change on the website within a few seconds without needing to touch anything in Heroku itself. If you want to disable/re-enable automatic deploys, go to the "Deploys" tab in the Heroku dashboard.

## Tracking Views

To track Google statistics including total clicks on the site and total impressions (how many times the site appeared in search results), login to Google Search Console at https://search.google.com/search-console/about and click "Get Started".

## Search Engine Optimization

A sitemap was included in /views/sitemap.xml to make it easier for search engines to crawl over and index the website's content. Over time, efforts to follow Google's starter guide for SEO led to the website becoming more visible in search results (as evidence from tracking total impressions in the Google Search Console, and from personal experience in searching for the website).

See the following guide for getting started with Google SEO: https://developers.google.com/search/docs/beginner/seo-starter-guide

# Maintaining the Site

## Tasks
Tasks that should be completed annually include:

- updating new members in views/members.ejs
- updating alum in views/members.ejs
- updating exec board in views/members.ejs

## Code Organization

/views: includes the html for each webpage in the form of .ejs files.

/routes: responsible for routing between pages in the views directory.

/public/images: includes pictures throughout the website, as well as member pictures.

/public/stylesheets: memberPicStyles.css contains individual styling for the pictures of each member on the "Members" page. The file style.css contains generalized styling for the rest of the app.

## Adding a new member pic

1. Add new attribute with name of the person and another new attribute for hover. Example:

```
    #Katherine { 

        /styling/

    }

    #Katherine:hover {

        /styling/

    }
```

2. Add a new div in views/members.ejs with the id referring to the css styling completed in step 1.

```
        	<div class="col-xs-12 col-sm-4 col-lg-3" id="KatherineB"><h2>Katherine Barbano</h2><h4>Junior</h4><h4>Season V</h4></div>
```