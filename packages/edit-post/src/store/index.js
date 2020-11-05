/**
 * WordPress dependencies
 */
import {
	createUseStoreDispatch,
	createUseStoreSelect,
	registerStore,
} from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import applyMiddlewares from './middlewares';
import * as actions from './actions';
import * as selectors from './selectors';
import { STORE_KEY } from './constants';

const store = registerStore( STORE_KEY, {
	reducer,
	actions,
	selectors,
	persist: [ 'preferences' ],
} );

applyMiddlewares( store );

export const useDispatch = createUseStoreDispatch( STORE_KEY );
export const useSelect = createUseStoreSelect( STORE_KEY );

export default store;
