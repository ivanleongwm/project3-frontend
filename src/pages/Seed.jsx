const seed = [
  {
    name: "New Year's Day",
  },
  {
    name: "Good Friday",
  },
];

function Seed() {
  return (
    <>
      <h1>Seed</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
