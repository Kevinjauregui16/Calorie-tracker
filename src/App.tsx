import Form from "./components/Form";

function App() {
  return (
    <>
      <header className="py-3 bg-amber-200">
        <div className="flex justify-between max-w-4xl mx-auto">
          <h1 className="text-lg font-bold text-center text-gray-700 uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>
      <section className="px-5 py-20 bg-amber-100">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
