import {CREATE_CASH_FLOW, DELETE_CASH_FLOW} from 'actionTypes';

export const create = ({name, commitment}) => ({
    type: CREATE_CASH_FLOW,
    payload: {
        name,
        commitment
    }
})

export const remove = ({ id }) => ({
    type: DELETE_CASH_FLOW,
    payload: { id }
})

