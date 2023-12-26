import { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import './Gallery.css'
import axios from 'axios';

export default function Gallery() {
  const [imgList, setImgList] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try{
        const response = await axios.get(`http://3.36.63.145:8080/api/gallery?userId=${1}`)
        setImgList(response.data)
      }catch(error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className='GalleryWrapper'>
      <Header/>
      <div className='GalleryContainer'>
        <div className='text'>보관함</div>
          <div className='imgContainer'>
            {imgList.map((img, index)=>(
              <img key={index} src={img.url} alt={img.url} 
                style={{ width: "75vw", height: "auto", margin:"20px"}}/>
            ))}
          </div>
      </div>
    </div>
  )
}