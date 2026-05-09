function Petals() {

  const petals = Array.from({ length: 25 });

  return (

    <div className="petal-container">

      {petals.map((_, index) => (

        <span
          key={index}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />

      ))}

    </div>

  );
}

export default Petals;