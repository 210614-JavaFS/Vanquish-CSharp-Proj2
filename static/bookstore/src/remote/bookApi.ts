
import Books from "../models/Books";
import booksClient from "./BooksClient";


export type BookApiSuccess = {
    status: number,
    payload: Books
}

export type BookApiError = {
    status: number,
    message: string;

}

export type BookApiResponse = BookApiSuccess | BookApiError;

export const apiGetBooks = async (): Promise<BookApiResponse> => {

    const response = await booksClient.get<Books>("");

    if (response.status === 200) {
        console.log(response.data);
        return { status: response.status, payload: response.data }
    }
    if (response.status === 404) {
        return { status: response.status, message: "Failed to retrieve books" }
    }

    return { status: 404, message: "Failed to fetch Book" }
}