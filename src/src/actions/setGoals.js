import { UPDATE } from 'react-admin';

export const UPDATE_PAGE = 'GET_USER_GOALS';
export const setGoals = (id, data) => {
    console.log({
        type: UPDATE_PAGE,
        payload: { id, data: { ...data, is_updated: true } },
        meta: { fetch: UPDATE, resource: 'goals' },
    })
    return {
        type: UPDATE_PAGE,
        payload: { id, data: { ...data, is_updated: true } },
        meta: { fetch: UPDATE, resource: 'goals' },
    }
};