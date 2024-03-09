import { ProductCard } from "../../common/productCard/ProductCard";
import styles from "./ItemList.module.css";

export const ItemList = ({ elements }) => {
  return (
    <div className={styles.allItems}>
      {elements.map(
        ({ id, img, title, description, price, stock, category }) => {
          return (
            <ProductCard
              key={id}
              img={img}
              title={title}
              description={description}
              price={price}
              stock={stock}
              category={category}
              id={id}
            />
          );
        }
      )}
    </div>
  );
};
