import { IUserModel } from './user.model';

export interface IHouseModel {
    id: number;
    city: string;
    price: number;
    street: string;
    square: number;
    rooms: number;
    user: IUserModel;
}