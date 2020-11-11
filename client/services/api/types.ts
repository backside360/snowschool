export type ITraining = {
coach: string;
date: string;
id: number;
name: string[];
place: string;
time: string;
type: string;
}

export type ICreateTraining = {
    coach: string;
    date: string;
    id: number;
    place: string;
    time: string;
    type: string;
}

export type IUpdate = {
    id: number;
    time: string;
}

export type IUser = {
    login:string;
    
}


export type TAPI = {
    training: {
      getAll: () => Promise<any>;
      get: () => Promise<any>;
      getSchedule: (type: string) => Promise<ITraining>;
      getTrainingByDate: (date: string) => Promise<ITraining>;
      post: (values: ITraining) => Promise<any>;
      update:(values: IUpdate) => Promise<any>;
      createAppointment:(name:string) => Promise<any>;
    };
    user: {
        getUser: (values: IUser) => Promise<any>;
    };
  };