import instance  from "./apiConfing";


export function getProduct() {
  return instance.get("/organizations");
}
