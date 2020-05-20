import {
  AsyncStorage
} from 'react-native';

export function authHeader() {
    // return authorization header with basic auth credentials
    
    let userStored = AsyncStorage.getItem('user');
    if (userStored != null){
        // your code here.
        let user = JSON.parse(userStored);
        if (user && user.authdata) {
            return { 'Authorization': 'Basic ' + user.authdata };
        }
    }
    return {};
}