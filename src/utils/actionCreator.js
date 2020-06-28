const actionCreator = (moduleName) => (type, payloadCreator = () => {}) => {
  
    const createAction = (...args) => {
        const payload = payloadCreator(...args);
        const action = {type, payload};
        action.meta = moduleName;
        return action;
    }
    return createAction;
};

export default actionCreator;
