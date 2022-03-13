import SiteLayout from './SiteLayout';

const Callout = ({ children }) => (
  <div className="callout">{children}</div>
);

function App() {
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <>
        <Callout>Callout</Callout>
        <h1>Contents</h1>
        <p>This is the main part of the exmaple layout</p>
      </>
    </SiteLayout>
  );
}

export default App;
