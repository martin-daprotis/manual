import {ImageContainer,ImgOptionContainer} from "./styles";


const extractFromImg = (str,prop) => {
  switch (prop) {
    case 'alt':{
      var altRegExp = /<img[^>]+alt='([^'>]+)'/g;
      let res= altRegExp.exec(str);
      return res ? res[1]:'';
    }
    case 'src':{
      var srcRegExp = /<img[^>]+src ='(https:\/\/[^'>]+)'/g;
      let res= srcRegExp.exec(str);
      return res ? res[1]:'';
    }
    case 'srcset':{
      var srcsetRegExp = /<img[^>]+srcset ='(https:\/\/[^'>]+)'/g;
      let res= srcsetRegExp.exec(str);
      return res ? res[1]:'';
    }
    default:
      return str;
  }
}

const ImageOptions = ({options,handleClick,...props}) => {
return (
      <ImgOptionContainer>
        {options.map(o => {
            const option =Object.entries(o)[0];
            const alt =extractFromImg(option[0],'alt')
            const src =extractFromImg(option[0],'src')
            const srcset =extractFromImg(option[0],'srcset')
            return <ImageContainer  onClick={() => handleClick(option[1])}>
                    <img style={{width:'10em',height:'10em'}} alt={`${alt}`} src={`${src}`} srcset={`${srcset}`}/>
                </ImageContainer>
          })}
      </ImgOptionContainer>
      )
  }

  export default ImageOptions;