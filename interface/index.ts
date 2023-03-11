export interface Entry{

    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus;
}


export enum EntryStatus {

    Pending = 'pending',
    InProgress = 'in-progress',
    Completed = 'completed',
}