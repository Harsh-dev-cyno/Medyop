// AlarmService.js
import * as Notifications from 'expo-notifications';

export const setAlarm = async (alarmTime) => {
  const identifier = 'my-alarm-identifier';

  // Cancel any existing notifications with the same identifier
  await Notifications.cancelScheduledNotificationAsync(identifier);

  // Schedule the new notification
  const schedulingOptions = {
    content: {
      title: 'Alarm',
      body: 'Time to wake up!',
    },
    trigger: {
      date: alarmTime,
    },
  };

  await Notifications.scheduleNotificationAsync(schedulingOptions);

  return identifier;
};
