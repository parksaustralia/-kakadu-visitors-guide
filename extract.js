const axios = require("axios");
const { Spider, Extractor, Logger } = require("drupal-jsonapi-extractor");

require("dotenv").config();

const apiKey = process.env.API_KEY;
const baseURL = process.env.API_BASE;
const park = process.env.PARK;

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Accept: "application/vnd.api+json",
    "api-key": apiKey,
  },
});

const spider = new Spider({
  api,
  baseURL,
  terminateOnError: true,
});

const extractor = new Extractor(spider, {
  location: "./downloads",
  clean: true,
  pretty: true,
});

const logger = new Logger([spider, extractor], { verbosity: 3 });

extractor.wipe().then(() => spider.crawl("node/app_page"));
