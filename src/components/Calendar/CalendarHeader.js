import React from 'react';

import { Pane, Button, IconButton } from 'evergreen-ui';

function CalendarHeader({
  currentDateTime,
  nextMonthAction,
  previousMonthAction
}) {
  return (
    <Pane display="flex" justifyContent="center" padding={16}>
      <IconButton icon="chevron-left" onClick={previousMonthAction} />
      <Button appearance="minimal">{currentDateTime.monthLong}</Button>
      <IconButton icon="chevron-right" onClick={nextMonthAction} />
    </Pane>
  );
}

export default CalendarHeader;
