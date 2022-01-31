import jwt from 'jsonwebtoken';
require('dotenv').config();

export const sign = (payload) => jwt.sign(payload, process.env.JWT_SECRET);
export const verify = (payload) => jwt.verify(payload, process.env.JWT_SECRET);
