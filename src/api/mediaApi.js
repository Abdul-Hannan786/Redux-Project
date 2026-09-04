import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXEL_KEY = import.meta.env.VITE_PEXELS_KEY;

export const fetchImages = async (query, page = 1, per_page = 20) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
  });
  return response.data;
};

export const fetchVideos = async (query, page = 1, per_page = 15) => {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: {
      Authorization: PEXEL_KEY,
    },
  });

  return response.data;
};
