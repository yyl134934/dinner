import type { NextApiRequest, NextApiResponse } from 'next';
import { getUser } from '../../lib/mongodb';

const CODE_SUC = 0;
const CODE_NO_MATCH = -1;
const CODE_DB_ERROR = -2;

const getResBody = (code, msg, data?) => {
  return data ? { code, msg, data } : { code, msg };
};

const setResponse = (res, resBody) => {
  const sucStatus = 200;
  res.status(sucStatus).json(resBody);
};

const vaild = (data: Record<string, any>) => {
  const { user_name: username, password } = data;

  if (!username || !password) {
    return '账号或密码不正确!';
  }

  return '';
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  let user;

  console.info('【api】【登陆】请求参数为：', body);

  const isVaild = vaild(body);
  if (isVaild) {
    const resBody = getResBody(CODE_NO_MATCH, isVaild);
    setResponse(res, resBody);
  }

  try {
    user = await getUser(body);
  } catch {
    const msg = '登录失败！数据或网络异常！';
    const resBody = getResBody(CODE_DB_ERROR, msg);
    setResponse(res, resBody);
    return;
  }

  const resBody = user
    ? getResBody(CODE_SUC, '登录成功！', user)
    : getResBody(CODE_NO_MATCH, '登录失败！账号或密码不匹配！', user);

  setResponse(res, resBody);
};
