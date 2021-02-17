import axios, { AxiosResponse } from 'axios';
import { AlertConstants } from '../alerts/AlertConstants';
import { LogFormData } from '../../../components/forms/types';
import { IAlert } from '../alerts/types';
import { getTokens } from '../auth/helpers';
import { ILog } from './types';

export async function updateLog(id: number, formData: LogFormData) {
    const { token } = getTokens();
    const res: AxiosResponse<IAlert> = await axios.put(`http://localhost:5000/api/logs/log-item/${id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return { ...res.data, type: AlertConstants.Success };
}

export async function getLog(taskId: number) {
    const { token } = getTokens();
    const res: AxiosResponse<ILog[]> = await axios.get(`http://localhost:5000/api/logs/${taskId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}