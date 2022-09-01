import "../../../Style.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  { storage } from "../../../service/firebase";
import 'firebase/storage'; 
import { useAuthContext } from "../../../context/Authcontext";
import { useEffect, useState } from "react";

interface Props {
  isEdit?: boolean;
  setError: Function;
  image: any;
  setProgress: Function;
  setImageUrl: Function;
  imageUrl: string;
}

interface postResponse {
  status: string;
  postId: number;
}

const Post: React.FC<Props> = ({isEdit, setError, image, setProgress, setImageUrl, imageUrl}) => {
  const BASE_URL = process.env.BASE_URL || "http://localhost:8080"
  const navigate = useNavigate();
  const { user, isPostSuccess, setIsPostSuccess } = useAuthContext();
  const [isPatchSuccess, setIsPatchSuccess] = useState<boolean>(false);
  
  const submitData = async () => {
    console.log("💖 Here's the image url:")
    console.log(imageUrl);
    const form:any = document.forms[0];
    let location: number[] = form[2].value.replace(" ", "").split(",").map(Number);
    const latitude: number = location[0];
    const longitude: number = location[1];
    const description: string = form[3].value;
    const userId = user.uid;

    let response;
    try {
      response = await axios.post<postResponse>(`${BASE_URL}/api/post`, {
        userId: userId,
        imageUrl: imageUrl,
        latitude: latitude,
        longitude: longitude,
        description: description
      })
      if (response?.statusText === "OK") {
        const postId = await response.data["postId"];
        await setIsPostSuccess(true);
        navigate(`/list/:${postId}`);
      }
    } catch (err) {
      console.log(err);
    } 
  }

  const uploadImage = () => {
    setError("");
    if (image === "") {
      console.log("File not selected");
      setError("File not selected");
      return;
    }
    console.log("Started uploading the photo");
    const storageRef = storage.ref("images/"); // Where in firebase to store the photo
    const imagesRef = storageRef.child(image.name); // the photo name

    const upLoadTask = imagesRef.put(image);

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        setProgress(percent);
      },
      (error) => {
        console.log("err", error);
        setError("File uploading failed" + error);
        setProgress(100);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
          console.log("download success?");
          console.log(downloadURL);
          await setImageUrl(downloadURL);
        })
      }
    )
  }

  const editPost = async () => {
    const form:any = document.forms[0];
    let location: number[]|undefined = form[2].value.replace(" ", "").split(",").map(Number);
    let latitude, longitude;
    if (location != undefined) {
      latitude = location[0];
      longitude = location[1];
    }
    let description;
    let descriptionTemp: string|undefined = form[3].value;
    if (descriptionTemp != undefined) {
      const description: string = descriptionTemp;
    }
    const userId = user.uid;

    let response;
    try {
      response = await axios.patch(`${BASE_URL}/api/post`, {
        userId: userId,
        imageUrl: imageUrl,
        latitude: latitude,
        longitude: longitude,
        description: description
      })
      if (response?.statusText === "OK") {
        const postId = await response.data["postId"];
        setIsPatchSuccess(true);
        navigate(`/list/:${postId}`);
      }
    } catch (err) {
      console.log(err);
    } 
  }

  useEffect(() => {
    if (imageUrl) submitData();
  }, [imageUrl])

  const handleSubmit = async () => {
    if (isEdit) {
      editPost();
    } else {
      uploadImage();
    }
  };

  return (
    <Button variant="primary" type="button" onClick={handleSubmit}>
      {isEdit && "Update"}
      {!isEdit && "Post"}
    </Button> 
  );
};

export default Post;