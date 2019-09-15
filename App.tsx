import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as TaskManager from 'expo-task-manager';

import locationService from './LocationService';
import { log } from './Utils';

locationService.defineTasks();

export default function App() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    log(`useEffect()`);
    async function registerTasks() {
      await locationService.registerTasks();
      await updateTasks();
    }
    registerTasks();
  }, []);

  async function updateTasks() {
    const tasks = await TaskManager.getRegisteredTasksAsync();
    setTasks(tasks);
  }

  return (
    <View style={styles.container}>
      <Text>Background Tasks . . .</Text>
      <Text></Text>
      {tasks &&
        tasks.map((task, index) => (
          <Text key={index} style={{ marginBottom: 10 }}>
            {JSON.stringify(task)}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
