import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ProgressBarAndroid,
} from 'react-native';

const Pokemons = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  const getNumber = num => {
    num = num.toString();
    const paddednum = num.padStart(3, '0');
    return paddednum;
  };

  const getRandomeValue = () => {
    let value = Math.random();
    value = value.toString();
    value = Number(
      value
        .split('')
        .splice(0, 3)
        .join(''),
    );
    return value;
  };

  return (
    <View style={{backgroundColor: 'lightgreen'}}>
      <TouchableOpacity
        style={styles.pokeball}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require('../assests/pokeball2.png')}
          style={{width: 45, height: 45}}
        />
      </TouchableOpacity>
      <ScrollView style={styles.pokeWrapper}>
        <View style={styles.container}>
          {pokemons.map((pokemon, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                style={styles.card}
                onPress={() =>
                  navigation.navigate('Details', {
                    pokemon: pokemon.name,
                    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                      index + 1,
                    )}.png`,
                  })
                }>
                <View style={styles.CpCont}>
                  <Text style={{color: 'grey', fontSize: 10, top: 5}}>CP</Text>
                  <Text
                    style={{fontSize: 22, color: 'darkgreen', marginLeft: 3}}>
                    {getRandomeValue() * 100}
                  </Text>
                </View>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getNumber(
                      index + 1,
                    )}.png`,
                  }}
                />
                <Text>{pokemon.name}</Text>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  style={{width: '90%'}}
                  indeterminate={false}
                  color="#63CB6C"
                  animating={true}
                  progress={1}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  pokeWrapper: {
    backgroundColor: '#fff',
    marginHorizontal: 7,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  pokeball: {
    position: 'absolute',
    right: '45%',
    bottom: 0,
    zIndex: 1,
  },
  CpCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
});
