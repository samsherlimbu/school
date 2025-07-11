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

export type StudentCreateProps = {
  name: string;
  email: string;
  password: string;
  parentName?:string;
  classTitle?:string;
  streamTitle?:string;
  phone: string;
  dob:string;
  state:string;
  rollNo:string;
  regNo:string;
  admissionDate:string;
  parentId:string;
  classId:string;
  streamId:string;
  gender:string;
  imageUrl?: string;
  country: string;
  description:string;
};
