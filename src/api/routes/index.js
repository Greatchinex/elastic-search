import { placesRouter } from "./places";

export default app => {
  app.use(placesRouter);
};
