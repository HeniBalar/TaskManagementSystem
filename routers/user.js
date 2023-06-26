const express = require("express");
const router=new express.Router()

const { registrationform } = require("../contoller/user/createUser");
const { getuserAll } = require("../contoller/user/getall");
const { getuserbyID, getuserbyAuth } = require("../contoller/user/getById");
const { updateUser } = require("../contoller/user/update");
const { deleteuser } = require("../contoller/user/delete");
const { loginform } = require("../contoller/user/login");

const auth=require("../middleware/auth");
const { taskAdd } = require("../contoller/task/createTask");
const { getByIdTask } = require("../contoller/task/getByIdTask");
const { getAllTask } = require("../contoller/task/getAllTask");
const { deleteTask } = require("../contoller/task/deleteTask");
const { updateTask } = require("../contoller/task/updateTask");
const { logoutUser } = require("../contoller/user/logout");
const { pagination } = require("../contoller/task/sort-pagination");
const { queryTask } = require("../contoller/task/query");



//===================User API====================
router.post("/register",registrationform)
router.get("/getUserAll",getuserAll)

//------------By ID
// router.get("/getById/:id",getuserbyID)
// router.put("/updateUser/:id",updateUser)
// router.delete("/deleteUser/:id",deleteuser)

//-----------By Authentication
router.get("/usersAuth",auth,getuserbyAuth)
router.put("/updateUser",auth,updateUser)
router.delete("/deleteUser/:id",auth,deleteuser)


router.get("/loginUser",loginform)
router.post('/logoutUser',auth,logoutUser)


//=====================task API================
router.post('/tasks',auth,taskAdd)
router.get('/tasksid',auth,getByIdTask)   //user na all task display
// router.get('/tasks/:id',auth,getByIdTask)
router.get('/tasksAll',getAllTask)
router.delete('/tasks/:id',auth,deleteTask)
router.put('/tasks/:id',auth,updateTask)

router.get('/tasks',auth, pagination)
router.get('/api/tasks',queryTask)

module.exports=router