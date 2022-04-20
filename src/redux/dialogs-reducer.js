const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Владислав'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Юлия'},
        {id: 4, name: 'Александр'},
        {id: 5, name: 'Евгений'},
        {id: 6, name: 'Валерий'}
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Что делаешь?'},
        {id: 4, message: 'Обучайся React'},
        {id: 5, message: 'Обучайся React'}
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;