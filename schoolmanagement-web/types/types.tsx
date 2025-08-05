export type Contact = {
  id: string;
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
  createdAt: string;
  updatedAt: string;
};

export type Parent = {
  id: string;
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
  createdAt: string;
  updatedAt: string;
};

export type Student = {
  id:string;
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  state: string;
  rollNo: string;
  regNo: string;
  studentType: string;
  admissionDate: string;
  parentId: string;
  classId: string;
  streamId: string;
  parentName?:string;
  classTitle?:string;
  streamTitle?:string;
  gender: string;
  imageUrl?: string;
  country: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ClassCreateProps = {
  title: string;
  // slug:string;
};

export type DepartmentCreateProps = {
  name: string;
  // slug:string;
};
export type SubjectCreateProps = {
  name:string;
  code:string;
  shortName:string;
  category:string;
  type:string;
  departmentId:string
  departmentName:string
};

export type StreamCreateProps = {
  title: string;
  slug: string;
  classId: string;
};

export type   classType = {
  id: string;
  title: string;
  slug: string;
  streams: StreamWithCount[];
  _count: {
    students: number;
  }
  createdAt: string;
  updatedAt: string;
};

export type Department = {
  id: string;
  name: string;
  slug: string;
  hodId?: string;
  hodName?:string;
  hodStartDate?:string;
  budget?: number;
  budgetYear?: string;
  teachers:StreamWithCount[];
  subjects:StreamWithCount[];
  createdAt: string;
  updatedAt: string;
};

export type  BriefDepartment = {
  id: string;
  name: string;
};
export type  BriefStudent = {
  id: string;
  name: string;
};
export type  BriefClass = {
  id: string;
  title: string;
}

export type StreamWithCount ={
  id: string;
  title: string;
  slug: string;
  classId: string;
 
  _count: {
    students: number;
  }
  createdAt: string;
  updatedAt: string;
}

export type Stream = {
  id: string;
  title: string;
  slug: string;
  classId: string;
  class: classType;
  createdAt: Date;
  updatedAt: Date;
};


export interface Subject {
  id: string;
  name: string;
  slug: string;
  code: string;
  shortName?: string;
  category: SubjectCategory;
  type: SubjectType;
  passingMarks?: number;
  totaMarks?: number;
  departmentId: string;
  departmentName: string;
  isActive: boolean;
  isOptinal: boolean;
  hasTheory: boolean;
  hasPractical: boolean;
  labRequired: boolean;
  createdAt: string;
  updatedAt: string;
}
export enum SubjectCategory {
  CORE = "CORE",
  ELECTIVE = "ELECTIVE",
  ADDITIONAL = "ADDITIONAL",
  VOCATIONAL = "VOCATIONAL",
  LANGUAGE = "LANGUAGE",
  EXTRA_CURRICULAR = "EXTRA_CURRICULAR",
}

export enum SubjectType {
  THEORY = "THEORY",
  PRACTICAL = "PRACTICAL",
  BOTH = "BOTH",
}

export type TeacherCreateProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  employeeId:string;
  gender: string;
  imageUrl: string;
  password: string;
  dateOfJoining: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  mainSubject: string;
   mainSubjectId: string;
  qualification: string;
  subjects: string[]; // Used via `selectedSubject`
  classes: string[]; // Used via `selectedClass`
  classIds:string[];
  address: string;
  state: string;
  country: string;
  experience: number;
  skills?: string;
  preferenceContactMethod?: string;
  NIN: string; // National ID / Passport No
};
export type Teacher = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  employeeId:string;
  gender: string;
  imageUrl: string;
  password: string;
  dateOfJoining: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  mainSubject: string;
 
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
  createdAt: string;
  updatedAt: string;
};
  

export interface User {
  id: string;
  email: string;
  name: string;
  role: "SUPER_ADMIN" | "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  createdAt: string;
  updatedAt: string;
  image?: string;
  phone?: string;
  schoolId?: string;
  schoolName?: string;
}

export type School ={
    id: string;
    name: string;
    logo: string | null;
    slug: string;
}
  export type UserCreateProps ={
  email:string;
  password:string;
  role: "SUPER_ADMIN" | "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  name:string;
  phone?:string;
  image?:string;
  schoolId?:string;
  schoolName?:string;

}
