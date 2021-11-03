import React from 'react';
import { GroupsProvider } from './components/GroupsProvider';
import NavigationStack from './components/NavigationStack';

export default function App() {
  return (
    <GroupsProvider>
      <NavigationStack/>
    </GroupsProvider>
  );
}
