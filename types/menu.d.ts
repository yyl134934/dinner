declare namespace MenuGlobal {
  import { ObjectId } from 'mongodb';
  interface MenuItem {
    key: string;
    title: string;
    desc: string;
    pathname: string;
  }

  interface Ingredients {
    name: string;
    key: string;
    remaining_quantity: number;
    required_quantity: number;
    type: number;
  }

  interface Dish {
    _id: string;
    name: string;
    type: number;
    ingredients: Array<Ingredients>;
    desc: string;
    remark: any;
  }

  interface Menu {
    _id: string;
    name: string;
    type: number;
    menu_list: Array<string>;
    desc: string;
    remark: any;
  }
}
