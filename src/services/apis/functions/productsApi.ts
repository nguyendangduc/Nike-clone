import axios, { AxiosResponse, AxiosError } from "axios";
import client from "../client";

export function getProducts(url: string): Promise<any> {
  return client.get('/products'+url)
}
