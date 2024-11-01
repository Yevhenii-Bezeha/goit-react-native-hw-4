import "dotenv/config";

export default {
  expo: {
    name: "goit-native",
    slug: "goit-native",
    version: "1.0.0",
    ios: {
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY,
        },
      },
    },
  },
};
