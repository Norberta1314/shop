import React, { useEffect, useState } from "react";
import { Col, Row, Upload } from "antd";
import { RcCustomRequestOptions } from "antd/lib/upload/interface";
import { UploadFile } from "antd/lib/upload/interface";
import { PlusOutlined } from "@ant-design/icons";
import { Dispatch } from "redux";
import { connect } from "dva";
import * as qiniu from "qiniu-js";
import { imgUrlBase } from "../../../../../../../../../config/config";
import deepCopy from "@/utils/deepCopy";
import styles from "./index.less";
import commonStyles from "../../../index.less";
import ReactIf from "@/components/ReactIf";

interface Props {
  label?: string;
  dispatch?: Dispatch<any>;
  imgNumber: number;
  fileList: string[] | string;
  onChangeImage: (value: (string | undefined)[] | string | undefined) => any;
}

const ImageManage: React.FC<Props> = (props) => {
    const [fileList, setFileList] = useState<Array<UploadFile<any>>>([]);
    const {fileList: propsFileList, imgNumber, onChangeImage, label} = props;

    function stringToUpliadFile(name: string): UploadFile<any> {
      return {
        uid: `-${name}`,
        name,
        status: "done",
        url: `${imgUrlBase}/${name}`,
        size: 0,
        type: "image"
      };
    }

    useEffect(() => {
      if (typeof propsFileList === "string") {
        if (propsFileList.trim()) {
          const item: UploadFile<any>[] = [stringToUpliadFile(propsFileList)];
          setFileList(item);
        } else {
          setFileList([]);
        }
      } else {
        if (propsFileList) {
          const localFileList: UploadFile<any>[] = propsFileList.map((i) => (
            stringToUpliadFile(i))
          );
          setFileList(localFileList);
        } else {
          setFileList([]);
        }
      }
    }, [propsFileList]);

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div>Upload</div>
      </div>
    );

    function uploadImage(options: RcCustomRequestOptions) {
      //@ts-ignore
      const ak = "gckn2ze0pdbvk1GQ_3HgQ2RhqynMCNoNrM-wpe8l";
      //@ts-ignore
      const sk = "wZ5tDZqdvL8WcZCDLtMtfmpOcPkfG7Mxssd-3tQ9";
      const uploadToken = "gckn2ze0pdbvk1GQ_3HgQ2RhqynMCNoNrM-wpe8l:GKQaP6MzsSEYy3D8WrEI0V6mj0U=:eyJzY29wZSI6Im5vcmJlcnRhLXNob3AiLCJkZWFkbGluZSI6MTU5MjI2OTcwN30=";
      const {file} = options;
      const fileName = `${new Date().getTime()}-${file.name}`;
      const putExtra = {
        fname: file.name,                          //原文件名
        params: {},                         //用来放置自定义变量
        mimeType: null                      //限制上传文件类型
      };
      const config = {
        region: qiniu.region.z2,             //存储区域(z0:代表华东;z2:代表华南,不写默认自动识别)
        concurrentRequestLimit: 3            //分片上传的并发请求量
      };
      const observable = qiniu.upload(file, fileName, uploadToken, putExtra, config);
      observable.subscribe(
        (result: any) => {                      //上传中(result参数带有total字段的 object，包含loaded、total、percent三个属性)
          Math.floor(result.total.percent);//查看进度[loaded:已上传大小(字节);total:本次上传总大小;percent:当前上传进度(0-100)]
        },
        (err: any) => {
          alert(err.message);
        },
        (res: any) => {
          console.log("上传完成", res);
          addFileList(fileName);
        });
    }

    function addFileList(value: string) {
      if (imgNumber === 1) {
        onChangeImage(value);
      } else {
        if (Array.isArray(propsFileList)) {
          const copyFileList = deepCopy(propsFileList);
          copyFileList.push(value);
          onChangeImage(copyFileList);
        }
      }
    }

    function removeImage(file: UploadFile) {
      if (typeof propsFileList === "string" || propsFileList === undefined) {
        console.log("remode")
        onChangeImage("");
      } else {
        const fileNameIndex = fileList.findIndex((i) => i.name === file.name);
        const copyFileList = deepCopy(propsFileList);
        copyFileList.splice(fileNameIndex, 1);
        onChangeImage(copyFileList);
      }
      return true;
    }

    return (
      <div className={`${commonStyles.commonEdit} ${styles.main}`}>
        <Row align="middle">
          <Col>
            <ReactIf vIf={label}>
              <div className={commonStyles.label}>{label}:</div>
            </ReactIf>
          </Col>
          <Col offset={label && 1}>
            <Upload
              listType="picture-card"
              fileList={fileList}
              customRequest={uploadImage}
              onRemove={removeImage}>
              {fileList.length < imgNumber ? uploadButton : null}
            </Upload>
          </Col>
        </Row>
      </div>
    );
  }
;

export default connect()(ImageManage);
