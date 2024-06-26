const logger = require("serverloggerjs/logger")
const multer = require('multer');
const path = require('path');
const log = new logger(true)
const db = require("../Models/index");
const e = require("express");
const AdminLogin = db.adminLogins
const jwt = require("jsonwebtoken")
const LoginTokenService = require("../Services/LoginTokensService")


const AddAdminLogin = async (AdminData) => {

}

const getAdminLogin = async (token) => {
    try {

        const uid = jwt.verify(token, "SECRETKEY")
        // console.log("in get admin login uid: " + (JSON.stringify(uid)))
        const admin = await AdminLogin.findAll({
            where: {
                Admin_Name: uid["id"],
            }
        })

        if (admin.length == 0) {
            return false
        }
        else {
            return JSON.parse(JSON.stringify(admin[0]))
        }
    }
    catch (error) {
        log.error(error.toString())
        return false
    }
}

const verifyAdmin = async (admin_name, admin_password) => {
    try {

        let admin = undefined
        admin = await AdminLogin.findAll({
            where: {
                Admin_Name: admin_name,
                Admin_Password: admin_password
            }
        })
        if (admin != undefined) {

            admin = JSON.parse(JSON.stringify(admin))
            console.log("Line 53:", admin);
            if (admin.length == 0) {
                console.log("length 0")
                return false
            }
            else {
                console.log("in else");
                const token = await LoginTokenService.addToken(admin_name);
                return token
            }
        }

    }
    catch (error) {
        log.error(error.toString())
        return false
    }
}

const changePassword = async (oldPassword, newPassword, newPasswordConfirm) => {
    try {
        const adminName = "admin"
        let adminLoginData = await AdminLogin.findOne({ where: { Admin_Name: adminName } })

        adminLoginData = JSON.parse(JSON.stringify(adminLoginData))

        if (adminLoginData) {

            const check = oldPassword.localeCompare(adminLoginData.Admin_Password)

            if (check != 0) {
                return "Your old password is not correct"
            }

            if (oldPassword == newPassword) {
                return "New Password cannot be same as old password"
            }

            if (newPassword != newPasswordConfirm) {
                return "New password and confirm new password does not match"
            }

            if (newPassword.length < 8) {
                return "New password must be greater than 8 characters"
            }

            const status = await AdminLogin.update({ Admin_Password: newPassword }, {
                where: {
                    Admin_Name: adminName,
                }
            })

            if (status) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    } catch (error) {
        return false
    }
}

module.exports = {
    AddAdminLogin,
    verifyAdmin,
    getAdminLogin,
    changePassword
}