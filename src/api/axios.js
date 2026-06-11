import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || 'https://back.shirykids.com/api/v1';
export const ASSET_BASE = API_URL.replace('/api/v1', '');

const api = axios.create({ baseURL: API_URL });

export const assetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${ASSET_BASE}${path}`;
};

export default api;
