import axios from "axios";

export default class Manager {
  async Dlete(id) {
    console.log(`id = ${id}`);
    const response = await axios.delete("http://localhost:3000", {
      data: `id=${id1}`,
    });
    return response.data;
  }
}
