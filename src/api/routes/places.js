import express from "express";

import places from "../controllers/places";

const router = express.Router();

router.get("/getconstituency/:constituency", places.getConstituency);
router.get("/getdistricts/:district", places.getDistrict);

export { router as placesRouter };
