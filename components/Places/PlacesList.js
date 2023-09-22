import { FlatList, View, Text, StyleSheet } from "react-native";

import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>No places added yet.</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        <PlaceItem place={item} />;
      }}
    />
  );
}

export default PlacesList;

styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallBackText: {
    fontSize: 16,
  },
});