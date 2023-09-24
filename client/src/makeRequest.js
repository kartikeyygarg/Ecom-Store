import axios from "axios";

export const makeRequest = axios.create({
    baseURL:"http://localhost:1337/api",
    headers: {
        Authorization:"bearer "+ "69650041e4e15d4f1792b3e77ddb15571388db55314d727e7955f6de72055e62ca899b2f671f6c55147e3597228a9bc9d7444c42471b449fe28e23571083a5959ae5da756c0dd4f97a79deddd5bc982324444706d18f241fb9785883b44bb98d6667ac744c1d2e80afd249cbf1ad852d9131e74e2d2b74aab10cc587cc909eb5",
  },
});