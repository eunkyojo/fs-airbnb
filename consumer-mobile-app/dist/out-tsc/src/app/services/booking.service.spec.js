import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking.service';
describe('BookingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BookingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=booking.service.spec.js.map