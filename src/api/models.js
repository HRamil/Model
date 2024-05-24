import axios from 'axios';

const API_URL = 'http://158.220.95.65:8000/api';

export const fetchModelsData = async () => {
    try {
        const response = await axios.get(`${API_URL}/model/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};