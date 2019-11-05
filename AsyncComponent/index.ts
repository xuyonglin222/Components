import React, { Component, lazy, Suspense, Fragment } from "react";

interface PROPS {
  [name: string]: any;
}

interface LOADER {
  (): any;
}

const LAZY = (loader: LOADER) => (props: PROPS) => {
  class AsyncComponent extends Component {
    render() {
      const Component = lazy(loader);

      const fallback = (() => {
        if (React.Children.count(props.children) > 0) {
          return props.children;
        }

        return <Fragment />;
      })();

      return (
        <Suspense fallback={fallback}>
          <Component {...props} />
        </Suspense>
      );
    }
  }

  return <AsyncComponent />;
};

export default LAZY;

/**
 * AsyncComponent(() => import('src/views/index'))
 */