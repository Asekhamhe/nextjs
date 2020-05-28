import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res({ appName: "Super APP" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main Page {this.props.appName}</h1>
        <p>
          Go to
          <Link href="/auth">
            <a> Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to auth</button>
      </div>
    );
  }
}

export default IndexPage;
