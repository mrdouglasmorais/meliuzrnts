import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Hello: React.FC = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });
  const [showPerson, setShowPerson] = useState(false);
  return (
    <View>
      <Text testID="hello">Hello</Text>
      <TextInput
        placeholder="Informe seu nome"
        onChangeText={text => setPerson({...person, name: text})}
        value={person.name}
      />
      <TextInput
        placeholder="Informe sua idade"
        onChangeText={text => setPerson({...person, age: text})}
        value={person.age}
      />
      <Button
        title="clique aqui"
        testID="clique-aqui"
        onPress={() => setShowPerson(true)}
      />
      {showPerson && (
        <View>
          <Text testID="name">{person.name}</Text>
          <Text testID="age">{person.age}</Text>
        </View>
      )}
    </View>
  );
};

export default Hello;
