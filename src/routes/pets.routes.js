import { Router } from "express";
import { methods as petsController } from "./../controllers/pets.controller";

const router = Router();

router.get("/medicamentos", petsController.getPets);
router.get("/concentrados", petsController.getPets2);
router.post("/medicamentos", petsController.addMedicamento);
router.post("/concentrados", petsController.addConcentrado);

export default router;
