export interface Moment{
    id?: number,
    title: string,
    descripton: string,
    image: string,
    create_at?: string,
    update_at?: string,
    comments?: [{text: string, username: string}];
} 