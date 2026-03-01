import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
// import { ImageResize, ImageStyle } from '@ckeditor/ckeditor5-image';

const CKEditorField = ({ field, form, ...props }) => {
  const token = localStorage.getItem("token");
  const BASE_URL = process.env.REACT_APP_IMAGE_URL;

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("file", file);
            body.append("fileName", file.name);
            body.append("containerName", "ddkh");

            axios
              .post(`/api/v1/files/upload`, body, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((response) => {
                const imageUrl = response.data.data;
                resolve({ default: `${BASE_URL}${imageUrl}` });
              })
              .catch((error) => {
                console.error("Upload error", error);
                reject(error);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const editorConfiguration = {
    plugins: [
      ClassicEditor.builtinPlugins,
      Image,
      // ImageResize,
      // ImageStyle,
    ],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "imageUpload",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "|",
        "undo",
        "redo",
      ],
    },
    image: {
      resizeOptions: [
        {
          name: "resizeImage:original",
          value: null,
          label: "Original",
        },
        {
          name: "resizeImage:40",
          value: "40",
          label: "40%",
        },
        {
          name: "resizeImage:60",
          value: "60",
          label: "60%",
        },
      ],
      toolbar: ["resizeImage", "|", "imageStyle:full", "imageStyle:side"],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    language: "tr",
    placeholder: "",
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        extraPlugins: [uploadPlugin],
        editorConfiguration,
      }}
      data={field.value || ""}
      onChange={(event, editor) => {
        const data = editor.getData();
        form.setFieldValue(field.name, data);
      }}
      {...props}
    />
  );
};

export default CKEditorField;
