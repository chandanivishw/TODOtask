import Task from "../model/Task.js";
export const createTask = async(req,res)=>{
try{
    const {title}=req.body;
    if(!title){
        console.log("Title is required");
    }
    const task = await Task.create({title}); 
    return res.status(201).json({ message: "Task created successfully", task });

}catch(error){
    res.status(500).json({ message: "Error creating task", error });
}
};

export const getAllTasks = async(req,res)=>{
    try{
        const tasks = await Task.find();
        return res.status(200).json({ message: "Tasks fetched successfully", tasks });
    }catch(error){
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};
 
export const updateTask = async(req,res)=>{
    try{
    const {id} = req.params;
    const task = await Task.findByIdAndUpdate(id,req.body,{new:true});
    if(!task){
        return res.status(404).json({ message: "Task not found" });
    }
     return res.status(200).json({message:"Task updated successfully",task});
 
    }catch(error){
        res.status(500).json({ message: "Error updating task", error });
    }
};
export const deleteTask = async(req,res)=>{
 try{
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id);
    if(!task){
        return res.status(404).json({ message: "Task not found" });
    }
     return res.status(200).json({message:"task deleted successfully",task});
 }catch(error){
    res.status(500).json({ message: "Error deleting task", error });
 }
};

