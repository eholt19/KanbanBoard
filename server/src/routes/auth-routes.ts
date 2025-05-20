import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    console.log('Password entered:', password);
    console.log('Stored hash:', user.password);
    console.log('Password is valid:', isValid);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY || 'fallbacksecret', {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};



const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
