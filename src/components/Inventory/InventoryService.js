import axios from 'axios'

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/product/get-all"

class InventoryService {
    getInventory() {
        return axios.get(INVENTORY_API_BASE_URL)
    }

    createProduct(product) {
        return axios.post("http://localhost:8080/api/product/add-product", product)
    }

    getProductById(productId) {
        return axios.get("http://localhost:8080/api/product/get-product-by-id", + '/' + productId)
    }

    updateProduct(product, productId) {
        return axios.put("http://localhost:8080/api/product/get-product-by-id", + '/' + productId, product)
    }
}

export default new InventoryService