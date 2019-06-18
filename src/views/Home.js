import React from 'react';

import AuthLayout from '../layouts/AuthLayout';
import Calendar from '../components/Calendar';

function Home() {
  return (
    <AuthLayout>
      <Calendar />
    </AuthLayout>
  );
}

export default Home;
