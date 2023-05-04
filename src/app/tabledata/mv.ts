export interface Movies{
    BasicPrice: number
     MovieName: string
      Rows: Array<Rws>
}
export interface Rws{
     row:number
     Start:number
     End:number
     AlreadyBooked: Array<number>
}
export interface Cell{
    id:number;
    selected:boolean;
}