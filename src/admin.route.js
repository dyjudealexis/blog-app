import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const AdminRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated() || localStorage.getItem("no_set")==="1") {
          
          if(localStorage.getItem("no_set_admin")==="1"){
            return <Component {...props} />;
          }
          else {
            
            return (
                
              <Redirect
                to={{
                  pathname: "*",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        } else {
            
          return (
              
            <Redirect
              to={{
                pathname: "*",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
