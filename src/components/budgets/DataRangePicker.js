import React from "react";
import "./DataRangePicker.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Responsive from "react-responsive";

class DateRange extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    endDateFormatted: null,
    startDateFormatted: null,
  };
  hundleDateChange(startDate, endDate) {
    this.setState(() => ({
      startDate,
      endDate  
    }));
    if (startDate != null) {
      this.setState(() => ({
        startDateFormatted: startDate.format("D-MM-Y"),
      }));
    }
    if (endDate != null) {
      this.setState(() => ({
        endDateFormatted: endDate.format("D-MM-Y"),
      }));
    }
    if(startDate != null && endDate != null){
      
      this.props.getDate( startDate, endDate);

  }
  }

  render() {
    return (
      <div className="DateRange" >
        <pre style={{ textAlign: "left" }}>
          <p> start date:  {this.state.startDateFormatted} </p>
          <p> end date:  {this.state.endDateFormatted} </p>
        </pre>
        <Mobile>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start_date_id"
            endDate={this.state.endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.hundleDateChange(startDate, endDate)

            }
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            numberOfMonths={1}
            orientation="horizontal"
          />
        </Mobile>

        <Default>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start_date_id"
            endDate={this.state.endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.hundleDateChange(startDate, endDate)
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            numberOfMonths={2}
            orientation="horizontal"
          />
        </Default>
      </div>
    );
  }
}
export default DateRange;

export const Mobile = (props) => <Responsive {...props} maxWidth={400} />;
export const Default = (props) => <Responsive {...props} minWidth={400} />;