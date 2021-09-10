import React, { useEffect } from 'react';
import {
  BrowserRouter, Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import LogIn from '../LogIn/LogIn';
import Dashboard from '../Dashboard/Dashboard';
import Game from '../../components/Game/Game';
import ProtectedRoute from '../../components/ProtectedRoutes';
import { setAuthentication } from '../../actions';

const Routes = () => {
  const auth = useSelector(state => state.authReducer.auth);
  return (
    <Switch>
      <ProtectedRoute path="/login" redirect="/dashboard" auth={!auth} component={LogIn} />
      <ProtectedRoute path="/dashboard" redirect="/login" auth={auth} component={Dashboard} />
      <ProtectedRoute path="/game/:name" redirect="/login" auth={auth} component={Game} />
    </Switch>
  );
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = Cookies.get('user');
    if (user) {
      dispatch(setAuthentication(true));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
