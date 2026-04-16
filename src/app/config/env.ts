const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "AppointPro",
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  NODE_ENV: import.meta.env.NODE_ENV || "development",
  DEFAULT_LOCALE: import.meta.env.VITE_DEFAULT_LOCALE || "en-US",
};

export default env;
