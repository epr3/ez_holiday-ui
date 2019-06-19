import React from 'react';

import { Pane, Button, IconButton } from 'evergreen-ui';

function CalendarHeader({
  currentDateTime,
  nextMonthAction,
  previousMonthAction
}) {
  return (
    <Pane display="flex" justifyContent="center" padding={16}>
      <IconButton
        icon="chevron-left"
        onClick={previousMonthAction}
        marginRight={16}
      />
      <Button disabled isActive={false} appearance="minimal">
        {currentDateTime.monthLong}
      </Button>
      <IconButton
        icon="chevron-right"
        onClick={nextMonthAction}
        marginLeft={16}
      />
    </Pane>
  );
}

export default CalendarHeader;
