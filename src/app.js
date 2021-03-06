import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import configureStore from "./store/configureStore";

import 'react-dates/lib/css/_datepicker.css';
import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 500 }));
store.dispatch(addExpense({ description: "Rent", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 350403 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));