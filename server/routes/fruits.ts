import { Router } from 'express'

import * as db from '../db/dbFunctions.ts'

const router = Router()

// router.get('/', async (req, res) => {
//   try {
//     const fruits = await db.getAllCategories()

//     res.json({ fruits: fruits.map((category) => category.description) })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

export default router
