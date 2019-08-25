import express from "express";
import { isNumberic, isOptionalAndNumeric } from "../middleware/validators";
import validatorHandler from "../middleware/validatorHandler";
import validateUrlParams from "../middleware/validateUrlParam";
import validateNegatives from "../middleware/validateNegatives";

import {
	addLocationPopulation,
	updatePopulationData,
	viewPopulationData,
	deleteLocation
} from "./location.controller";

const router = express.Router();

router.post(
	"",
	isNumberic,
	validatorHandler,
	validateNegatives,
	addLocationPopulation
);
router.put(
	"/:location",
	validateUrlParams,
	isOptionalAndNumeric,
	validatorHandler,
	validateNegatives,
	updatePopulationData
);
router.get("", viewPopulationData);
router.get("/:location", viewPopulationData);
router.delete("/:location", validateUrlParams, deleteLocation);

export default router;
