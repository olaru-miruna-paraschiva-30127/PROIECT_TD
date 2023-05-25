import http from "@/http-common";

/* eslint-disable */
class ParrotDataService {
  getAll(): Promise<any> {
    return http.get("/parrots");
  }

  get(id: any): Promise<any> {
    return http.get(`/parrots/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/parrots", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/parrots/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/parrots/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/parrots`);
  }

  findByName(name: string): Promise<any> {
    return http.get(`/parrots?name=${name}`);
  }
}

export default new ParrotDataService();
