/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button, Input, Item} from './src/components';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [todo, setTodo] = useState<string>('');
  const [isError, setError] = useState<boolean>(false);
  const [todos, setTodos] = useState<string[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleDelete = () => {};

  const handleAddItem = () => {
    if (!todo) {
      setError(true);
      return;
    }
    setTodos([todo, ...todos]);
    setError(false);
    setTodo('');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 50,
          marginBottom: 60,
          paddingHorizontal: 20,
        }}>
        <Input
          value={todo}
          onChange={e => {
            console.log('rerecere', e.Text);
            setError(false)
            setTodo(e);
          }}
        />
        <Button
          onPress={() => {
            handleAddItem();
          }}
        />
      </View>
     {isError &&(
      <Text style={{color:"red",marginVertical:20}}>Item is required!</Text>
     )} 
      <FlatList
        data={todos}
        ListEmptyComponent={() => <Text>No Data</Text>}
        renderItem={({item}) => <Item title={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
