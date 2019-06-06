import { MessageToSend, MessageReceived } from "../model/message.model";
import { api } from "./api.service";
import { Paged } from "../model";



export const messageService = {

    markMessageAsRead: async (id: number) => {
        const response = await api.put<{}>(`/message/mark-as-read/${id}`)
        return response.data
    },
    findMessageById: async (id: number) => {
        const response = await api.get<MessageReceived>(`/message/find-by-id/${id}`)
        return response.data
    },
    findReceivedMessages: async (page: number) => {
        const response = await api.get<Paged<MessageReceived>>(`/message/find-all/received?page=${page}`)
        return response.data
    },
    sendMessage: async (message: MessageToSend) => {
        const response = await api.post<{}>('/message/send', message)
        return response.data
    }

}
