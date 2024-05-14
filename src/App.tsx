import "./App.css";
import Alert from "./components/alert/Alert";

function App() {
  return (
    <div className="App">
      <Alert type="default" title="Upgrade your plan">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          temporibus doloremque <a>laboriosam</a> iste totam officiis beatae
          quas.
        </p>
      </Alert>

      <Alert type="success" title="Types of alerts has been processed"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>

      <Alert
        type="info"
        title="Note"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus aliquid odit voluptatem omnis veritatis nulla, obcaecati et sit possimus quidem quam doloremque sed?"
      />

      <Alert
        type="success"
        title="Your order has been processed"
        description="Lorem ipsum dolor sit quas numquam facilis nisi odit voluptatem omnis veritatis nulla, obcaecati et sit possimus quidem quam doloremque sed?"
      />

      <Alert
        type="error"
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus aliquid suscipit molestiae quas numquam facilis nisi odit quam doloremque sed?"
      />

      <Alert
        type="warning"
        title="Tips & Tricks"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus aliquid voluptatem omnis veritatis nulla, obcaecati et sit possimus quidem quam doloremque sed?"
      />
    </div>
  );
}

export default App;
