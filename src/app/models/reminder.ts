export interface IReminder {
    id: number,
    short_description: string,
    description: string,
    data_created: Date,
    data_completed?: Date,
    status: number
}