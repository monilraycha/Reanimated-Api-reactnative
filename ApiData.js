import { StyleSheet, Text, View , FlatList, ActivityIndicator , SafeAreaView } from 'react-native'
import React , {useEffect , useState} from 'react'

const movieUrl = 'https://reactnative.dev/movies.json'

export default function ApiData() {

const [isLoading , setIsLoading] = useState(true);
const [data , setData] = useState([]);
const [title , setTitle] = useState([]);
const [description , setDescription] = useState([]);

useEffect(() => {
    fetch(movieUrl)
    .then((response) => response.json())
    .then((json) => {
        setData(json.movies);
        setTitle(json.title);
        setDescription(json.description);
    })
    .catch((error) => console.error(error))
    .finally(() => setIsLoading(false));
}, [])

  return (
    <SafeAreaView>
        {isLoading ? <ActivityIndicator /> : 
        <View>
            <Text style = {{fontSize : 20 , fontWeight : 'bold'}}>{title}</Text>
        <FlatList
        data={data}
        keyExtractor={ (item) => item.id}
        renderItem = {({item}) => 
        <Text style ={styles.movieList}>{item.id}  {item.title} , {item.releaseYear}
        </Text>
        }
        />
        <Text style = {styles.description}>{description}</Text>
        </View>
        }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    description : {
        color : 'grey',
        fontSize : 15,   
        marginTop : 20
    }, 
    movieList:{
        fontSize : 16,
        marginTop : 30,
        marginLeft : 10
        
    }

})