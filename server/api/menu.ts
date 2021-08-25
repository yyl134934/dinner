import { AxiosResponse } from 'axios';
import request from 'src/utils/request';

export const getDishInfo = (): Promise<AxiosResponse<MenuGlobal.Dish[]>> => request.get('/getDishInfo');
