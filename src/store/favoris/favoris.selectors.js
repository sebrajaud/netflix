import { createSelector } from 'reselect';

const favorisSelector = state => state.favoris;

export const favorisListSelector = createSelector(
    [favorisSelector],
    favoris => favoris.datas
)

export const favorisIsLoadingtSelector = createSelector(
    [favorisSelector],
    favoris => favoris.isLoading
)

export const favoriListTitleSelector = createSelector(
    [favorisListSelector],
    favorisDatas => favorisDatas ? favorisDatas.map(f => f.title) : []
)