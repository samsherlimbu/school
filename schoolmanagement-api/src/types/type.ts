import { Request,Response } from 'express';

export interface TypedRequestBody<T> extends Request {
  body: T;
}


export type ContactProps = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: number;
  role: string;
  media: string;
  message: string;
};

export type ClassCreateProps ={
  title:string;
   slug:string;
}

export type StreamCreateProps ={
  title:string;
  slug:string;
  classId:string;
};

export type ParentProps = {
  ParentName: string;
  email: string;
  relationShip: string;
  NIN: string;
  gender: string;
  dob: string;
  state: string;
  occupation: string;
  address: string;
  preferenceContactMethod: string;
  password: string;
  phone: string;
  imageUrl?: string;
  country: string;
};