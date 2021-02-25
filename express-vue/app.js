import express from 'express'
import {Server} from './Server/index.js'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT 
Server(PORT,  () => console.log(`Server listen port : ${PORT}`))