import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface Item {
  id: number;
  value: string;
}

interface Props {
  filterStatus?: any;
  datesFilter?: any
}

export default function Reports(props: Props): JSX.Element {
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [status, setStatus] = React.useState<any[]>([]);

  const options: Item[] = [
    { id: 1, value: "APPROVED" },
    { id: 2, value: "DECLINED" },
    { id: 3, value: "NEW" },
    { id: 4, value: "MORE_INFO" },
  ];

  const handleSelect = (item: Item) => {
    let temp = status;
    let i = item.value as string;
    temp.indexOf(i) === -1
      ? temp.push(i)
      : temp.splice(temp.indexOf(i), 1);

    setStatus(temp);
    props.filterStatus(status);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleCalendarShowHide = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      Reports
      <div className="form-inline">
        {options.map((item, i) => (
          <div className="custom-control custom-checkbox" key={i}>
            <input
              className="custom-control-input custom-control-input-success custom-control-input-outline ml-2"
              type="checkbox"
              key={item.id}
              id={`customCheckbox${item.id}`}
              value={item.id}
              onChange={() => {
                handleSelect(item);
              }}
            />
            <label htmlFor={`customCheckbox${item.id}`} className="custom-control-label mr-2  ">
              {item.value}{" "}
            </label>
          </div>
        ))}
        {/*<button className="btn btn-xs btn-warning btn-outline" onClick={handleCalendarShowHide}>
          <i className="far fa-calendar-alt"></i>
          {showCalendar ? " Hide Calendar" : " Show Calendar"}
        </button>
            */}
      </div>
      <div className="row">
        {showCalendar ? (
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        ) : null}
      </div>
    </div>
  );
}
