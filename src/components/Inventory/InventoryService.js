import axios from 'axios'

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/get-all"

class InventoryService {
    getInventory() {
        return axios.get(INVENTORY_API_BASE_URL)
    }

    createProduct(product) {
        return axios.get("http://localhost:8080/api/add-product", product)
    }
}

export default new InventoryService