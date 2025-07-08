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

export type StreamCreateProps = {
  title: string;
  slug: string;
  classId: string;
};

export type classType = {
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
