import express from "express";
import {createTask,getAllTasks,updateTask} from "../controller/taskController.js";
import {deleteTask} from "../controller/taskController.js";
const router=express.Router();
router.post("/addTask",createTask);
router.get("/getAllTasks", getAllTasks);
router.patch("/updateTask/:id",updateTask);
router.delete("/deleteTask/:id",deleteTask);
export default router;