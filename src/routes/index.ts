import { Router } from "express";

export const router = Router()

router.get('/', (_, res) => {
  const data = {
    "data1": 1,
    "data2": 2
  }
  res.json(data)
})
