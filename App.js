// Import polyfills
import "@thirdweb-dev/react-native-compat";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ThirdwebProvider, useEmbeddedWallet, embeddedWallet, useAddress } from "@thirdweb-dev/react-native";

 
const embeddedWalletConfig = embeddedWallet();

export default function App() {
  return (
    <ThirdwebProvider clientId="697e11dc360f42399d8c1e67384bfcc1" supportedWallets={[
      embeddedWalletConfig
    ]}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Component />
      <Address />
      <StatusBar style="auto" />
    </View>
    </ThirdwebProvider>
  );
}

function Component(){
  const embeddedWallet = useEmbeddedWallet();
  const onPress = async () => {
    embeddedWallet.connect({
      strategy: "auth_endpoint",
      payload: "277a696f-ba5a-4924-8a6a-5c2cf06bddb4",
      encryptionKey: "testing",
    });
  };

  return (<Button onPress={onPress} title="Custom Auth" />);
}

function Address(){
  const address = useAddress();
  return <Text>{address}</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
