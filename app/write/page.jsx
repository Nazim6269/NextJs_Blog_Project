"use client";

import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./writePage.module.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button
          className={styles.button}
          value={open}
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
      </div>
      {open && (
        <div>
          <div className={styles.add}>
            <button className={styles.button}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
          </div>
        </div>
      )}
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell me story..."
      />
    </div>
  );
};

export default WritePage;
