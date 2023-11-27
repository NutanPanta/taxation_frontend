import { createContext, useEffect, useReducer } from 'react';

// ----------------------------------------------------------------------

const initialState = { value: {}, queue: [] };

const handlers = {
  PUSH: (state, action) => {
    const { message, type } = action.payload;

    if (state.queue[state.queue.length - 1]?.message === message) return state;

    return state.queue.length === 0 && !state.value?.message
      ? { value: { message, type }, queue: [] }
      : { ...state, queue: [...state.queue, { message, type }] };
  },
  DELETE_VALUE: (state) => {
    return { ...state, value: {} };
  },
  MOVE_QUEUE: (state) => {
    const newQueue = state.queue.filter((queue, key) => key !== 0);

    return {
      value: state.queue[0] || {},
      queue: newQueue,
    };
  },
  CLEAR: () => {
    return initialState;
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const SnackbarContext = createContext({
  ...initialState,
  createSnackbar: () => Promise.resolve(),
  moveSnackbar: () => Promise.resolve(),
  clearSnackbar: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

const SnackbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const snackbarTimeout = (index = 0) => {
    const timer = setTimeout(() => {
      moveSnackbar({ index });
    }, 5000);
    return timer;
  };

  useEffect(() => {
    if (state.value?.message) {
      const snackbarTimer = snackbarTimeout();

      return () => clearTimeout(snackbarTimer);
    }
  }, [state.value]);

  const createSnackbar = async ({ message, type = 'info' }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      dispatch({
        type: 'PUSH',
        payload: {
          message,
          type,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const moveSnackbar = async ({ index }) => {
    try {
      dispatch({
        type: 'MOVE_QUEUE',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const clearSnackbar = async () => {
    try {
      return dispatch({
        type: 'CLEAR',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SnackbarContext.Provider
      value={{
        ...state,
        createSnackbar,
        moveSnackbar,
        clearSnackbar,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export { SnackbarContext, SnackbarProvider };
