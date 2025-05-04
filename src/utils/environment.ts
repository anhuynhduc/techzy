import * as process from "process";

const Environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://your-default-api.com',
};

export default Environment;
