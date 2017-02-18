export interface IEvent {
    id:number
    name:string 
    organiser: string
    system: string
    maxPlayers: number
    sessions?: ISession[]
}

export interface ISession {
    id:number
    rotation:number // 2.1, 2.3 etc.
}