export default interface Ticket {
    id: string;
    incomingAt: Date;
    departureAt: Date;
    destination: string;
    trainNumber: string;
    origin: string;
    date: string;
}
