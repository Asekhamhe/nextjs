import React from "react";
import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The auth index page {props.appName}</h1>
    <User name="Lawrence" age={25} />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res({ appName: "Supper App Auth" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
