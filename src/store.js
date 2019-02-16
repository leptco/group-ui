import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';
import * as getters from './getters';
import { OPERATE, DEFAUL_VALUE } from './constants';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		groupUi: [],
	},
	mutations: {
		[types.ADD_GROUP](state, data) {
			state.groupUi.push([]);
		},
		[types.ADD_ITEM](state, indexGroup) {
			state.groupUi[indexGroup].push({ col1: null });
		},
		[types.CHANGE_TYPE_ITEM](state, data) {
			let operate = [];
			for (let key in OPERATE) {
				if (OPERATE.hasOwnProperty(key) && key === data.itemType[1]) {
					operate = OPERATE[key];
					break;
				}
			}
			let cloneGroupUi = [...state.groupUi];
			cloneGroupUi[data.indexGroup][data.indexItem] = {
				col1: data.itemType,
				col2: { operate, value: operate[0].value },
				col3: { type: data.itemType[1], value: DEFAUL_VALUE[data.itemType[1]] },
			};
			state.groupUi = cloneGroupUi;
		},
		[types.CHANGE_OPERATE](state, data) {
			let cloneGroupUi = [...state.groupUi];
			state.groupUi = cloneGroupUi;
		},
		[types.REMOVE_ITEM](state, data) {
			let cloneGroupUi = [...state.groupUi];
			cloneGroupUi[data.indexGroup].splice(data.indexItem, 1);
			if (cloneGroupUi[data.indexGroup].length === 0) {
				cloneGroupUi.splice(data.indexGroup, 1);
			}
			state.groupUi = cloneGroupUi;
		},
	},
	actions: {
		addGroup: ({ commit }, payload) => {
			commit(types.ADD_GROUP, payload);
		},
		addItem: ({ commit }, payload) => {
			commit(types.ADD_ITEM, payload);
		},
		changeTypeItem: ({ commit }, payload) => {
			commit(types.CHANGE_TYPE_ITEM, payload);
		},
		changeOperate: ({ commit }, payload) => {
			commit(types.CHANGE_OPERATE, payload);
		},
		removeItem: ({ commit }, payload) => {
			commit(types.REMOVE_ITEM, payload);
		},
	},
	getters,
});
