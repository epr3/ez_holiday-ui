import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { Pane, Table } from 'evergreen-ui';

import CalendarHeader from './CalendarHeader';

const generateBlanks = range => {
  const blanks = [];
  for (let i = 1; i < range; i++) {
    blanks.push(<Table.TextCell key={`empty-${i}`} />);
  }
  return blanks;
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(item => (
  <Table.TextHeaderCell key={item}>{item}</Table.TextHeaderCell>
));

const buildCalendar = dt => {
  const currentDate = DateTime.local();
  const startOfMonth = dt.startOf('month');
  const daysInMonth = [];

  for (let i = 1; i <= dt.daysInMonth; i++) {
    const currentDayCondition =
      currentDate.hasSame(startOfMonth.plus({ days: i - 1 }), 'month') &&
      currentDate.day === startOfMonth.plus({ days: i - 1 }).day;
    daysInMonth.push(
      <Table.TextCell
        background={currentDayCondition ? 'redTint' : ''}
        key={`day-${i}`}
      >
        {i}
      </Table.TextCell>
    );
  }

  const rows = [];
  let cells = [];
  const totalSlots = [...generateBlanks(startOfMonth.weekday), ...daysInMonth];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }

    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });
  console.log('here');
  return rows.map((d, i) => (
    <Table.Row key={`row-${i}`} justifyContent="flex-start">
      {d}
      {generateBlanks(7 - d.length + 1)}
    </Table.Row>
  ));
};

function Calendar() {
  const [dt, setDt] = useState(DateTime.local());
  const [table, setTable] = useState([]);

  const nextMonth = () => {
    setDt(dt.plus({ months: 1 }));
  };

  const previousMonth = () => {
    setDt(dt.minus({ months: 1 }));
  };

  useEffect(() => {
    setTable(buildCalendar(dt));
  }, [dt]);

  return (
    <Pane
      display="flex"
      flex={1}
      flexDirection="column"
      padding={window.innerWidth > 600 ? 16 : 0}
    >
      <CalendarHeader
        currentDateTime={dt}
        nextMonthAction={nextMonth}
        previousMonthAction={previousMonth}
      />
      <Table>
        <Table.Head>{days}</Table.Head>
        <Table.Body overflowY="hidden">{table}</Table.Body>
      </Table>
    </Pane>
  );
}

export default Calendar;
