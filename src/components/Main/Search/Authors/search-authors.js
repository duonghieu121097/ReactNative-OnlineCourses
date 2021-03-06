import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from '../../../Common/screen-container'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import ThemedText from '../../../Common/themed-text'
import SectionAuthorsItemForSearch from '../../Browse/SectionAuthorsItem/section-authors-item-for-search'

const SearchAuthors = (props) => {
    return (
        <ScreenContainer>
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ThemedText style={{ margin: 6 }}>Authors</ThemedText>
                        <ThemedText style={{ margin: 6 }}>{props.authorTotal} results</ThemedText>
                    </View>
                    <FlatList
                        horizontal={true}
                        data={props.author}
                        renderItem={({ item }) => <SectionAuthorsItemForSearch navigation={props.navigation} item={item} />}
                    />
                </View>
            </ScrollView>
        </ScreenContainer>
    )
}

export default SearchAuthors

const styles = StyleSheet.create({})
