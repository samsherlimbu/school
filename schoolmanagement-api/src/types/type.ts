import {  SubjectCategory, SubjectType } from '@prisma/client';
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
export type DepartmentCreateProps ={
  name:string;
   slug:string;
}
export type SubjectCreateProps = {
  name:string;
  slug:string;
  code:string;
  shortName:string;
  category:SubjectCategory;
  type:SubjectType;
  departmentId:string
  departmentName:string
};

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

export type TeacherProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  employeeId?:string;
  gender: string;
  imageUrl: string;
  password: string;
  dateOfJoining: string;
  designation: string;
  departmentId?: string;
  departmentName: string;
  mainSubject: string;
  mainSubjectId: string;
  qualification: string;
  subjects: string[]; // Used via `selectedSubject`
  classes: string[]; // Used via `selectedClass`
  address: string;
  state: string;
  country: string;
  experience: number;
  skills?: string;
  preferenceContactMethod?: string;
  NIN: string; // National ID / Passport No
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
