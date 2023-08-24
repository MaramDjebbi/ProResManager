export enum TypeSession {
    Active = 'active',
    Inactive = 'inactive'
}

export class session{
    idsession: Number;
    dateDebutSession: Date;
    dateFinSession: Date;
    typeSession:TypeSession;
    moisA: String;
    moisB: String;
    moisC: String;
    joursTravailMoisA: Number;
    joursTravailMoisb: Number;
    joursTravailMoisC: Number;
}