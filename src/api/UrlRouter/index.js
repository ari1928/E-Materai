import axios from "src/api/Config/index"

const index = {
    Login: (data) => axios.post("/auth/login", data),
    CekSaldo: () => axios.post("/saldo/prepaid"),
    Generate: () => axios.post("/generate"),
    BulkGenerate: (data) => axios.post("/bulk/reset-generate", data),
    Stamping: (data) => axios.post("/stamping", data),
    BulkStamping: (data) => axios.post("/bulk/stamping", data),
    JenisDocs: () => axios.get("/docs"),
};
export default index;