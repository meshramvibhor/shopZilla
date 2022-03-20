const express = require('express');
const { registerUser, loginUser, logOutUser, forgotPassword, resetPassword, getUser, updatePassword, updateProfile, getAllUsers, getOneUser, updateUserRole, deleteUser } = require('../controller/userController');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');


//routes 
router.route("/user/register").post(registerUser)

router.route("/user/login").post(loginUser)

router.route("/user/logout").get(logOutUser)

router.route("/user/password/forgot").post(forgotPassword)

router.route("/user/password/reset/:token").put(resetPassword)

router.route("/user/me").get(isAuthenticatedUser,getUser)

router.route("/user/password/update").post(isAuthenticatedUser,updatePassword)

router.route("/user/profile/update").put(isAuthenticatedUser,updateProfile)

router.route("/admin/user/all").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers)

router.route("/admin/user/findone/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getOneUser)

router.route("/admin/user/updateuser/:id").post(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole)

router.route("/admin/user/deleteuser/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser)

module.exports = router