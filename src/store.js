import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const storageReducer = createSlice({
    name: 'd_st',
    initialState: {
        val: 'aaa',
        user: null,
    },
    reducers: {
        someAction1: (state, action) => {
            // console.log(action);
            state.val = state.val === "aaa" ? action.payload : "aaa";
            // state.val = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },


    },
});
const reducer = createSlice({
    name: 'd',
    initialState: {
        val: '',
    },
    reducers: {
        someAction1: (state, action) => {
            console.log(action);
            state.page1val = action.payload;
        },

    },
});
const rootReducer = combineReducers({
    stReducer: storageReducer.reducer,
    justReducer: reducer.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['justReducer'],
    // whitelist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: {
//         someReducer1: reducer1.reducer,
//     },
//     devTools: true
// });

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        });
    }
});

export const persist = persistStore(store);
