import React, { FC, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { User } from "../../../../services/models/models";
import { useAppSelector } from "../../../../services/store";

interface Props {
  ifInaccessibleRedirectTo: string;
}

const AuthenticatedGuard: FC<Props> = (props) => {
  const { ifInaccessibleRedirectTo, children } = props;

  const { isAuth } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    // const unsubscribe = store.subscribe(() => {
    //   setAuthenticated(isUserHavingToken(store.getState().user))
    // });
    // return unsubscribe;
    //check token
  }, []);

  //   function isUserHavingToken(user: User): boolean {
  //     return !!user.token;
  //   }

  return (
    <>
      {isAuth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: ifInaccessibleRedirectTo,
            state: { referrer: "/cart" },
          }}
        />
      )}
    </>
  );
};

export default AuthenticatedGuard;
