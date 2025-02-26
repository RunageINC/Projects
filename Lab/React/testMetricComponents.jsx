// 1st approach

const Kpi = () => {
  return (
    <div>
      <h1>hey</h1>
    </div>
  );
};

const MetricComponent = () => {
  return (
    <div>
      <Kpi />
    </div>
  );
};

const Metrics = (props) => {
  return <MetricComponent {...props} />;
};

// ---------------------------------------------------

// 2nd approach

const Kpi = () => {
  return (
    <div>
      <h1>hey</h1>
    </div>
  );
};

const MetricComponent = ({ children }) => {
  return <div>{children}</div>;
};

const Metrics = () => {
  return (
    <MetricComponent>
      <Kpi />
    </MetricComponent>
  );
};
