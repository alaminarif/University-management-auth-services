import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`🛢   Database is connected successfully`);

    app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("failed to database: ", error);
  }
};

bootstrap();
