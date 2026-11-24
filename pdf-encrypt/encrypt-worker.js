import { encrypt } from "./vendor/qpdf/dist/index.js";

const errorMessages = {
    WRONG_PASSWORD: "原 PDF 已设置打开密码，请选择可直接打开的 PDF。",
    QPDF_ERROR: "无法读取此 PDF，请检查文件格式或文件是否损坏。",
    WASM_ERROR: "PDF 加密组件加载或运行失败，请刷新页面后重试。",
    NotReadableError: "无法读取所选文件，请重新选择 PDF。",
};

self.onmessage = async ({ data: { file, openPassword } }) => {
    try {
        const input = new Uint8Array(await file.arrayBuffer());
        const randomBytes = crypto.getRandomValues(new Uint8Array(32));
        const ownerPassword = Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
        const { bytes, warnings } = await encrypt(input, { userPassword: openPassword, ownerPassword });
        self.postMessage({ bytes, hasWarnings: warnings.length > 0 }, [bytes.buffer]);
    } catch (error) {
        self.postMessage({ error: errorMessages[error.code] || errorMessages[error.name] || "PDF 加密失败，请检查文件后重试。" });
    }
};
