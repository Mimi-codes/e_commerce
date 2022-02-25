
import classes from './Booking.module.css'
import BookingText from './BookingText';
import ReservationForm from './ReservationForm';

function Booking() {
    return (
      <>
      <div className={classes['booking-body']}>\
<BookingText />
<ReservationForm />
</div>
      </>
    )
    }
    
    export default Booking;