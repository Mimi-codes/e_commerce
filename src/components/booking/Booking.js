
import classes from './Booking.module.css'
import BookingButton from './BookingButton';
import BookingText from './BookingText';
import ReservationForm from './ReservationForm';

function Booking() {
    return (
      <>
      <div className={classes['booking-body']}>\
<BookingText />
<ReservationForm />
<BookingButton />
</div>
      </>
    )
    }
    
    export default Booking;