import styles from "./Home.module.css";
import { cars } from "./cars.data.js";

function Home() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        {cars.length ? (
          cars.map((car) => (
            <div key={car.id} className={styles.item}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${car.image})`,
                }}
              ></div>

              <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(car.price)}
                </p>
                <button>Read more</button>
              </div>
            </div>
          ))
        ) : (
          <p> There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
