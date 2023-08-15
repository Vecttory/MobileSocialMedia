import React, {useState} from 'react';
import {
  Animated,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Title from './Components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserPost from './Components/UserPost/UserPost';
import style from './assets/styles/main';
import UserStory from './Components/UserStory/UserStory';

const App = () => {
  const posts = [
    {
      id: 1,
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sakuradita, Japan',
      likes: 1202,
      comments: 43,
      bookmarks: 55,
    },
    {
      id: 2,
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leugsir, Jawa Barat',
      likes: 570,
      comments: 3,
      bookmarks: 60,
    },
    {
      id: 3,
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
    },
    {
      id: 4,
      firstName: 'Alberto',
      lastName: 'Ola',
      location: 'Xela, Quetzaltenango',
      likes: 77,
      comments: 8,
      bookmarks: 1,
    },
    {
      id: 5,
      firstName: 'Boris',
      lastName: 'Ruiz',
      location: 'Quito, Ecuador',
      likes: 27,
      comments: 3,
      bookmarks: 5,
    },
    {
      id: 6,
      firstName: 'Juan',
      lastName: 'Ola',
      location: 'New York, New York',
      likes: 27,
      comments: 3,
      bookmarks: 19,
    },
    {
      id: 7,
      firstName: 'Juan',
      lastName: 'Ola',
      location: 'New York, New York',
      likes: 27,
      comments: 3,
      bookmarks: 4,
    },
  ];

  const data = [
    {
      id: 1,
      firstName: 'Joseph',
    },
    {
      id: 2,
      firstName: 'Alex',
    },
    {
      id: 3,
      firstName: 'Boris',
    },
    {
      id: 4,
      firstName: 'Vetto',
    },
    {
      id: 5,
      firstName: 'Cesar',
    },
    {
      id: 6,
      firstName: 'Vale',
    },
    {
      id: 7,
      firstName: 'Fati',
    },
    {
      id: 8,
      firstName: 'Rocio',
    },
    {
      id: 9,
      firstName: 'Gara',
    },
    {
      id: 10,
      firstName: 'Maggie',
    },
    {
      id: 11,
      firstName: 'Alecka',
    },
    {
      id: 12,
      firstName: 'Kevin',
    },
    {
      id: 13,
      firstName: 'Kira',
    },
    {
      id: 14,
      firstName: 'Andre',
    },
    {
      id: 15,
      firstName: 'Agata',
    },
    {
      id: 16,
      firstName: 'Ines',
    },
  ];

  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));

  const pageSizePost = 2;
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderDataPosts, setRenderDataPosts] = useState(
    posts.slice(0, pageSizePost),
  );

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{display: 'flex', flexDirection: 'column'}}
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={"Let's Explore"} />
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </Pressable>
            </View>
            <View style={style.usersStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoading(false)}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize, false),
                    ]);
                    setIsLoading(false);
                  }
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderData}
                renderItem={({item}) => {
                  return <UserStory firstName={item.firstName} />;
                }}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePost, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
