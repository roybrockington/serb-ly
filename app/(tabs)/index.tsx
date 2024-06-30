import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const hour = new Date().getHours()
  const welcomeTypes = ['dobro jutro', 'dobar dan', 'dobro veče']
  let welcome = ''
  if (hour < 12) welcome = welcomeTypes[0]
  else if (hour < 18) welcome = welcomeTypes[1]
  else welcome = welcomeTypes[2]

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/kalemegdan.jpg')}
          style={styles.splash}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{welcome}</ThemedText>
        <HelloWave />
      </ThemedView>
      
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Flashcards</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Words</ThemedText>
               <View className='mx-4 text-red-500'><Text>test</Text></View> 
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pictures</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  splash: {
    height: 640,
    width: 480,
    top: 0,
    position: 'absolute',
  },
});
