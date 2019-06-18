import React from 'react';

import { Pane, Text, Icon } from 'evergreen-ui';

function CalendarHeader({
  currentDateTime,
  nextMonthAction,
  previousMonthAction
}) {
  return (
    <Pane display="flex" padding={16}>
      <Icon icon="chevron-left" onClick={previousMonthAction} />
      <Text>{currentDateTime.monthLong}</Text>
      <Icon icon="chevron-right" onClick={nextMonthAction} />
    </Pane>
  );
}

export default CalendarHeader;
