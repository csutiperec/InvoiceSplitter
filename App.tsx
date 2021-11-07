import React from 'react';
import { GroupsProvider } from './components/GroupsProvider';
import { HistoryProvider } from './components/HistoryProvider';
import NavigationStack from './components/NavigationStack';

export default function App() {
  return (
    <HistoryProvider>
      <GroupsProvider>
        <NavigationStack/>
      </GroupsProvider>
    </HistoryProvider>
  );
}
