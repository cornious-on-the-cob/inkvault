import CryptoJS from "crypto-js";

const MARVEL_API_CONFIG = {
  baseUrl: "https://gateway.marvel.com/v1/public",
  publicKey: "b79f152de0f40643978dfd93ba6da73d",
  privateKey: "4bd3b6a5d32ce9742c8a5c69a86389d7616edb23",
};

// Generate proper MD5 hash for Marvel API
const generateHash = (timestamp) => {
  const stringToHash =
    timestamp + MARVEL_API_CONFIG.privateKey + MARVEL_API_CONFIG.publicKey;
  return CryptoJS.MD5(stringToHash).toString();
};

// Build API URL with authentication
export const buildMarvelUrl = (endpoint, params = {}) => {
  const ts = Date.now();
  const hash = generateHash(ts);

  const queryParams = new URLSearchParams({
    apikey: MARVEL_API_CONFIG.publicKey,
    hash: hash,
    ts: ts,
    ...params,
  });

  return `${MARVEL_API_CONFIG.baseUrl}${endpoint}?${queryParams.toString()}`;
};

// Common endpoints
export const MARVEL_ENDPOINTS = {
  comics: "/comics",
  characters: "/characters",
  series: "/series",
  events: "/events",
  creators: "/creators",
};

// Helper functions for specific requests
export const getComics = (params = {}) => {
  return buildMarvelUrl(MARVEL_ENDPOINTS.comics, params);
};

export const getCharacters = (params = {}) => {
  return buildMarvelUrl(MARVEL_ENDPOINTS.characters, params);
};

export const getSeries = (params = {}) => {
  return buildMarvelUrl(MARVEL_ENDPOINTS.series, params);
};

export const getEvents = (params = {}) => {
  return buildMarvelUrl(MARVEL_ENDPOINTS.events, params);
};
