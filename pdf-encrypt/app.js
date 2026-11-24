const form = document.querySelector("#pdf-form");
const fields = document.querySelector("#pdf-fields");
const sourceFile = document.querySelector("#source-file");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirm-password");
const outputName = document.querySelector("#output-name");
const encryptButton = document.querySelector("#encrypt-button");
const downloadLink = document.querySelector("#download-link");
const status = document.querySelector("#pdf-status");

let downloadUrl;

function showStatus(message, isError = false) {
    status.textContent = message;
    status.classList.toggle("is-error", isError);
}

function clearResult() {
    if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
        downloadUrl = undefined;
        downloadLink.removeAttribute("href");
        downloadLink.hidden = true;
    }
    showStatus("");
}

function pdfFilename(name) {
    const base = name.trim()
        .replace(/\.pdf$/i, "")
        .replace(/[<>:"/\\|?*\x00-\x1f\x7f]/g, "_")
        .replace(/^[.\s]+|[.\s]+$/g, "");
    const reserved = /^(?:CON|PRN|AUX|NUL|COM[1-9¹²³]|LPT[1-9¹²³])(?:\.|$)/i.test(base);
    return `${reserved ? "_" : ""}${base || "加密文件"}.pdf`;
}

function updateDownloadName() {
    downloadLink.download = pdfFilename(outputName.value);
}

function encryptPdf(file, openPassword) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./encrypt-worker.js", { type: "module" });
        const fail = () => {
            worker.terminate();
            reject(new Error("无法启动 PDF 加密组件，请刷新页面后重试。"));
        };

        worker.onmessage = ({ data }) => {
            worker.terminate();
            if (data.error) {
                reject(new Error(data.error));
            } else {
                resolve(data);
            }
        };
        worker.onerror = fail;
        worker.onmessageerror = fail;
        try {
            worker.postMessage({ file, openPassword });
        } catch {
            fail();
        }
    });
}

sourceFile.addEventListener("change", () => {
    clearResult();
    const file = sourceFile.files[0];
    outputName.value = file ? pdfFilename(`${file.name.replace(/\.pdf$/i, "")}-加密`) : "";
});

password.addEventListener("input", clearResult);
confirmation.addEventListener("input", clearResult);
outputName.addEventListener("input", updateDownloadName);

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (encryptButton.disabled) return;
    clearResult();

    const file = sourceFile.files[0];
    const openPassword = password.value;
    if (!openPassword.trim() || openPassword.includes("\0") || new TextEncoder().encode(openPassword).length > 127) {
        showStatus("请输入非空密码，长度最多为 127 个 UTF-8 字节。", true);
        password.focus();
        return;
    }
    if (openPassword !== confirmation.value) {
        showStatus("两次输入的密码不一致。", true);
        confirmation.focus();
        return;
    }

    encryptButton.disabled = true;
    fields.disabled = true;
    showStatus("正在加密 PDF…");

    try {
        const { bytes, hasWarnings } = await encryptPdf(file, openPassword);
        downloadUrl = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
        downloadLink.href = downloadUrl;
        updateDownloadName();
        downloadLink.hidden = false;
        password.value = "";
        confirmation.value = "";
        showStatus(hasWarnings ? "已加密。原文件存在结构警告，请下载后检查 PDF 内容。" : "加密完成，可以下载 PDF。");
        downloadLink.focus();
    } catch (error) {
        showStatus(error.message || "加密失败，请重试。", true);
    } finally {
        fields.disabled = false;
        encryptButton.disabled = false;
    }
});

encryptButton.disabled = false;
