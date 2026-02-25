import { useState } from "react";
import { basic_url } from "../basic_url/basic_url";

function Upload({ onUploadSuccess }) {
  const [status, setStatus] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file); // "file" must match multer field name

    try {
      setStatus("Uploading...");
      const res = await fetch(`${basic_url}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setStatus(data.message || "Uploaded successfully");
      if (onUploadSuccess) onUploadSuccess();
    } catch (err) {
      setStatus("Error uploading file");
    }
  };

  return (
    <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-200">
      <p className="mb-2 font-semibold text-[11px] tracking-wide text-slate-300">
        Upload Docs
      </p>
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-4 text-center hover:border-emerald-400/70 hover:bg-slate-900 transition">
        <span className="text-[11px] text-slate-400">
          Drop files here or{" "}
          <span className="text-emerald-300 underline">browse</span>
        </span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      {status && <p className="mt-2 text-[10px] text-slate-400">{status}</p>}
    </div>
  );
}

export default Upload;