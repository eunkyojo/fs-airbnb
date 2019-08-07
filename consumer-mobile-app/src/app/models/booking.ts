export class Booking {
    id: number;
    startDate: string;
    endDate: string;
    guestCount: number;
    listingId: number;
    guestId: number;
    
    constructor(startDate, endDate, guestCount, listingId, guestId) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.guestCount = guestCount;
        this.listingId = listingId;
        this.guestId = guestId;
    }
}
