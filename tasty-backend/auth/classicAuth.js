const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = async (req, res)=>{
 try {
  const {email, pword} = req.body
  const id = new Date().getDate()
   if (!email || !pword){
  return res.status(401).json({ msg: 'please provide user name and password' })
  }
  const token = jwt.sign({id, email},process.env.JWT_SECRET, {expiresIn:'30d' })
   res.json({ msg: 'account created sign in to continue', token })
 } catch (error) {
  res.status(500).json({msg:'bad request'})
 }
}

const login = async(req, res)=>{
 const authHeader = req.headers.authorization;
 if (!authHeader || !authHeader.startsWith('Bearer')){
  return res.status(401).json({msg:'unauthorized'})
 }
 const token = authHeader.split(' ')[1]
 try {
  const decode = jwt.verify(token, process.env.JWT_SECRET)
  res.status(200).json({auth:decode.email})
 } catch (error) {
  res.status(401).json({ msg: 'wrong email or password' })
 }
}

module.exports =  {register, login}