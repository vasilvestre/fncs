export default interface TicketDto {
    id: string;
    incomingAt: Date;
    departureAt: Date;
    destination: string;
    trainNumber: string;
    origin: string;
    date: string;
    price: number;
}
