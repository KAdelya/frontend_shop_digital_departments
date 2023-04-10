import styles from './index.module.sass'
import {FC} from "react";

interface ProductInfoProps {
    sku: string,
    category: string,
    brand: string,
    stock: 'In stock' | 'Not available'
}

const ProductInfo: FC<ProductInfoProps> = ({sku, category, brand, stock}) => {
    return (
        <aside className={styles.product}>
            <ul>
                <li>
                    <span>SKU:</span>
                    <label>{sku}</label>
                </li>
                <li>
                    <span>Category:</span>
                    <label>{category}</label>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Brand:</span>
                    <label>{brand}</label>
                </li>
                <li>
                    <span>Stock:</span>
                    <label>{stock}</label>
                </li>
            </ul>
        </aside>
    )
}

export default ProductInfo