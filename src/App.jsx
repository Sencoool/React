import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";

function App() {
  const helloData = [
    { name: "Bob", message: "Do Something" },
    { name: "I", message: "Need Healing" },
  ];
  // App is our only Component
  // function retur only 1 elements if want more make it div
  return (
    <div>
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="test@gmail.com" phone="999-999-9999" />
    </div>
  );
}

export default App;
