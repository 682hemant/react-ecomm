import React,{useState} from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from 'moment'
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { sortByDate } from "../../redux/wishlist/actions";

const DatePicker =() => {
  const [state, setState] = useState({
    start: moment().subtract(29, 'days'),
    end: moment(),
  });
  const dispatch = useDispatch();
  const { start, end } = state;
  const handleCallback = (start, end) => {
    dispatch(sortByDate({startDate:start._d,endDate:end._d}))
    setState({ start, end });
  };
  const label =
    start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
  return (
    <DateRangePicker
      initialSettings={{
        startDate: start.toDate(),
        endDate: end.toDate(),
        ranges: {
          Today: [moment().toDate(), moment().toDate()],
          Yesterday: [
            moment().subtract(1, 'days').toDate(),
            moment().subtract(1, 'days').toDate(),
          ],
          'Last 7 Days': [
            moment().subtract(6, 'days').toDate(),
            moment().toDate(),
          ],
          'Last 30 Days': [
            moment().subtract(29, 'days').toDate(),
            moment().toDate(),
          ],
          'This Month': [
            moment().startOf('month').toDate(),
            moment().endOf('month').toDate(),
          ],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month').toDate(),
            moment().subtract(1, 'month').endOf('month').toDate(),
          ],
        },
      }}
      onCallback={handleCallback}
    >
      <DateRangePickerStyles
        id="reportrange"
        className="col-md-4 col-12"
      >
        <i className="fa fa-calendar"></i>&nbsp;
        <span>{label}</span> <i className="fa fa-caret-down"></i>
      </DateRangePickerStyles>
    </DateRangePicker>
  );
}

export default DatePicker;

const DateRangePickerStyles = styled.div`
    background: #fff;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #ccc;
    width: 25rem;
    @media (max-width:768px){
        width: 20rem;
    } 
`


