import { getDishInfo } from '../../lib/mongodb';

export default async (req, res) => {
  const dishList = await getDishInfo();
  res.status(200).json({ code: 0, msg: 'query successful!', data: dishList });
};
