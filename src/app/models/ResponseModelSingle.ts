import { ResponseModel } from "./ResponseModel";

export interface ResponseModelSingle<T> extends ResponseModel{
    data:T
}