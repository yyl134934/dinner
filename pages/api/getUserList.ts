/*
 * @Author: yaoc
 * @Date: 2021-08-19 16:27:28
 * @Last Modified by: yaoc
 * @Last Modified time: 2021-08-19 16:29:30
 */
import { getUserList } from '../../lib/mongodb';

export default (req, res) => {
  const userList = getUserList();
  res.status(200).json({ code: 0, msg: 'query successful!', data: userList });
};
